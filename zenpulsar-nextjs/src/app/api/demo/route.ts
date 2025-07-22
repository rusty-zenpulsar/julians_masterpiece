import { NextRequest, NextResponse } from "next/server";
import { sendToSlack, createDemoRequestMessage } from "@/lib/slack";
import { DemoFormData } from "@/lib/types";

export async function POST(request: NextRequest) {
  try {
    const body: DemoFormData = await request.json();

    // Validate required fields
    if (!body.firstName || !body.lastName || !body.email || !body.company) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create Slack message
    const slackMessage = createDemoRequestMessage(body);

    // Send to Slack
    await sendToSlack(slackMessage);

    return NextResponse.json(
      { message: "Demo request sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Demo request error:", error);
    return NextResponse.json(
      { error: "Failed to send demo request" },
      { status: 500 }
    );
  }
} 