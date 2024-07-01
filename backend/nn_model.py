from sklearn.neural_network import MLPClassifier

from sklearn.metrics import accuracy_score, recall_score, precision_score, f1_score


from sklearn.metrics import classification_report, confusion_matrix

import utils


def neural_network(): 
    X_train, X_test, y_train, y_test = utils.get_training_data(utils.preprocess(), 0.3, 2)

    mlp = MLPClassifier(hidden_layer_sizes=(500,), activation='relu', solver='adam', max_iter=500)
    mlp.fit(X_train, y_train)

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
    
    return



