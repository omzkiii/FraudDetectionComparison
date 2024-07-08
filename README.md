# SMS Fraud Detection Comparison

Download the webapp by cloning it in the github repository:

```bash
git clone git@github.com:omzkiii/FraudDetectionComparison.git
```

Change directory into the root file of the webapp:

`linux/macOS system`
```bash
cd ./fraud-detection-comparison/
```

`windows system`
```bash
cd .\fraud-detection-comparison\
```

## Backend Setup

First, initialize a virtual environment first using:

```bash
python -m venv env
```

Next, activate the environment: 

`linux/macOS system`
```bash
source ./env/bin/activate
```

`windows system`
```bash
.\env\Script\activate
```

Then, install the required python packages: 

```bash
pip install -r requirements.txt
```

> [!NOTE]
> Make sure that the system have pip by executing:

```bash
pip -v
```

Finally, run the backend by executing:

`linux/macOS system`
```bash
python ./backend/main.py
```

`windows system`
```bash
python ./backend/main.py
```

## Frontend Setup

First, install the required node packages:

```bash
npm install
```

> [!NOTE]
> Make sure that the system has NodeJS installed and any [NodeJS](https://nodejs.org/en/download/package-manager) package manager e.g. [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) 

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with browser to see the project.

> [!NOTE]
> When running for the first time with a given parameter, the backend will train with the given dataset first so the process may take a minute or more.

