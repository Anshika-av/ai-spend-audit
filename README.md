T# AI Spend Audit

AI Spend Audit is a full-stack SaaS-style platform that helps startups identify unnecessary AI tooling costs and uncover potential monthly savings.

## Features

- AI tool cost analysis
- Savings recommendations
- AI-generated summaries
- Lead capture flow
- Persistent audit storage
- Responsive premium UI
- Supabase backend integration
- Production deployment on Vercel

## Tech Stack

- Next.js
- React
- Tailwind CSS
- Supabase
- Vercel

## Architecture

Frontend:
- Next.js App Router
- React Hooks
- Tailwind UI

Backend:
- Supabase Postgres database
- Row Level Security policies
- Client-side API integration

Deployment:
- Vercel

## Database Tables

### audits
Stores:
- tool
- plan
- spend
- team_size
- recommendation
- savings

### leads
Stores:
- email
- company
- role

## Local Development

```bash
npm install
npm run dev
```

## Production

Deployed on Vercel.

## Author

Anshika Verma