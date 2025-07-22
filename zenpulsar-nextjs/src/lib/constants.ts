import { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  name: "ZENPULSAR",
  description:
    "Actionable geopolitical intelligence and AI-powered signals for commodity traders who need to move faster, smarter.",
  url: "https://zenpulsar.com",
  ogImage: "https://zenpulsar.com/logo.png",
  links: {
    email: "info@zenpulsar.com",
    website: "https://zenpulsar.com",
  },
};

// Navigation items
export const navigationItems = [
  { href: "#overview", label: "Overview" },
  { href: "#offerings", label: "Core Offerings" },
  { href: "#why-it-matters", label: "Why It Matters" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

// Offering options for access form
export const offeringOptions = [
  { value: "sentiment-signals", label: "News & Sentiment Trading Signals" },
  { value: "geopolitical-matrix", label: "Geopolitical Risk Matrix" },
  { value: "ai-agents", label: "Multi-Agent AI Systems" },
  { value: "all-products", label: "All Products" },
];

// Statistics for overview section
export const statistics = [
  { value: "3M+", label: "articles processed daily" },
  { value: "185", label: "languages monitored" },
  { value: "Real-time", label: "signal extraction" },
  { value: "API-ready", label: "integration" },
]; 