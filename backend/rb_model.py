import utils
import pandas as pd
from nltk import FreqDist
import nltk
from nltk.sentiment import SentimentIntensityAnalyzer
from nltk.tokenize import word_tokenize
from textblob import TextBlob

used_words = []

def get_words(text):
    words = word_tokenize(text)
    # used_words.append(word for word in words)
    for word in words:
        used_words.append(word)

def get_used_words(df):
    df.apply(lambda x: get_words(x))
    return used_words
    

def rule_based():
    df = pd.DataFrame(utils.preprocess())
    spam_df = df[df['target'] == 1]
    
    # sia = SentimentIntensityAnalyzer()

    # get_words("A QUICK BROWN FOX JUMPS OVER THE LAZY DOG")

    get_used_words(df['clean_text'])

    mfw = FreqDist(used_words)
    print(mfw.most_common(10))

    # df['clean_text'].apply(lambda x: get_words(x))


    # spam_df['polarity'] = spam_df['clean_text'].apply(lambda x: TextBlob(x).polarity)
    # spam_df['sentiment'] = spam_df['clean_text'].apply(lambda x: TextBlob(x).sentiment)
    # print(spam_df['polarity'])
    # print(spam_df['sentiment'])

    

if __name__ == "__main__":
    rule_based()
