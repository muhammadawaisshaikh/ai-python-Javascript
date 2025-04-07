import boto3
import joblib
import json
import re
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords

s3 = boto3.client('s3')
bucket_name = "spam-classifier-bucket"

def load_model():
    obj = s3.get_object(Bucket=bucket_name, Key="models/spam_classifier.pkl")
    return joblib.load(obj['Body'])

def load_vectorizer():
    obj = s3.get_object(Bucket=bucket_name, Key="models/tfidf_vectorizer.pkl")
    return joblib.load(obj['Body'])

model = load_model()
vectorizer = load_vectorizer()

def preprocess_text(text):
    text = re.sub(r'[^a-zA-Z]', ' ', text)
    tokens = word_tokenize(text.lower())
    return ' '.join(tokens)

def lambda_handler(event, context):
    text = json.loads(event['body'])['text']
    processed_text = preprocess_text(text)
    vectorized_text = vectorizer.transform([processed_text])
    prediction = model.predict(vectorized_text)
    return {"statusCode": 200, "body": json.dumps({"prediction": "Spam" if prediction[0] == 1 else "Ham"})}