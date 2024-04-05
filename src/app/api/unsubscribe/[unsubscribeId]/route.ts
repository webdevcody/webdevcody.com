import { v4 as uuidv4 } from "uuid";
import { NextResponse } from "next/server";
import { DynamoDB } from "aws-sdk";
import { TSubscription } from "../../subscriptions/route";
import { redirect } from "next/navigation";

const TABLE_NAME = process.env.TABLE_NAME!;

const dynamoClient = new DynamoDB.DocumentClient({
  region: "us-east-1",
});

function getSubscriptionByUnsubscribeId(unsubscribeId: string) {
  return dynamoClient
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
    .then((results) => results.Items?.[0] as TSubscription | null);
}

function deleteSubscription(email: string) {
  return dynamoClient
    .delete({
      TableName: TABLE_NAME,
      Key: {
        pk: `email|${email}`,
        sk: `email|${email}`,
      },
    })
    .promise();
}

export async function GET(
  req: Request,
  { params }: { params: { unsubscribeId: string } }
): Promise<NextResponse> {
  try {
    const unsubscribeId = params.unsubscribeId;

    const subscription = await getSubscriptionByUnsubscribeId(unsubscribeId);

    if (!subscription) {
      return new NextResponse("Not Found", { status: 404 });
    }

    await deleteSubscription(subscription.email);

    redirect("/bye");
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
