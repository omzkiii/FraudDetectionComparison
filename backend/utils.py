import pandas as pd

dataset = "../datasets/uci.csv"

def eda(dataset):
    """
    Exploratory Data Analysis
    """
    df = pd.read_csv(dataset, encoding='latin-1')
    df = df.drop(labels=["Unnamed: 2", "Unnamed: 3", "Unnamed: 4"], axis = 1)
    df.columns = ['label', 'feature']
    print("=============HEAD=============")
    print(df.head())

    print("\n\n\n=============TAIL=============")
    print(df.tail())

    print("\n\n\n=============INFO=============")
    print(df.info())

    print("\n\n\n=============GROUPED DATA=============")
    print(df.groupby('label').describe())



def preprocess(dataset):
    """
    Cleans dataset, extract and engineer features

    Params:
    dataset - list
    index - int
    """

    df = pd.read_csv(dataset, encoding='latin-1')
    df = df.drop(labels=["Unnamed: 2", "Unnamed: 3", "Unnamed: 4"], axis = 1)
    df.columns = ['label', 'feature']
    df['target'] = df['label'].map( {'spam': 1, 'ham': 0} ).astype(int)
    print(df.groupby('target').describe())



if __name__ == '__main__':
    eda(dataset)
    print("\n\n\n\n")
    preprocess(dataset)

