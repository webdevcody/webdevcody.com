// write a dynamodb script which exports all the data from a table called webdevcody_newsletter

import { DynamoDB } from "aws-sdk";

const dynamoClient = new DynamoDB.DocumentClient({
  region: "us-east-1",
});

async function scanTable() {
  const params = {
    TableName: "webdevcody_newsletter",
  };
  const data = await dynamoClient.scan(params).promise();
  return data;
}

scanTable().then((data) => {
  for (let item of data.Items) {
    console.log(item.email);
  }
});
