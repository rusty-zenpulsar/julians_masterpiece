import { DemoFormData, AccessFormData, SlackMessage } from "./types";

export async function sendToSlack(message: SlackMessage): Promise<void> {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  
  if (!webhookUrl) {
    throw new Error("SLACK_WEBHOOK_URL environment variable is not set");
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      channel: process.env.SLACK_CHANNEL || "#general",
      ...message,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to send to Slack: ${response.statusText}`);
  }
}

export function createDemoRequestMessage(data: DemoFormData): SlackMessage {
  const fullName = `${data.firstName} ${data.lastName}`;
  
  return {
    text: `📋 New Demo Request from ${fullName}`,
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: "📋 New Demo Request - ZENPULSAR",
        },
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: `*Name:* ${fullName}`,
          },
          {
            type: "mrkdwn",
            text: `*Email:* ${data.email}`,
          },
          {
            type: "mrkdwn",
            text: `*Company:* ${data.company}`,
          },
          {
            type: "mrkdwn",
            text: `*Message:* ${data.message || "No message provided"}`,
          },
        ],
      },
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: `Submitted on ${new Date().toLocaleString()}`,
          },
        ],
      },
    ],
  };
}

export function createAccessRequestMessage(data: AccessFormData): SlackMessage {
  const fullName = `${data.firstName} ${data.lastName}`;
  
  return {
    text: `🚀 New Access Request from ${fullName}`,
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: "🚀 New Access Request - ZENPULSAR",
        },
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: `*Name:* ${fullName}`,
          },
          {
            type: "mrkdwn",
            text: `*Email:* ${data.email}`,
          },
          {
            type: "mrkdwn",
            text: `*Company:* ${data.company}`,
          },
          {
            type: "mrkdwn",
            text: `*Product Interest:* ${data.interest || "Not specified"}`,
          },
        ],
      },
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: `Submitted on ${new Date().toLocaleString()}`,
          },
        ],
      },
    ],
  };
} 