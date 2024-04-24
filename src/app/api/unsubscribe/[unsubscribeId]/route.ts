import { NextResponse } from "next/server";
import { redirect } from "next/navigation";
import { unsubscribeUserCase } from "@/use-cases/subscriptions";
import { unstable_noStore } from "next/cache";

export async function GET(
  req: Request,
  { params }: { params: { unsubscribeId: string } }
): Promise<NextResponse> {
  unstable_noStore();

  await unsubscribeUserCase(params.unsubscribeId);

  redirect("/bye");
}
