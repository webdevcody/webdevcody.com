import { v4 as uuidv4 } from "uuid";
import { NextResponse } from "next/server";
import { DynamoDB } from "aws-sdk";

export type TSubscription = {
  pk: string;
  sk: string;
  unsubscribeId: string;
  email: string;
};
const TABLE_NAME = process.env.TABLE_NAME!;

const dynamoClient = new DynamoDB.DocumentClient({
  region: "us-east-1",
});

function saveSubscription(email: string, unsubscribeId: string) {
  return dynamoClient
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

function getSubscriptionByEmail(email: string) {
  return dynamoClient
    .get({
      TableName: TABLE_NAME,
      Key: {
        pk: `email|${email}`,
        sk: `email|${email}`,
      },
    })
    .promise()
    .then(({ Item }) => Item as TSubscription);
}

async function verifyRecaptcha(token: string, secret: string) {
  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secret}&response=${token}`,
    }
  );
  const json = (await response.json()) as { success: boolean };
  if (!json.success) {
    throw new Error("invalid recaptcha token");
  }
}

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const body = await req.json();

    const { token, email } = body;

    try {
      await verifyRecaptcha(token, process.env.RECAPTCHA_SECRET!);
    } catch (err) {
      return new NextResponse("recaptcha token failed to validate", {
        status: 400,
      });
    }

    const subscription = await getSubscriptionByEmail(email);

    if (subscription) {
      return NextResponse.json({ message: "created" }, { status: 201 });
    }

    const unsubscribeId = uuidv4();

    await saveSubscription(email, unsubscribeId);

    return NextResponse.json({ message: "created" }, { status: 201 });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
