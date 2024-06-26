
from flask import Flask, request, jsonify
from flask_cors import CORS

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

if __name__ == '__main__':
    app.run(debug=True)
