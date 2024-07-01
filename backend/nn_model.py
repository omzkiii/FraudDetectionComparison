import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import sklearn
from sklearn.neural_network import MLPClassifier
from sklearn.neural_network import MLPRegressor

from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
from math import sqrt
from sklearn.metrics import r2_score

from sklearn.metrics import classification_report, confusion_matrix

X_train = []
X_test = []
y_train = []
y_test = []

mlp = MLPClassifier(hidden_layer_sizes=(500,), activation='relu', solver='adam', max_iter=500)
mlp.fit(X_train, y_train)

predict_train = mlp.predict(X_train)
predict_test = mlp.predict(X_test)

cm_train = confusion_matrix(y_train, predict_train)
cr_train = classification_report(y_train, predict_train)

cm_test = confusion_matrix(y_test, predict_test)
cr_test = classification_report(y_test, predict_test)
