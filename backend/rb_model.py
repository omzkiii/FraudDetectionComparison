import utils
import pandas as pd
from nltk import FreqDist
import nltk
from nltk.tokenize import word_tokenize
from textblob import TextBlob


def get_words(text, used_words):
    words = word_tokenize(text)
    used_words.extend([word for word in words if len(word)>2])

def get_used_words(df):
    used_words = []
    df.apply(lambda x: get_words(x, used_words))
    return used_words
    

def rule_based(text):
    df = pd.DataFrame(utils.preprocess())
    spam_df = df[df['target'] == 1]
    ham_df = df[df['target'] == 0]

    spam_used_words = FreqDist(get_used_words(spam_df['clean_text']))
    ham_used_words = FreqDist(get_used_words(ham_df['clean_text']))

    print(spam_used_words.most_common(10))
    print(ham_used_words.most_common(10))

    sus_words = []
    for word in [spam for spam in spam_used_words]:
        if word not in [ham[0] for ham in ham_used_words.most_common(20)]:
            sus_words.append(word)


    # result = spam_used_words - ham_used_words
    # print("Subtracted: ", sus_words[:50])

    
    

    spam_df['polarity'] = spam_df['clean_text'].apply(lambda x: TextBlob(x).polarity)
    spam_df['subjectivity'] = spam_df['clean_text'].apply(lambda x: TextBlob(x).subjectivity)
    ham_df['polarity'] = ham_df['clean_text'].apply(lambda x: TextBlob(x).polarity)
    ham_df['subjectivity'] = ham_df['clean_text'].apply(lambda x: TextBlob(x).subjectivity)

    spam_average_polarity = spam_df['polarity'].mean()
    spam_max_polarity = spam_df['polarity'].max()
    spam_min_polarity = spam_df['polarity'].min()
    spam_average_subjectivity = spam_df['subjectivity'].mean()
    spam_max_subjectivity = spam_df['subjectivity'].max()
    spam_min_subjectivity = spam_df['subjectivity'].min()

    ham_average_polarity = ham_df['polarity'].mean()
    ham_max_polarity  = ham_df['polarity'].max()
    ham_min_polarity  = ham_df['polarity'].min()
    ham_average_subjectivity = ham_df['subjectivity'].mean()
    ham_max_subjectivity = ham_df['subjectivity'].max()
    ham_min_subjectivity = ham_df['subjectivity'].min()



    print("Spam Average Polarity: ", spam_average_polarity)
    print("Spam Average Subjectivity: ", spam_average_subjectivity)
    print("Spam Max Polarity: ", spam_max_polarity)
    print("Spam Min Polarity: ", spam_min_polarity)
    print("Spam Max Subjectivity: ", spam_max_subjectivity)
    print("Spam Min Subjectivity: ", spam_min_subjectivity)
    print("\n\n\n")
    print("Ham Average Polarity: ", ham_average_polarity)
    print("Ham Average Subjectivity: ", ham_average_subjectivity)
    print("Ham Max Polarity: ", ham_max_polarity)
    print("Ham Min Polarity: ", ham_min_polarity)
    print("Ham Max Subjectivity: ", ham_max_subjectivity)
    print("Ham Min Subjectivity: ", ham_min_subjectivity)



    

if __name__ == "__main__":
    rule_based("WINNER!! As a valued network customer you have been selected to receivea å£900 prize reward! To claim call 09061701461. Claim code KL341. Valid 12 hours only.")
