"use client"
import { Card, CardHeader, CardBody, Divider, Textarea } from '@nextui-org/react';

export default function CardAboutDetect() {

    return (
        <Card className="w-[800px] z-0 mt-4">
        <CardHeader className="flex justify-center items-center">
          <div className="text-center">
            <p className="text-xl">Parameters used for each algorithm</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>

          <div className="flex flex-wrap p-4 mt-4 border rounded-lg border-slate-600 border-1">
            <p className='text-lg font-medium'>Rule-Based Algorithm</p>
            <Divider />
            <p className='mt-2'> For the rule-based text classification we utilized natural language processing (NLP) techniques for preprocessing 
              text data and employed traditional if-else statements to apply predefined rules for classification. First we obtained the most frequently used words in spam 
              messages and removed from that set words which were also frequently used in messages that are not spam. These words were included in the suspected words list.
              Messages are then checked for the existence and frequency of these suspected words. Based on that, the messages are classified as spam or not. Test size 
              and random state were not used for this algorithm.</p>
          </div>

          <div className="flex flex-wrap p-4 mt-4 border rounded-lg border-slate-600 border-1">
            <p className='text-lg font-medium'>Random Forest Algorithm</p>
            <Divider />
            <p className='mt-2'> For a traditional machine learning approach, we used the Random Forest Algorithm. First, we employed NLP techniques to 
              clean the text data. After which, we used Scikit-learn's TfidfVectorizer to convert text documents into numerical feature vectors, 
              essential for feeding into machine learning models. Using the vectorized text, we build the model with the Random Forest algorithm.
              The classification threshold used for this model is customized to be at 30% to increase recall, which will make the model capture more
              spam messages. There was no hyperparameter tuning and the default parameter values for Scikit-learn's Random Forest Classfier were used.
            </p>
          </div>

          <div className="flex flex-wrap p-4 mt-4 border rounded-lg border-slate-600 border-1">
            <p className='text-lg font-medium'>Neural Networks</p>
            <Divider />
            <p className='mt-2'> To implement neural networks spam classifier, we used the MLPClassifier (Multi-Layer Perceptron Classifier), 
              a type of artificial neural network implemented in Scikit-learn. Same with the traditional ML approach, we used NLP techniques 
              and TfidfVectorizer prior to creating a model. The output numerical vector is passed into the MLPClassifier to build the model.
              The neural network used one hidden layer with 1000 neurons and logistic sigmoid function. The solver used for weight optimization
              is adam and the number of iterations until convergence is set at 500.
              </p>
          </div>


          
        </CardBody>
      </Card>
    )
}

