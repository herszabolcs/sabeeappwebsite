# SabeeApp Website Redesign

Modern marketing website for [SabeeApp](https://sabeeapp.com) — cloud hotel management software for independent and boutique properties.

## Tech stack

| Layer | Technology |
|-------|------------|
| Frontend | React 19 + TypeScript + Vite |
| Styling | Tailwind CSS v4 |
| Backend | Supabase (demo request leads) |
| Hosting | Netlify |
| CI | GitHub Actions |
| Source control | GitHub |

## Getting started

### Prerequisites

- Node.js 22+
- npm
- A Supabase project (free tier works)

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

```bash
cp .env.example .env
```

Add your Supabase URL and anon key from the [Supabase dashboard](https://supabase.com/dashboard).

### 3. Set up the database

Run the migration in your Supabase project (SQL Editor or CLI):

```bash
# With Supabase CLI linked to your project:
supabase db push
```

Or paste the contents of `supabase/migrations/20260527000000_demo_requests.sql` into the Supabase SQL Editor.

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Deploy to Netlify

1. Push this repo to GitHub
2. In [Netlify](https://app.netlify.com), create a new site from Git
3. Build settings are auto-detected from `netlify.toml`
4. Add environment variables in Netlify → Site settings → Environment:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

## Project structure

```
src/
├── components/
│   ├── layout/       # Header, Footer
│   ├── sections/     # Landing page sections
│   └── ui/           # Reusable UI primitives
├── data/             # Content (copy, pricing, FAQs)
├── lib/              # Supabase client
└── types/            # TypeScript types
supabase/
└── migrations/       # Database schema
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Next steps

- [ ] Connect real SabeeApp brand assets (logo, product screenshots)
- [ ] Add Google Analytics / GTM
- [ ] Expand to multi-page (pricing calculator, knowledge base links)
- [ ] Set up Supabase Auth for internal lead dashboard
- [ ] Configure custom domain on Netlify
