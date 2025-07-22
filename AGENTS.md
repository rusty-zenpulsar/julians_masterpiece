# ZENPULSAR Next.js Application - Technical Documentation

## Project Overview

This document outlines the complete refactoring of the ZENPULSAR Commodities Intelligence landing page from a static HTML site to a modern Next.js application with TypeScript, MDX content management, and integrated Slack webhook functionality.

## Technology Stack

### Core Framework
- **Next.js 14+** with App Router - Fast by default with optimized performance configuration
- **TypeScript** - End-to-end type safety
- **React 18+** - Latest React features with concurrent rendering

### UI & Styling
- **shadcn/ui** - Reusable components based on Radix UI and Tailwind CSS
- **Tailwind CSS v3.x** - Utility-first CSS framework for rapid UI development
- **Lucide React** - Beautiful, simple, pixel-perfect icons
- **next/font** - Font optimization without external requests

### Content Management
- **MDX** - Markdown with JSX support for rich content
- **@next/mdx** - Official Next.js MDX integration
- **remark-gfm** - GitHub Flavored Markdown support

### Communication & Email
- **React Email** - React renderer for creating beautiful emails
- **Resend** - Developer-first email marketing platform
- **Slack Webhooks** - Direct integration for form submissions

### Development Tools
- **pnpm** - Fast and reliable package manager
- **ESLint** - Code linting for Next.js and TypeScript
- **Prettier** - Code formatting for consistent style
- **TypeScript ESLint** - TypeScript-specific linting rules

## Project Structure

```
zenpulsar-nextjs/
├── README.md
├── AGENTS.md                    # This documentation file
├── next.config.js              # Next.js configuration with MDX
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies and scripts
├── pnpm-lock.yaml             # Lock file for pnpm
├── .env.local                 # Environment variables (Slack webhook, etc.)
├── .env.example               # Example environment variables
├── .eslintrc.json             # ESLint configuration
├── .prettierrc                # Prettier configuration
├── .gitignore                 # Git ignore rules
│
├── public/                    # Static assets
│   ├── logo.png
│   ├── favicon.ico
│   └── images/
│       └── ...
│
├── src/                       # Source code
│   ├── app/                   # App Router structure
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   ├── globals.css        # Global styles
│   │   ├── api/               # API routes
│   │   │   ├── demo/
│   │   │   │   └── route.ts   # Demo request API
│   │   │   ├── access/
│   │   │   │   └── route.ts   # Access request API
│   │   │   └── webhook/
│   │   │       └── slack/
│   │   │           └── route.ts # Slack webhook handler
│   │   └── (marketing)/       # Route groups for organization
│   │       ├── overview/
│   │       │   └── page.tsx
│   │       ├── offerings/
│   │       │   └── page.tsx
│   │       └── pricing/
│   │           └── page.tsx
│   │
│   ├── components/            # Reusable React components
│   │   ├── ui/               # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── select.tsx
│   │   │   ├── dialog.tsx
│   │   │   └── ...
│   │   ├── layout/           # Layout components
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── navigation.tsx
│   │   │   └── mobile-menu.tsx
│   │   ├── sections/         # Page sections
│   │   │   ├── hero.tsx
│   │   │   ├── overview.tsx
│   │   │   ├── offerings.tsx
│   │   │   ├── why-it-matters.tsx
│   │   │   ├── pricing.tsx
│   │   │   └── cta.tsx
│   │   ├── forms/           # Form components
│   │   │   ├── demo-form.tsx
│   │   │   ├── access-form.tsx
│   │   │   └── form-modal.tsx
│   │   └── common/          # Common components
│   │       ├── fade-in-section.tsx
│   │       ├── section-divider.tsx
│   │       └── floating-demo-button.tsx
│   │
│   ├── content/              # MDX content files
│   │   ├── offerings/
│   │   │   ├── sentiment-signals.mdx
│   │   │   ├── geopolitical-risk.mdx
│   │   │   └── ai-agents.mdx
│   │   ├── sections/
│   │   │   ├── overview.mdx
│   │   │   ├── why-it-matters.mdx
│   │   │   └── pricing.mdx
│   │   └── metadata/
│   │       └── site.ts
│   │
│   ├── lib/                  # Utility functions and configurations
│   │   ├── utils.ts         # Common utilities (cn function, etc.)
│   │   ├── slack.ts         # Slack webhook utilities
│   │   ├── validations.ts   # Form validation schemas
│   │   ├── constants.ts     # Application constants
│   │   └── types.ts         # TypeScript type definitions
│   │
│   ├── hooks/               # Custom React hooks
│   │   ├── use-form-submission.ts
│   │   ├── use-scroll-spy.ts
│   │   └── use-intersection-observer.ts
│   │
│   └── styles/              # Additional styles
│       ├── globals.css      # Global CSS imports
│       └── components.css   # Component-specific styles
│
├── emails/                  # React Email templates
│   ├── demo-request.tsx
│   ├── access-request.tsx
│   └── components/
│       ├── email-layout.tsx
│       └── email-footer.tsx
│
└── mdx-components.tsx       # Global MDX components
```

## Implementation Plan

### Phase 1: Project Setup and Configuration (Day 1)

#### 1.1 Initialize Next.js Project
- [ ] Create new Next.js 14 project with TypeScript
- [ ] Configure App Router structure
- [ ] Set up pnpm as package manager
- [ ] Install core dependencies

#### 1.2 Development Environment Setup
- [ ] Configure ESLint with Next.js and TypeScript rules
- [ ] Set up Prettier for code formatting
- [ ] Create .env.example with required environment variables
- [ ] Configure TypeScript with strict mode

