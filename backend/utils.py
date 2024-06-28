import pandas as pd

datasets = ["../datasets/uci.csv", "../datasets/ph.csv"]

def eda(datasets, index):
    """
    Exploratory Data Analysis
    """
    if index == 0:
        df = pd.read_csv(datasets[index], encoding='latin-1')
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






def preprocess(datasets, index):
    if index == 0:
        df = pd.read_csv(datasets[index], encoding='latin-1')
        df = df.drop(labels=["Unnamed: 2", "Unnamed: 3", "Unnamed: 4"], axis = 1)
        df.columns = ['label', 'feature']
        df['target'] = df['label'].map( {'spam': 1, 'ham': 0} ).astype(int)
        print(df.head())
        



    



if __name__ == '__main__':
    eda(datasets, 0);

