interface CloudflareEnv {
  // Bindings
  ASSETS: {
    fetch: typeof fetch;
  };

  // Environment variables
  NODE_ENV: string;
  NEXT_PUBLIC_SITE_URL: string;

  // Secrets
  SLACK_WEBHOOK_URL: string;
  SLACK_CHANNEL: string;
  RESEND_API_KEY: string;
} 