
from flask import Flask, request, jsonify
from flask_cors import CORS
from ml_model import train_ml_model, detect_fraud_ml
from nn_model import neural_network, detect_fraud_nn
from rb_model import rule_based, get_stats

app = Flask(__name__)
CORS(app)

@app.route('/process', methods=['POST'])
def process():
    data = request.json

    # Process the data here
    processed_data = {
        'processed': data['input'] + " FROM PYTHON"  # Example processing
    }
    return jsonify(processed_data)


@app.route('/train', methods=['POST'])
def train():
    data = request.json
    split = data['split']
    state = data['state']

    #TODO update training for rule-based
    rb_result = get_stats()
    ml_result = train_ml_model(test_size=split, random_state=state, def_threshold=False)
    nn_result = neural_network(test_size=split, random_state=state)

    result = {'accuracy':[rb_result[0], ml_result[0], nn_result[0]], 'precision': [rb_result[1], ml_result[1], nn_result[1]],
                'recall': [rb_result[2], ml_result[2], nn_result[2]], 'f1': [rb_result[3], ml_result[3], nn_result[3]]}


    return jsonify(result), 200


@app.route('/detect', methods=['POST'])
def detect():
    data = request.json
    text = data['text']

    #TODO update detect for rule-based
    rb_result = rule_based(text)
    ml_result = 'spam' if detect_fraud_ml(text) else 'not spam'
    nn_result = 'spam' if detect_fraud_nn(text) else 'not spam'


    result = {'rb': rb_result, 'ml': ml_result, 'nn':nn_result}

    return jsonify(result), 200





if __name__ == '__main__':
    app.run(debug=True)
