from sklearn.neural_network import MLPClassifier
from sklearn.metrics import accuracy_score, recall_score, precision_score, f1_score
from sklearn.metrics import classification_report, confusion_matrix
from sklearn.feature_extraction.text import TfidfVectorizer
import pandas as pd
import pickle

import utils

def nn_clf(X_train, y_train):
    mlp = MLPClassifier(hidden_layer_sizes=(1000,), activation='logistic', solver='adam', max_iter=500)
    mlp.fit(X_train, y_train)

    with open('nn_model_detect.pkl', 'wb') as file:
        pickle.dump(mlp, file)

    return mlp


def neural_network(test_size=0.2, random_state=100): 
    X_train, X_test, y_train, y_test = utils.get_training_data(utils.preprocess(), test_size=test_size, random_state=random_state)
    mlp = nn_clf(X_train, y_train)
    predict_train = mlp.predict(X_train)
    predict_test = mlp.predict(X_test)

    # cm_train = confusion_matrix(y_train, predict_train)
    # cr_train = classification_report(y_train, predict_train)

    # cm_test = confusion_matrix(y_test, predict_test)
    # cr_test = classification_report(y_test, predict_test)

    accuracy = accuracy_score(y_test, predict_test)
    recall = recall_score(y_test, predict_test)
    precision = precision_score(y_test, predict_test)
    f1 = f1_score(y_test, predict_test)
    
    print("Accuracy: ", accuracy)
    print("Recall: ", recall)
    print("Precision: ", precision)
    print("F1: ", f1)

    return accuracy, recall, precision, f1



def detect_fraud_nn(text):
    df = utils.preprocess()
    X = df['clean_text']
    y = df['target']

    vect = TfidfVectorizer()
    X_vector =  vect.fit_transform(X)
    model = nn_clf(X_vector, y)

    text_df = utils.process_input(text)
    text_vector = vect.transform(text_df['clean_text'])
    df = pd.DataFrame(text_vector.toarray())
    result = model.predict(text_vector)
    return result[0]


if __name__ == "__main__":
    # neural_network()

    sample_input = r"Good Day!This Is MS.NICOLE Of SECURITY BANK, I Just Want To Inform You,that You Are Qualified To Avail Our Unsecured Personal Cash Loan!You Can Loan 100K Up To 5M,depending On Your Monthly Income.No Collateral,No Hidden Charges.2-3 Banking Days Processing!Pls.Reply Yes,your Name And Your Contact # To Expedite Your Loan. Thank you so much"
    sample_input2 = """JILI FC Free Gift 188 peso! Google ""boom188org"" and claim now er"""
    sample_input3 = """England v Macedonia - dont miss the goals/team news. Txt ur national team to 87077 eg ENGLAND to 87077 Try:WALES, SCOTLAND 4txt/̼1.20 POBOXox36504W45WQ 16+"""

    print(f"Input 2: {detect_fraud_nn(sample_input2)}")
    print(f"Input 3: {detect_fraud_nn(sample_input3)}")

