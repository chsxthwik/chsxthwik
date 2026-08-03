# CH SATHWIK // GODMODE

Production-ready personal portfolio for CH SATHWIK (`sxthwik`): Next.js 15, TypeScript, Tailwind, Framer Motion, React Three Fiber, Recharts, shadcn-style UI primitives, and Supabase-ready API routes.

## Run locally

```bash
npm install
Copy-Item .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Production contact delivery

The contact form posts to `/api/contact`. For real delivery, configure either a Supabase service key or a Discord webhook (or both):

1. Create a Supabase project.
2. Run `supabase/schema.sql` in the Supabase SQL editor.
3. Copy the project URL into `NEXT_PUBLIC_SUPABASE_URL`.
4. Copy the anon key into `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
5. Copy the server-only service role key into `SUPABASE_SERVICE_ROLE_KEY`.
6. Optionally set `DISCORD_WEBHOOK_URL` for instant Discord delivery.

Never expose `SUPABASE_SERVICE_ROLE_KEY` to the browser.

## Deploy to Vercel

```bash
npm run build
npm run start
```

Import the repo into Vercel, add the `.env.local` values in Project Settings, and deploy. `NEXT_PUBLIC_SITE_URL` should be the final HTTPS domain for canonical metadata, robots, and sitemap.

## Included production features

- App Router with typed shared data and API routes
- Responsive cyber aesthetic with dark/light and mute controls
- SSR-safe Three.js scene with particle field and rotating wireframe core
- Animated terminal with copy action
- Recharts radar and interactive skill tree
- Downloadable source bundles under `public/downloads`
- Responsible-disclosure research log and CVSS labels
- Supabase schema plus Discord webhook delivery
- Open Graph/Twitter metadata, sitemap, robots, and PWA manifest
