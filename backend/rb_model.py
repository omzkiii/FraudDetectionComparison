from operator import mul
from nltk.classify.textcat import re
from nltk.data import retrieve
from nltk.stem.snowball import stopwords
from sklearn.utils.sparsefuncs import inplace_swap_column
from sklearn.metrics import precision_score, recall_score, accuracy_score, f1_score
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

def get_sentiment():
    df = pd.DataFrame(utils.preprocess())
    df['polarity'] = df['clean_text'].apply(lambda x: TextBlob(x).polarity)
    average_polarity = df['polarity'].mean()
    
    df = pd.DataFrame(utils.preprocess())
    df['subjectivity'] = df['clean_text'].apply(lambda x: TextBlob(x).subjectivity)
    average_subjectivity = df['subjectivity'].mean()
    return average_polarity, average_subjectivity

def sus_words_percent(df_input):
    df = pd.DataFrame(utils.preprocess())
    spam_df = df[df['target'] == 1]
    ham_df = df[df['target'] == 0]

    spam_used_words = FreqDist(get_used_words(spam_df['clean_text']))
    ham_used_words = FreqDist(get_used_words(ham_df['clean_text']))
    
    sus_words = []
    for word in [spam for spam in spam_used_words]:
        if word not in [ham[0] for ham in ham_used_words.most_common(20)]:
            sus_words.append(word)
    sus_words = sus_words[:100]

    def get_sus_words(input):
        score = 0
        sus_word_counter = 0
        words = input.split(" ")
        for word in words:
            if (word in sus_words):
                sus_word_counter+=1
        score = (sus_word_counter/len(words))
        return score

    df_input['sus_words_no'] = df_input['clean_text'].apply(lambda x: get_sus_words(x))
    return df_input

def get_polscore(avg_pol_input, average_polarity):    
    if (abs(avg_pol_input - average_polarity) > 0.1):
        polscore = 0
    else:
        polscore = abs(0.1 - abs(avg_pol_input - average_polarity))*100 
    return (polscore/10)*0.8

def get_subscore(avg_sub_input, average_subjectivity):
    subscore = 0
    if (abs(avg_sub_input - average_subjectivity > 0.1)):
        subscore = 0
    else:
        subscore = abs(0.1 - abs(avg_sub_input -average_subjectivity))*100 
    return (subscore/10)*0.2
    

def sentiment_percent(input_df):
    average_polarity, average_subjectivity = get_sentiment()
    input_df['polscore'] = input_df['clean_text'].apply(lambda x: TextBlob(x).polarity)
    input_df['subscore'] = input_df['clean_text'].apply(lambda x: TextBlob(x).subjectivity)
    input_df['polscore'] = input_df['polscore'].apply(lambda x: get_polscore(x, average_polarity))
    input_df['subscore'] = input_df['subscore'].apply(lambda x: get_subscore(x, average_subjectivity))
    input_df['sentiment_score'] = input_df['subscore'] + input_df['polscore']
    return input_df


def overall_score(input_df):
    input_df['length'] = input_df['clean_text'].apply(lambda x: len(x.split(" ")))
    # input_df['multiplier'] = input_df['length'].apply(lambda x: min((x/24)*0.80, 0.80))
    input_df['multiplier'] = input_df['length'].apply(lambda x: (x*0)+1)
    input_df['others_multi'] = input_df['multiplier'].apply(lambda x: 1 - x)
    input_df = sentiment_percent(input_df)
    input_df = sus_words_percent(input_df)
    input_df['score'] = (input_df['multiplier']*input_df['sus_words_no']) + (input_df['sentiment_score']*input_df['others_multi'])
    input_df['result'] = input_df['score'].apply(lambda x:  0 if x <= 0.043032 else 1)
    return input_df
    
    
def get_stats():
    df = pd.DataFrame(utils.preprocess())
    df_result = overall_score(df)
    
    df_clean = df_result[df_result['sentiment_score'] < 1]

    actual = df_result['target']
    predict = df_result['result']

    accuracy = accuracy_score(actual, predict)
    precision = precision_score(actual, predict)
    recall = recall_score(actual, predict)
    f1 = f1_score(actual, predict)


    print(f"Accurary: {accuracy}")
    print(f"Precision: {precision}")
    print(f"Recall: {recall}")
    print(f"F-1 score: {f1}")
    print(f"=============================")



def rule_based(text):
    input_df = utils.process_input(text)
    result_df = overall_score(input_df)

    if (result_df['result'][0] == 0):
        print("HAM!!!!!!!!!!!!!!!!")
    else:
        print("SPAM!!!!!!!!!!!!!!!!!!!")
    

    
if __name__ == "__main__":
    sample_input = r"Good Day!This Is MS.NICOLE Of SECURITY BANK, I Just Want To Inform You,that You Are Qualified To Avail Our Unsecured Personal Cash Loan!You Can Loan 100K Up To 5M,depending On Your Monthly Income.No Collateral,No Hidden Charges.2-3 Banking Days Processing!Pls.Reply Yes,your Name And Your Contact # To Expedite Your Loan. Thank you so much"
    sample_input2 = """JILI FC Free Gift 188 peso! Google ""boom188org"" and claim now er"""
    sample_input3 = """England v Macedonia - dont miss the goals/team news. Txt ur national team to 87077 eg ENGLAND to 87077 Try:WALES, SCOTLAND 4txt/̼1.20 POBOXox36504W45WQ 16+"""
    rule_based(sample_input)
    rule_based(sample_input2)
    rule_based(sample_input3)

