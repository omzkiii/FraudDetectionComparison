import pandas as pd
from nltk.corpus import stopwords
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer

dataset = "../datasets/uci.csv"

def eda(dataset):
    """
    Exploratory Data Analysis
    """
    df = pd.read_csv(dataset, encoding='latin-1')
    df = df.drop(labels=["Unnamed: 2", "Unnamed: 3", "Unnamed: 4"], axis = 1)
    df.columns = ['label', 'text']
    print("=============HEAD=============")
    print(df.head())

    print("\n\n\n=============TAIL=============")
    print(df.tail())

    print("\n\n\n=============INFO=============")
    print(df.info())

    print("\n\n\n=============GROUPED DATA=============")
    print(df.groupby('label').describe())

    # Get the sentiment of text to determine what sentiment spam messages exhibit




    # Get the length of text to determine average length of spam messages



def preprocess(dataset = dataset):
    """
    Applies NLP preprocessing to dataset, extract and engineer features

    Params:
    dataset - list
    index - int
    """

    df = pd.read_csv(dataset, encoding='latin-1')
    df = df.drop(labels=["Unnamed: 2", "Unnamed: 3", "Unnamed: 4"], axis = 1)
    df.columns = ['label', 'text']
    df['target'] = df['label'].map( {'spam': 1, 'ham': 0} ).astype(int)
    
    # Removes punctuations and stopwords in the message
    stopwords_list = stopwords.words('english')
    df['clean_text'] = df['text'].apply(lambda text: ' '.join([word.lower() for word in text.split() 
                                        if word not in stopwords_list and word.isalnum()]))

    processed_df = df[['target','clean_text']]
    return processed_df


def get_training_data(dataset, test_size = .3, random_state = 100):
    X_train_raw, X_test_raw, y_train, y_test = train_test_split(dataset['clean_text'], dataset['target'], 
                                                    test_size=test_size, random_state=random_state)

    vect = TfidfVectorizer()
    X_train_fin = vect.fit_transform(X_train_raw)
    X_test_fin = vect.transform(X_test_raw)

    return X_train_fin, X_test_fin, y_train, y_test


def get_vectorizer(dataset, test_size = .3, random_state = 100):
    X_train, _, _, _ = train_test_split(dataset['clean_text'], dataset['target'], 
                                                    test_size=test_size, random_state=random_state)

    vect = TfidfVectorizer()
    vect.fit(X_train)
    return vect


def process_input(text, test_size=0.2, random_state=100):
    stopwords_list = stopwords.words('english')
    clean_text = ' '.join([word.lower() for word in text.split() if word not in stopwords_list and word.isalnum()])
    vect = get_vectorizer(preprocess(dataset), test_size=test_size, random_state=random_state)
    X_test = vect.transform(text)
    print(X_test)
    return text


if __name__ == '__main__':
    # eda(dataset)
    # print("\n\n\n\n")
    # get_training_data(preprocess(dataset), 0.2, 21)
    process_input("Good Day!This Is MS.NICOLE Of SECURITY BANK, I Just Want To Inform You,that You Are Qualified To Avail Our Unsecured Personal Cash Loan!You Can Loan 100K Up To 5M,depending On Your Monthly Income.No Collateral,No Hidden Charges.2-3 Banking Days Processing!Pls.Reply Yes,your Name And Your Contact # To Expedite Your Loan. Thank you so much")

