import pandas as pd
from text_cleaner import clean_text
from wordcloud_generator import generate_wordclouds
from visualization import plot_sentiment_distribution
from sentiment_analysis import get_sentiment

# Load and prepare the dataset
data = pd.read_csv('training.csv', encoding='ISO-8859-1', header=None)
column_names = ['target', 'ids', 'date', 'flag', 'user', 'text']
data.columns = column_names

# Apply the clean_text function to clean tweet text
data['cleaned_text'] = data['text'].apply(clean_text)

# Apply sentiment analysis function to cleaned text
data['sentiment'] = data['cleaned_text'].apply(get_sentiment)

# Display cleaned text and sentiment columns
print(data[['text', 'cleaned_text', 'sentiment']].head())

# Generate word clouds
generate_wordclouds(data)

# Plot sentiment distribution
plot_sentiment_distribution(data)