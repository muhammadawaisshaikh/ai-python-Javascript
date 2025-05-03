import json
import boto3
from datetime import datetime
import pytz
import re

def lambda_handler(event, context):
    # Parse input from Bedrock agent
    input_text = event['inputText']
    
    # Extract timezone from user input (e.g., "What time is it in Europe/London?")
    timezone = extract_timezone(input_text)
    
    if not timezone:
        # If no timezone specified, use UTC or prompt user
        return {
            'statusCode': 200,
            'response': {
                'message': "I can tell you the current time. Please specify a timezone (e.g., 'What time is it in New York?') or I can use UTC."
            }
        }
    
    try:
        # Get current time in specified timezone
        current_time = get_current_time(timezone)
        response_message = f"The current time in {timezone} is {current_time}."
    except pytz.UnknownTimeZoneError:
        response_message = f"Sorry, I don't recognize the timezone '{timezone}'. Please try another major city or timezone."

    return {
        'statusCode': 200,
        'response': {
            'message': response_message
        }
    }

def extract_timezone(text):
    # Look for timezone patterns in the user input
    patterns = [
        r'in\s+(?:the\s+)?(?:timezone\s+)?([A-Za-z\/_]+)',  # "in Europe/London"
        r'in\s+([A-Za-z\s]+)$',  # "in New York"
        r'for\s+([A-Za-z\s]+)$'  # "time for Tokyo"
    ]
    
    for pattern in patterns:
        match = re.search(pattern, text, re.IGNORECASE)
        if match:
            timezone_str = match.group(1).strip()
            return convert_city_to_tz(timezone_str)
    
    return None

def convert_city_to_tz(city_name):
    # Map common city names to timezones
    city_to_tz = {
        'new york': 'America/New_York',
        'london': 'Europe/London',
        'tokyo': 'Asia/Tokyo',
        'paris': 'Europe/Paris',
        'los angeles': 'America/Los_Angeles',
        'chicago': 'America/Chicago',
        'sydney': 'Australia/Sydney',
        'berlin': 'Europe/Berlin'
    }
    
    lower_city = city_name.lower()
    return city_to_tz.get(lower_city, city_name)  # Return original if not in map

def get_current_time(timezone):
    # Get current time in specified timezone
    tz = pytz.timezone(timezone)
    now = datetime.now(tz)
    return now.strftime('%Y-%m-%d %H:%M:%S %Z')