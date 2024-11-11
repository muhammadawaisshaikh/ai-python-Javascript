import matplotlib.pyplot as plt

def plot_sentiment_distribution(data):
    """
    Plots the sentiment distribution as a bar chart.
    
    Parameters:
    - data (pd.DataFrame): DataFrame containing a 'sentiment' column with sentiment labels
    
    """
    sentiment_counts = data['sentiment'].value_counts()
    plt.figure(figsize=(8, 5))
    sentiment_counts.plot(kind='bar', color=['green', 'gray', 'red'])
    plt.title('Sentiment Analysis of Tweets')
    plt.xlabel('Sentiment')
    plt.ylabel('Number of Tweets')
    plt.xticks(rotation=0)
    plt.show()
