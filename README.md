# Gulledge · Knapp · Leissler · Santos · Lenhard — Reunion 2028

The official family reunion planning site. 5 pages, 90s aesthetic, live voting with Supabase.

## Stack
- **Next.js 14** (App Router)
- **Tailwind CSS** (with custom 90s tokens)
- **Supabase** (votes table)
- **Vercel** (hosting)

## Pages
- `/` — Home: family roster, destination cards, marquee, WordArt
- `/michigan` — Northern Michigan: Sleeping Bear Resort breakdown
- `/alaska` — Alaska Cruise: Inside Passage, motion sickness info, excursions
- `/caribbean` — Caribbean Cruise: Eastern Caribbean, honest tradeoffs
- `/vote` — Live voting: name + destination + comment, live results tally

---

## Setup

### 1. Clone and install

```bash
git clone <your-repo-url>
cd reunion2028
npm install
```

### 2. Set up Supabase

1. Create a free project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** and run the contents of `supabase-setup.sql`
3. Go to **Settings → API** and copy your Project URL and anon key

### 3. Configure environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
```

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deploy to Vercel

### Option A: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option B: GitHub + Vercel Dashboard
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy

That's it. Vercel auto-deploys on every push to `main`.

---

## Sharing

Once deployed, share the Vercel URL with the family:
- Everyone can browse the 3 destination options
- Everyone can cast a vote on `/vote`
- Results are live and visible to all

---

## Notes
- No authentication — votes are open to anyone with the link (intentional, it's family)
- People can vote multiple times if they share a name — honor system
- Charlyssa makes the final call regardless of vote count 👑
