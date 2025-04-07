import boto3
import pandas as pd
import re

# S3 setup
s3 = boto3.client('s3')
bucket_name = "spam-classifier-bucket"
dataset_key = "spam_ham_dataset.csv"
processed_key = "processed_data.csv"

# Define stopwords manually (common words in English)
STOP_WORDS = {
    "i", "me", "my", "myself", "we", "our", "ours", "ourselves", "you", "your", "yours",
    "yourself", "yourselves", "he", "him", "his", "himself", "she", "her", "hers",
    "herself", "it", "its", "itself", "they", "them", "their", "theirs", "themselves",
    "what", "which", "who", "whom", "this", "that", "these", "those", "am", "is", "are",
    "was", "were", "be", "been", "being", "have", "has", "had", "having", "do", "does",
    "did", "doing", "a", "an", "the", "and", "but", "if", "or", "because", "as", "until",
    "while", "of", "at", "by", "for", "with", "about", "against", "between", "into",
    "through", "during", "before", "after", "above", "below", "to", "from", "up", "down",
    "in", "out", "on", "off", "over", "under", "again", "further", "then", "once", "here",
    "there", "when", "where", "why", "how", "all", "any", "both", "each", "few", "more",
    "most", "other", "some", "such", "no", "nor", "not", "only", "own", "same", "so",
    "than", "too", "very", "s", "t", "can", "will", "just", "don", "should", "now"
}

# Simple Lemmatization (Removing 'ing', 'ed', 's' endings)
def simple_lemmatize(word):
    if word.endswith("ing"):
        return word[:-3]  # running -> run
    elif word.endswith("ed"):
        return word[:-2]  # played -> play
    elif word.endswith("s") and len(word) > 1:
        return word[:-1]  # cars -> car
    return word

# Text preprocessing function
def preprocess_text(text):
    text = re.sub(r'[^a-zA-Z\s]', ' ', text)  # Remove non-alphabetic characters
    words = text.lower().split()  # Tokenize by splitting on spaces
    filtered_words = [simple_lemmatize(word) for word in words if word not in STOP_WORDS]
    return ' '.join(filtered_words)

def lambda_handler(event, context):
    # Load dataset from S3
    obj = s3.get_object(Bucket=bucket_name, Key=dataset_key)
    data = pd.read_csv(obj['Body'], encoding='latin-1')
    
    # Rename columns
    data = data.rename(columns={"v1": "label", "v2": "text"})
    data['label'] = data['label'].map({'ham': 0, 'spam': 1})
    
    # Apply text preprocessing
    data['cleaned_text'] = data['text'].apply(preprocess_text)

    # Convert processed data to CSV format
    processed_csv = data.to_csv(index=False)

    # Upload back to S3
    s3.put_object(Bucket=bucket_name, Key=processed_key, Body=processed_csv)

    return {"statusCode": 200, "body": "Data Preprocessing Completed"}