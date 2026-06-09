# Divine Lifting School - Website

Public-facing website with live data from Supabase.

## Tech Stack

- React + Vite + Tailwind v4
- Supabase (live data for news, contact form, applications)
- Vercel serverless functions (email notifications)

## Pages

| Route        | Description                                      |
|-------------|--------------------------------------------------|
| `/`         | Homepage with hero, features, latest news         |
| `/about`    | School history, mission, vision                   |
| `/academics`| Academic programs and curriculum                  |
| `/admissions`| Admission process and requirements               |
| `/facilities`| School facilities                                |
| `/gallery`  | Photo gallery with category filters              |
| `/staff`    | Staff directory                                  |
| `/news`     | News articles with filters and search            |
| `/news/:id` | Individual news detail                           |
| `/apply`    | Online admission application form                |
| `/contact`  | Contact form with map                            |

## Setup

```bash
npm install
npm run dev
```

### Environment Variables

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Key Features

- **Live news** — fetched from Supabase, admin posts via management portal
- **Admission applications** — submitted via `/apply`, reviewed in portal
- **Contact form** — messages saved to Supabase with email notification
- **Anti-spam** — honeypot + timestamp validation + origin checks on all API endpoints
- **SEO** — react-helmet-async for per-page meta tags

## Deployment

Deployed on Vercel at `divine-lifting-website.vercel.app`. Auto-deploys from the `main` branch.
