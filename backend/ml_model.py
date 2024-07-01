import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from utils import preprocess, get_training_data, dataset
from sklearn.metrics import classification_report, confusion_matrix, precision_score, recall_score, roc_curve, accuracy_score, f1_score
from sklearn.model_selection import GridSearchCV, RandomizedSearchCV 


# TODO Get parameters from user input

def ml_clf(X_train, y_train):
    model = RandomForestClassifier()
    model.fit(X_train, y_train)
    return model



def train_ml_model(def_threshold=True, test_size=0.2, random_state=100, threshold=0.3):
    X_train, X_test, y_train, y_test = get_training_data(preprocess(dataset),test_size,random_state)
    model = ml_clf(X_train, y_train)

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

    return accuracy, precision, recall, f1





if __name__ == '__main__':
    train_ml_model(def_threshold=False, test_size=0.30, random_state=100, threshold=0.30)
        













