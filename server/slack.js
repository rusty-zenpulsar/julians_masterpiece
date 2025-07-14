const { WebClient } = require('@slack/web-api');

if (!process.env.SLACK_BOT_TOKEN) {
  throw new Error("SLACK_BOT_TOKEN environment variable must be set");
}

if (!process.env.SLACK_CHANNEL_ID) {
  throw new Error("SLACK_CHANNEL_ID environment variable must be set");
}

const slack = new WebClient(process.env.SLACK_BOT_TOKEN);

/**
 * Sends a form submission to Slack
 * @param {Object} formData - The form data to send
 * @returns {Promise<string>} - The timestamp of the sent message
 */
async function sendFormSubmissionToSlack(formData) {
  try {
    const { name, email, company, product, message } = formData;
    
    // Create a formatted message for the form submission
    const blocks = [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: '📋 New Form Submission - ZENPULSAR'
        }
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*Name:*\n${name || 'Not provided'}`
          },
          {
            type: 'mrkdwn',
            text: `*Email:*\n${email || 'Not provided'}`
          }
        ]
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*Company:*\n${company || 'Not provided'}`
          },
          {
            type: 'mrkdwn',
            text: `*Product Interest:*\n${product || 'Not specified'}`
          }
        ]
      }
    ];

    // Add message section if provided
    if (message) {
      blocks.push({
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Message:*\n${message}`
        }
      });
    }

    // Add timestamp
    blocks.push({
      type: 'context',
      elements: [
        {
          type: 'mrkdwn',
          text: `Submitted on ${new Date().toLocaleString()}`
        }
      ]
    });

    // Send the message
    const response = await slack.chat.postMessage({
      channel: process.env.SLACK_CHANNEL_ID,
      text: `New form submission from ${name || 'Anonymous'} (${email || 'No email'})`,
      blocks: blocks
    });

    console.log('✅ Form submission sent to Slack successfully');
    return response.ts;
  } catch (error) {
    console.error('❌ Error sending form submission to Slack:', error);
    throw error;
  }
}

/**
 * Sends a demo request to Slack
 * @param {Object} requestData - The demo request data
 * @returns {Promise<string>} - The timestamp of the sent message
 */
async function sendDemoRequestToSlack(requestData) {
  try {
    const { email, product } = requestData;
    
    const blocks = [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: '🚀 New Demo Request - ZENPULSAR'
        }
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*Email:*\n${email}`
          },
          {
            type: 'mrkdwn',
            text: `*Product:*\n${product}`
          }
        ]
      },
      {
        type: 'context',
        elements: [
          {
            type: 'mrkdwn',
            text: `Requested on ${new Date().toLocaleString()}`
          }
        ]
      }
    ];

    const response = await slack.chat.postMessage({
      channel: process.env.SLACK_CHANNEL_ID,
      text: `New demo request from ${email} for ${product}`,
      blocks: blocks
    });

    console.log('✅ Demo request sent to Slack successfully');
    return response.ts;
  } catch (error) {
    console.error('❌ Error sending demo request to Slack:', error);
    throw error;
  }
}

module.exports = {
  sendFormSubmissionToSlack,
  sendDemoRequestToSlack
};