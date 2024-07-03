import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from utils import preprocess, get_training_data, dataset, process_input
from sklearn.metrics import classification_report, confusion_matrix, precision_score, recall_score, roc_curve, accuracy_score, f1_score
from sklearn.feature_extraction.text import TfidfVectorizer
import pickle


# TODO Get parameters from user input

def ml_clf(X_train, y_train, mode='detect', test_size=None, random_state=None, def_threshold=None):
    model = RandomForestClassifier()
    model.fit(X_train, y_train)

    fileName = None
    
    if(mode=="detect"):
        fileName = 'ml_model_detect.pkl'
    else:
        fileName = f'ml_model_{str(test_size).split('.')[1]}_{random_state}_{def_threshold}.pkl'

    with open(fileName, 'wb') as file:
        pickle.dump(model, file)


    return model


def detect_fraud_ml(text):
    df = preprocess(dataset)
    X = df['clean_text']
    y = df['target']

    vect = TfidfVectorizer()
    X_vector =  vect.fit_transform(X)

    try:
        file = open('ml_model_detect.pkl', 'rb')
    except FileNotFoundError:
        model = ml_clf(X_vector, y)
    else:
        with file:
            model = pickle.load(file)
    
    text_df = process_input(text)
    text_vector = vect.transform(text_df['clean_text'])
    result = model.predict(text_vector)
    return result[0]


def train_ml_model(def_threshold=True, test_size=0.2, random_state=100, threshold=0.3):
    X_train, X_test, y_train, y_test = get_training_data(preprocess(dataset),test_size,random_state)

    # check if pickled model already exist
    try:
        file = open(f'ml_model_{str(test_size).split('.')[1]}_{random_state}_{def_threshold}.pkl', 'rb')
    except FileNotFoundError:
        model = ml_clf(X_train, y_train, mode="compare", test_size=test_size, random_state=random_state, def_threshold=def_threshold)
    else:
        with file:
            model = pickle.load(file)


    y_pred = None

    if def_threshold:
        y_pred = model.predict(X_test)
    else:
        # model with modified classification threshold
        y_prob = model.predict_proba(X_test)
        y_pred = pd.DataFrame(y_prob)
        y_pred['pred'] = y_pred[1].apply(lambda x: 1 if x>=threshold else 0)
        y_pred = y_pred['pred']


    accuracy = accuracy_score(y_test, y_pred)
    precision = precision_score(y_test, y_pred)
    recall = recall_score(y_test, y_pred)
    f1 = f1_score(y_test, y_pred)
    fpr, tpr, thresholds_roc = roc_curve(y_test, y_pred)
    report = classification_report(y_test, y_pred)
    cm = confusion_matrix(y_test, y_pred)


    print(f"Accurary: {accuracy}")
    print(f"Precision: {precision}")
    print(f"Recall: {recall}")
    print(f"F-1 score: {f1}")
    print(f"=============================")
    print(f"False positive rate: {fpr}")
    print(f"True positive rate: {tpr}")
    print(f"Threshold: {thresholds_roc}")
    print(f"=============================")
    print(f"Report:\n{report}")
    print(f"Confusion Matrix:\n{cm}")

    result = [accuracy, float(precision), float(recall), float(f1)]

    return result





if __name__ == '__main__':
    print(train_ml_model(def_threshold=False))

    # sample_input = """Join RichPH and become the king of the dynasty and win 200% jackpot Explore promotions and win big on https://risu.io/DBdnj  slot machine 77777P"""
    # sample_input2 = """JILI FC Free Gift 188 peso! Google ""boom188org"" and claim now er"""
    # sample_input3 = """England v Macedonia - dont miss the goals/team news. Txt ur national team to 87077 eg ENGLAND to 87077 Try:WALES, SCOTLAND 4txt/̼1.20 POBOXox36504W45WQ 16+"""

    # print(f"Input 1: {detect_fraud_ml(sample_input)}")
    # print(f"Input 2: {detect_fraud_ml(sample_input2)}")
    # print(f"Input 3: {detect_fraud_ml(sample_input3)}")
        













