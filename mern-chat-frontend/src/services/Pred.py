from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
from tensorflow.python.keras.models import load_model
import librosa
import numpy as np
import os
from flask_cors import cross_origin

app = Flask(_name_)



model = load_model("C:/Users/hana/le model final qui marche a 0,49")


def convert_classes(classes):
    class_names = {
        0: "belly pain",
        1: "burping",
        2: "discomfort",
        3: "hungry",
        4: "tired"
    }
    return [class_names[c] for c in classes]




@app.route('/predict', methods=['POST'])
@cross_origin(origins={"http://127.0.0.1:5173"})

def predict():
    


        audio, sample_rate = librosa.load(request.json['filename'], res_type='kaiser_fast')
        mfccs_features = librosa.feature.mfcc(y=audio, sr=sample_rate, n_mfcc=40)
        mfccs_scaled_features = np.mean(mfccs_features.T, axis=0)
        mfccs_scaled_features = mfccs_scaled_features.reshape(1, -1)

        predicted_label = np.argmax(model.predict(mfccs_scaled_features), axis=-1)

        prediction_class = convert_classes(predicted_label)

        return jsonify({'prediction': prediction_class}), 200

    


if _name_ == '_main_':
    app.run(debug = True)