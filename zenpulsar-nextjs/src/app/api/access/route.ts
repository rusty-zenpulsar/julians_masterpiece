import { NextRequest, NextResponse } from "next/server";
import { sendToSlack, createAccessRequestMessage } from "@/lib/slack";
import { AccessFormData } from "@/lib/types";

export async function POST(request: NextRequest) {
  try {
    const body: AccessFormData = await request.json();

    // Validate required fields
    if (!body.firstName || !body.lastName || !body.email || !body.company) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create Slack message
    const slackMessage = createAccessRequestMessage(body);

    // Send to Slack
    await sendToSlack(slackMessage);

    return NextResponse.json(
      { message: "Access request sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Access request error:", error);
    return NextResponse.json(
      { error: "Failed to send access request" },
      { status: 500 }
    );
  }
} 