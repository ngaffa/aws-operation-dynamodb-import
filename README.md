# aws-operation-dynamodb-import

aws-operation-dynamodb-import is a Node library that help you import a json array to a table in aws dynamoDB.

## Required

- aws credentials (when installing aws CLI you should configure your credential by running )

```bash
aws configure
```

- check your credential here : (~/.aws/credentials)

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install aws-operation-dynamodb.

```bash
npm i @gafa/aws-operation-dynamodb-import
```

## Usage

- In your exited node project or init a new project with this commande

```bash
npm init
```

- Install the aws-operation-dynamodb aws sdk for nodejs in your project (or the initiated project) :

```bash
npm i @gafa/aws-operation-dynamodb-import
```

- Create a new js file with this two lines (example import.js) :

```javascript
var operation = require('@gafa/aws-operation-dynamodb-import');
operation.importAllItems('test_dynamo_db', './to-import.json', 'eu-west-1');
```

- First argument : the dynamodb name
- Seconf argument : the path to the json to import
- Third argument : the aws region of your dynamodb

After that, you should execute this command in your console

```bash
node import.js
```

And it done ... all your json array file will be imported

Output :

```bash
Importing items into DynamoDB. Please wait.
PutItem succeeded: 3hS4ZfuxA9cUo4NxrbNY (id)
PutItem succeeded: 0h5gxqMsfdzK9H3tKgt2 (id)
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)
