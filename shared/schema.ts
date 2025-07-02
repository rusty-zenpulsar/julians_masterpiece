import { pgTable, serial, varchar, text, timestamp, boolean, jsonb, integer } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Users table for potential user management
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).unique().notNull(),
  name: varchar('name', { length: 255 }),
  company: varchar('company', { length: 255 }),
  phone: varchar('phone', { length: 50 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Demo requests table to track demo requests from the website
export const demoRequests = pgTable('demo_requests', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull(),
  name: varchar('name', { length: 255 }),
  company: varchar('company', { length: 255 }),
  message: text('message'),
  requestType: varchar('request_type', { length: 50 }).default('demo'), // 'demo', 'initial_call', 'access_request'
  status: varchar('status', { length: 50 }).default('pending'), // 'pending', 'contacted', 'completed'
  source: varchar('source', { length: 100 }).default('microsite'), // track where request came from
  createdAt: timestamp('created_at').defaultNow().notNull(),
  contactedAt: timestamp('contacted_at'),
});

// Newsletter/updates subscriptions
export const subscriptions = pgTable('subscriptions', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).unique().notNull(),
  name: varchar('name', { length: 255 }),
  company: varchar('company', { length: 255 }),
  interests: jsonb('interests'), // array of interest areas like ['sentiment_feed', 'ai_agents', 'geopolitical_matrix']
  isActive: boolean('is_active').default(true),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  unsubscribedAt: timestamp('unsubscribed_at'),
});

// Analytics/tracking for page visits and interactions
export const pageViews = pgTable('page_views', {
  id: serial('id').primaryKey(),
  sessionId: varchar('session_id', { length: 255 }),
  pageUrl: varchar('page_url', { length: 500 }).notNull(),
  referrer: varchar('referrer', { length: 500 }),
  userAgent: text('user_agent'),
  ipAddress: varchar('ip_address', { length: 45 }), // supports IPv6
  country: varchar('country', { length: 100 }),
  viewedAt: timestamp('viewed_at').defaultNow().notNull(),
  timeOnPage: integer('time_on_page'), // seconds
});

// Contact form submissions
export const contactSubmissions = pgTable('contact_submissions', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  company: varchar('company', { length: 255 }),
  subject: varchar('subject', { length: 255 }),
  message: text('message').notNull(),
  formType: varchar('form_type', { length: 50 }).default('contact'), // 'contact', 'demo', 'pricing_inquiry'
  status: varchar('status', { length: 50 }).default('new'), // 'new', 'read', 'responded', 'closed'
  createdAt: timestamp('created_at').defaultNow().notNull(),
  respondedAt: timestamp('responded_at'),
});

// Relations
export const userRelations = relations(users, ({ many }) => ({
  demoRequests: many(demoRequests),
}));

export const demoRequestRelations = relations(demoRequests, ({ one }) => ({
  user: one(users),
}));

// TypeScript types
export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export type DemoRequest = typeof demoRequests.$inferSelect;
export type InsertDemoRequest = typeof demoRequests.$inferInsert;

export type Subscription = typeof subscriptions.$inferSelect;
export type InsertSubscription = typeof subscriptions.$inferInsert;

export type PageView = typeof pageViews.$inferSelect;
export type InsertPageView = typeof pageViews.$inferInsert;

export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = typeof contactSubmissions.$inferInsert;