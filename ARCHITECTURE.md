# Architecture Decisions

## Why Next.js?

Next.js provided fast frontend development, routing, production optimization, and easy deployment with Vercel.

## Why Supabase?

Supabase enabled rapid MVP backend development with:
- Postgres database
- REST APIs
- Row Level Security
- easy frontend integration

This reduced backend complexity and accelerated iteration speed.

## Why Rule-Based Audit Logic?

The pricing and savings engine was intentionally deterministic rather than AI-generated because financial recommendations should remain predictable and explainable.

AI was only used for summary generation and recommendation formatting.

## Data Flow

1. User fills audit form
2. Frontend generates recommendation
3. Audit stored in Supabase
4. Results displayed instantly
5. Lead capture form stores contact data
6. App deployed globally using Vercel

## Key Engineering Challenges

- Supabase RLS configuration
- Environment variable handling in production
- Async frontend state management
- Production deployment debugging