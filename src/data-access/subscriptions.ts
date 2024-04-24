import { env } from "@/env";
import { Subscription } from "@/use-cases/types";
import { DynamoDB } from "aws-sdk";
import "server-only";

const TABLE_NAME = env.TABLE_NAME;

const dynamoClient = new DynamoDB.DocumentClient({
  region: "us-east-1",
});

export async function saveSubscription(email: string, unsubscribeId: string) {
  await dynamoClient
    .put({
      TableName: TABLE_NAME,
      Item: {
        pk: `email|${email}`,
        sk: `email|${email}`,
        email,
        unsubscribeId,
        createdAt: new Date().toISOString(),
      },
    })
    .promise();
}

export async function getSubscriptionByEmail(
  email: string
): Promise<Subscription | undefined> {
  const subscription = await dynamoClient
    .get({
      TableName: TABLE_NAME,
      Key: {
        pk: `email|${email}`,
        sk: `email|${email}`,
      },
    })
    .promise()
    .then(({ Item }) =>
      Item
        ? {
            unsubscribeId: Item.unsubscribeId,
            email: Item.email,
          }
        : undefined
    );

  return subscription;
}

export async function getSubscriptionByUnsubscribeId(
  unsubscribeId: string
): Promise<Subscription | undefined> {
  const subscription = await dynamoClient
    .query({
      TableName: TABLE_NAME,
      IndexName: "gsi1",
      KeyConditionExpression: "#unsubscribeId = :pk",
      ExpressionAttributeValues: {
        ":pk": unsubscribeId,
      },
      ExpressionAttributeNames: {
        "#unsubscribeId": "unsubscribeId",
      },
      Limit: 1,
    })
    .promise()
    .then((results) => {
      const item = results.Items?.[0];
      return item
        ? {
            email: item.email,
            unsubscribeId: item.unsubscribeId,
          }
        : undefined;
    });

  return subscription;
}

export async function deleteSubscription(email: string): Promise<void> {
  await dynamoClient
    .delete({
      TableName: TABLE_NAME,
      Key: {
        pk: `email|${email}`,
        sk: `email|${email}`,
      },
    })
    .promise();
}
