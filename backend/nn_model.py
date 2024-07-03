from sklearn.neural_network import MLPClassifier
from sklearn.metrics import accuracy_score, recall_score, precision_score, f1_score
from sklearn.metrics import classification_report, confusion_matrix
from sklearn.feature_extraction.text import TfidfVectorizer
import pandas as pd
import pickle

import utils

def nn_clf(X_train, y_train, mode='detect', test_size=None, random_state=None):
    mlp = MLPClassifier(hidden_layer_sizes=(1000,), activation='logistic', solver='adam', max_iter=500)
    mlp.fit(X_train, y_train)

    fileName = None
    
    if(mode=="detect"):
        fileName = './backend/nn_model_detect.pkl'
    else:
        fileName = f'./backend/nn_model_{str(test_size).split('.')[1]}_{random_state}.pkl'

    with open(fileName, 'wb') as file:
        pickle.dump(mlp, file)

    return mlp


def neural_network(test_size=0.2, random_state=100): 
    X_train, X_test, y_train, y_test = utils.get_training_data(utils.preprocess(), test_size=test_size, random_state=random_state)

    # check if pickled model already exist
    try:
        file = open(f'./backend/nn_model_{str(test_size).split('.')[1]}_{random_state}.pkl', 'rb')
    except FileNotFoundError:
        mlp = nn_clf(X_train, y_train, mode="compare", test_size=test_size, random_state=random_state)
    else:
        with file:
            mlp = pickle.load(file)

    predict_train = mlp.predict(X_train)
    predict_test = mlp.predict(X_test)

    accuracy = accuracy_score(y_test, predict_test)
    recall = recall_score(y_test, predict_test)
    precision = precision_score(y_test, predict_test)
    f1 = f1_score(y_test, predict_test)

    print(f'Result for Test Size = {test_size} and Random State = {random_state}')
    print("Accuracy: ", accuracy)
    print("Recall: ", recall)
    print("Precision: ", precision)
    print("F1: ", f1)

    result = [accuracy, float(precision), float(recall), float(f1)]

    return result



def detect_fraud_nn(text):
    df = utils.preprocess()
    X = df['clean_text']
    y = df['target']

    vect = TfidfVectorizer()
    X_vector =  vect.fit_transform(X)

    try:
        file = open('./backend/nn_model_detect.pkl', 'rb')
    except FileNotFoundError:
        model = nn_clf(X_vector, y)
    else:
        with file:
            model = pickle.load(file)
    

    text_df = utils.process_input(text)
    text_vector = vect.transform(text_df['clean_text'])
    df = pd.DataFrame(text_vector.toarray())
    result = model.predict(text_vector)
    return result[0]


if __name__ == "__main__":
    
    neural_network()

    # sample_input = """Get 100% DEPOSIT BONUS on Jackpot City! Register now and get FREE MONEY! jackpotcityph10.com"""
    # sample_input2 = """JILI FC Free Gift 188 peso! Google ""boom188org"" and claim now er"""
    # sample_input3 = """England v Macedonia - dont miss the goals/team news. Txt ur national team to 87077 eg ENGLAND to 87077 Try:WALES, SCOTLAND 4txt/̼1.20 POBOXox36504W45WQ 16+"""

    # print(f"Input 2: {detect_fraud_nn(sample_input2)}")
    # print(f"Input 3: {detect_fraud_nn(sample_input3)}")

