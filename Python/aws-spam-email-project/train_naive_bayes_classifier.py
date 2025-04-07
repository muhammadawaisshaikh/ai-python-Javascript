import boto3
import joblib
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score

# Load preprocessed data from S3
s3 = boto3.client('s3')
bucket_name = "spam-classifier-bucket"
processed_key = "processed_data.csv"

obj = s3.get_object(Bucket=bucket_name, Key=processed_key)
data = pd.read_csv(obj['Body'])

# Feature extraction
vectorizer = TfidfVectorizer(max_features=3000)
X = vectorizer.fit_transform(data['cleaned_text']).toarray()
y = data['label']

# Train/Test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = MultinomialNB()
model.fit(X_train, y_train)

# Evaluate
y_pred = model.predict(X_test)
print(f"Accuracy: {accuracy_score(y_test, y_pred)}")

# Save model and vectorizer
joblib.dump(model, "spam_classifier.pkl")
joblib.dump(vectorizer, "tfidf_vectorizer.pkl")

# Upload to S3
s3.upload_file("spam_classifier.pkl", bucket_name, "models/spam_classifier.pkl")
s3.upload_file("tfidf_vectorizer.pkl", bucket_name, "models/tfidf_vectorizer.pkl")