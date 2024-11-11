import matplotlib.pyplot as plt
from wordcloud import WordCloud

# Function to generate word clouds from positive and negative tweets data
def generate_wordclouds(data):
    # Separate positive and negative tweets based on the 'target' column
    positive_tweets = data[data['target'] == 4]['text']
    negative_tweets = data[data['target'] == 0]['text']

    # Sample some positive and negative tweets to create word clouds
    sample_positive_text = " ".join(text for text in positive_tweets.sample(frac=0.1, random_state=23))
    sample_negative_text = " ".join(text for text in negative_tweets.sample(frac=0.1, random_state=23))

    # Generate word cloud images for both positive and negative sentiments
    wordcloud_positive = WordCloud(width=800, height=400, max_words=200, background_color="white").generate(sample_positive_text)
    wordcloud_negative = WordCloud(width=800, height=400, max_words=200, background_color="white").generate(sample_negative_text)

    # Display the generated image using matplotlib
    plt.figure(figsize=(15, 7.5))

    # Positive word cloud
    plt.subplot(1, 2, 1)
    plt.imshow(wordcloud_positive, interpolation='bilinear')
    plt.title('Positive Tweets Word Cloud')
    plt.axis("off")

    # Negative word cloud
    plt.subplot(1, 2, 2)
    plt.imshow(wordcloud_negative, interpolation='bilinear')
    plt.title('Negative Tweets Word Cloud')
    plt.axis("off")

    plt.show()