#### 1.3 Styling and UI Setup
- [ ] Install and configure Tailwind CSS
- [ ] Set up shadcn/ui components
- [ ] Configure custom Tailwind theme matching ZENPULSAR brand
- [ ] Install Lucide React for icons

### Phase 2: Core Architecture and Components (Day 2)

#### 2.1 Layout Components
- [ ] Create root layout with metadata and fonts
- [ ] Build responsive header with navigation
- [ ] Implement mobile menu with smooth animations
- [ ] Create footer component
- [ ] Add scroll-based navbar behavior

#### 2.2 MDX Integration
- [ ] Configure @next/mdx with remark-gfm
- [ ] Create mdx-components.tsx for custom components
- [ ] Set up content structure in `/src/content/`
- [ ] Implement MDX layout wrapper components

#### 2.3 Base Components
- [ ] Create fade-in animation components
- [ ] Build section divider component
- [ ] Implement floating demo button
- [ ] Create modal system with proper accessibility

### Phase 3: Content Migration and Sections (Day 3)

#### 3.1 Content Structure
- [ ] Convert HTML sections to MDX files
- [ ] Create offering detail pages in MDX
- [ ] Set up content metadata and frontmatter
- [ ] Implement dynamic content loading

#### 3.2 Section Components
- [ ] Build Hero section with animations
- [ ] Create Overview section with stats
- [ ] Implement Offerings grid with hover effects
- [ ] Build Why It Matters feature cards
- [ ] Create Pricing section with custom cards
- [ ] Implement Call-to-Action section

### Phase 4: Form System and API Integration (Day 4)

#### 4.1 Form Components
- [ ] Create reusable form components with validation
- [ ] Build Demo Request modal with form
- [ ] Implement Access Request modal
- [ ] Add form submission states and error handling

#### 4.2 API Routes
- [ ] Create Slack webhook API route
- [ ] Implement demo request handler
- [ ] Build access request handler
- [ ] Add proper error handling and validation

#### 4.3 Slack Integration
- [ ] Set up Slack webhook configuration
- [ ] Create formatted message templates
- [ ] Implement retry logic for failed submissions
- [ ] Add logging and monitoring

### Phase 5: Email Integration and Notifications (Day 5)

#### 5.1 React Email Setup
- [ ] Install and configure React Email
- [ ] Create email templates for demo requests
- [ ] Build access request email templates
- [ ] Set up Resend integration

#### 5.2 Email Templates
- [ ] Design branded email layouts
- [ ] Create responsive email components
- [ ] Implement dynamic content insertion
- [ ] Add email preview functionality

### Phase 6: Performance and SEO Optimization (Day 6)

#### 6.1 Performance Optimization
- [ ] Implement image optimization with next/image
- [ ] Add font optimization with next/font
- [ ] Configure bundle analyzer
- [ ] Implement lazy loading for components

#### 6.2 SEO and Metadata
- [ ] Set up dynamic metadata generation
- [ ] Create sitemap.xml
- [ ] Add Open Graph and Twitter Card support
- [ ] Implement structured data (JSON-LD)

#### 6.3 Analytics and Monitoring
- [ ] Add performance monitoring
- [ ] Implement error boundary components
- [ ] Set up analytics tracking
- [ ] Add form conversion tracking

### Phase 7: Testing and Deployment (Day 7)

#### 7.1 Testing
- [ ] Write unit tests for utility functions
- [ ] Create integration tests for API routes
- [ ] Test form submissions and Slack integration
- [ ] Perform accessibility testing

#### 7.2 Deployment Preparation
- [ ] Configure production environment variables
- [ ] Set up deployment scripts
- [ ] Create deployment documentation
- [ ] Prepare migration checklist

#### 7.3 Go-Live
- [ ] Deploy to production environment
- [ ] Test all functionality in production
- [ ] Monitor for errors and performance issues
- [ ] Update DNS and redirects if needed

## Environment Variables

```bash
# .env.local
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK
SLACK_CHANNEL=#general
RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_SITE_URL=https://zenpulsar.com
NODE_ENV=production
```

## Key Features

### 1. Modern Next.js Architecture
- App Router for improved performance and developer experience
- TypeScript for type safety across the entire application
- Server-side rendering for better SEO and performance

### 2. Content Management with MDX
- Rich content editing with Markdown and JSX
- Component embedding within content
- Easy content updates without code changes

### 3. Integrated Communication
- Direct Slack webhook integration for form submissions
- React Email templates for professional communications
- Resend integration for reliable email delivery

### 4. Performance Optimized
- Image optimization with next/image
- Font optimization with next/font
- Bundle optimization and code splitting
- Lazy loading for improved initial load times

### 5. Developer Experience
- Hot reload for rapid development
- TypeScript for better code quality
- ESLint and Prettier for consistent code style
- Component-based architecture for maintainability

## Migration Strategy

1. **Parallel Development**: Build the Next.js version alongside the existing site
2. **Content Preservation**: Maintain all existing content and functionality
3. **SEO Continuity**: Ensure all URLs and metadata are preserved
4. **Testing Phase**: Comprehensive testing before switching over
5. **Gradual Rollout**: Deploy to staging first, then production

## Success Metrics

- **Performance**: Lighthouse score > 95
- **SEO**: All existing search rankings maintained
- **Functionality**: 100% feature parity with current site
- **User Experience**: Improved form conversion rates
- **Developer Experience**: Faster deployment and content updates

This refactoring will transform the ZENPULSAR site into a modern, maintainable, and scalable Next.js application while preserving all existing functionality and improving performance. 