/**
 * Copyright 2010-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * This file is licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 * http://aws.amazon.com/apache2.0/
 *
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */
var AWS = require('aws-sdk');
var fs = require('fs');

this.tableName;
this.jsonPath;
this.region;

/**
 *
 * @param {string} tableName the name of your dynamoDb table (must exist)
 * @param {string} jsonPath the path to the json array to import
 * @param {string} region the aws resion
 */
this.importAllItems = function (tableName, jsonPath, region) {
  AWS.config.update({
    region: region,
  });
  var docClient = new AWS.DynamoDB.DocumentClient();

  console.log('Importing items into DynamoDB. Please wait.');

  const allItems = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  allItems.forEach(function (item) {
    var params = {
      TableName: tableName,
      Item: item,
    };

    docClient.put(params, function (err, data) {
      if (err) {
        console.error(
          'Unable to add item',
          item.id,
          '. Error JSON:',
          JSON.stringify(err, null, 2)
        );
      } else {
        console.log('PutItem succeeded:', item.id);
      }
    });
  });
};
