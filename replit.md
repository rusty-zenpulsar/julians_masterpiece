# ZENPULSAR Commodities Intelligence Microsite

## Overview

This is a standalone microsite for ZENPULSAR's commodities intelligence platform. The site is designed as a single-page, scroll-based layout with a focus on clean, professional presentation of the company's AI-driven commodity trading intelligence services. The site prioritizes fast loading times, readability, and desktop-first responsive design.

## System Architecture

### Frontend Architecture
- **Static HTML/CSS/JavaScript**: Single-page application built with vanilla HTML, styled with Tailwind CSS
- **No Framework Dependencies**: Minimal JavaScript footprint for maximum performance
- **CDN-Based Resources**: Tailwind CSS and Google Fonts loaded via CDN for optimal caching

### Design System
- **Typography**: Inter font family for clean, professional appearance
- **Color Palette**: Custom color scheme with dark grays (#1a1a1a, #4a4a4a) and light backgrounds
- **Layout**: Desktop-first responsive design with mobile considerations
- **Styling**: Utility-first CSS approach using Tailwind CSS

## Key Components

### 1. Hero Section
- **Purpose**: Primary landing area with main value proposition
- **Features**: Large typography, centered layout, call-to-action button
- **CTA**: Email-based demo request integration

### 2. Overview Section
- **Purpose**: Detailed explanation of platform capabilities
- **Layout**: Prose-optimized text blocks with readable typography
- **Background**: Light gray section for visual separation

### 3. Core Offerings (Planned)
- **Structure**: Three-column or card-based layout
- **Content Areas**:
  - News & Sentiment-Based Trading Signals
  - Geopolitical & Tariff Risk Factor Matrix
  - Additional service offerings

## Data Flow

### Static Content Delivery
- HTML served directly from hosting provider
- CSS and fonts loaded from CDNs
- No backend data processing required
- Contact form redirects to email client

### User Interaction Flow
1. User lands on hero section
2. Scrolls through content sections
3. Clicks "Request Demo" for email contact
4. No form processing or data collection on-site

## External Dependencies

### CDN Resources
- **Tailwind CSS**: `https://cdn.tailwindcss.com` - UI framework
- **Google Fonts**: Inter font family for typography
- **Preconnect Optimization**: DNS prefetching for font resources

### Third-Party Integrations
- **Email Client**: mailto: links for demo requests
- **No Analytics**: Clean, tracking-free implementation
- **No External APIs**: Static content only

## Deployment Strategy

### Hosting Requirements
- **Static Site Hosting**: Any CDN or static hosting provider
- **No Server-Side Processing**: Pure client-side delivery
- **SSL Certificate**: HTTPS recommended for professional appearance
- **Caching Strategy**: Long-term caching for static assets

### Performance Optimizations
- **Minimal JavaScript**: Only Tailwind config for custom styling
- **Font Loading**: Preconnect and display=swap for optimal loading
- **No Heavy Assets**: Text-based content with minimal images
- **Mobile-First CSS**: Responsive design without framework overhead

## Changelog
- July 02, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.