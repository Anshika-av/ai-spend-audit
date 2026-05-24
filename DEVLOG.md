## Day 1 — 2026-05-22

**Hours worked:** 4

**What I did:**  
Set up the Next.js project with Tailwind CSS and built the initial AI Spend Audit landing page. Added form inputs for AI tool, plan, monthly spend, team size, and use case. Implemented localStorage persistence and built the first version of the audit engine with savings recommendations.

**What I learned:**  
Learned how Next.js app router works, how React state is managed using useState, and how to persist form data using localStorage.

**Blockers / what I'm stuck on:**  
Still improving the UI design and need to make the results page more visually polished.

**Plan for tomorrow:**  
Build backend/database integration, improve audit calculations, and add email capture functionality.


## Day 2 — 2026-05-23

**Hours worked:** 5

**What I did:**  
Connected the frontend audit form to Supabase backend. Added persistent database storage for audits, implemented loading states, improved premium UI cards, and fixed RLS permission issues for public inserts.

**What I learned:**  
Learned how Supabase Row Level Security policies work and how frontend apps securely interact with databases using public API keys.

**Blockers / what I'm stuck on:**  
Spent time debugging failed database inserts due to incorrect RLS policies and environment variable setup.

**Plan for tomorrow:**  
Implement AI-generated summaries, email capture flow, audit history, and deploy the app publicly.