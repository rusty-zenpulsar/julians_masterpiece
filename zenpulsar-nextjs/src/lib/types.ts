// Form submission types
export interface DemoFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message?: string;
}

export interface AccessFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  interest?: string;
}

// Slack message types
export interface SlackMessage {
  text: string;
  blocks?: SlackBlock[];
}

export interface SlackBlock {
  type: string;
  text?: {
    type: string;
    text: string;
  };
  fields?: Array<{
    type: string;
    text: string;
  }>;
  elements?: Array<{
    type: string;
    text: string;
  }>;
}

// Site metadata
export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    email: string;
    website: string;
  };
}

// Content types
export interface OfferingContent {
  title: string;
  description: string;
  features: string[];
  slug: string;
} 