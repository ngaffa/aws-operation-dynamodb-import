# aws-operation-dynamodb-import

An Example to import a big json Array To DynamoDb

# aws-operation-dynamodb-import

aws-operation-dynamodb-import is a Node library that help you import a json array to a table in aws dynamoDB.

## Required

aws sdk for nodejs :

```bash
npm install aws-sdk
```

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install aws-operation-dynamodb.

```bash
npm install aws-operation-dynamoDb-import
```

## Usage

To import an array of JSON :
you should fill this variable in import-data-array.js

```javascript
AWS.config.update({
  region: 'eu-west-1', // your dynamodb region
});

const tableName = 'example-table'; // your table name
const jsonPath = 'to-import.json'; // json to import
```

After that, you should execute this command in your vscode console

```bash
node do-import.js
```

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
