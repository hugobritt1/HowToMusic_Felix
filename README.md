# HowToMusic

Pre-launch marketing site + demo lesson path for HowToMusic — a step-by-step way to actually learn guitar, piano, and whatever's next.

## What's in here

- **Landing page** (`/`) — brand story, waitlist CTA, tone
- **Demo lesson path** (`/lessons`) — Duolingo-style node path with two sample lessons
- **Lesson detail** (`/lessons/[id]`) — video embed, text steps, mark-complete flow
- **Waitlist API** (`/api/waitlist`) — POST { email, instrument }
- Progress lives in `localStorage` under the key `htm.progress.v1` — no accounts needed for the demo

## Local dev

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Deploying (Vercel)

This is a stock Next.js 16 App Router project. Push to GitHub, import into Vercel, done — no env vars required for the MVP.

Default deploy URL: `howtomusic.vercel.app` (or similar). Swap in a custom domain later via Vercel's dashboard.

## Waitlist storage

The `/api/waitlist` route currently:

1. Validates the email
2. `console.log`s the entry (visible in Vercel's deployment logs — `[waitlist] {...}`)
3. Attempts to append to `data/waitlist.jsonl` (works in local dev; a no-op on Vercel's read-only filesystem)

**To swap in real storage**, edit `app/api/waitlist/route.ts` and replace the `persistLocal(entry)` call with your backend of choice:

- **Vercel Postgres / Neon** — `INSERT INTO waitlist ...`
- **Google Sheets** — POST to a Sheets API endpoint
- **Resend / ConvertKit / Mailchimp** — POST to their contacts API
- **Vercel KV** — `kv.lpush("waitlist", JSON.stringify(entry))`

Keep the `console.log` line as a safety net — you'll always have the emails in Vercel logs.

## Lesson videos

`data/lessons.ts` holds the two demo lessons. Replace `youtubeId` on each entry with your unlisted YouTube video IDs when the real footage is ready. The player uses the privacy-friendly `youtube-nocookie.com` embed.

## Brand

Colours, fonts, and voice all live in `app/globals.css` (`:root` custom properties) and the SVG logo in `public/brand/`. If the palette shifts, update the `:root` block once and every surface follows.

- **Music Blue** `#2E6FF2`
- **Deep Blue** `#1F3C88`
- **Signal Yellow** `#FFD23F`
- **Paper** `#FAF7F0`
- **Ink** `#151A2E`

Fonts: Poppins (display) + Inter (body), loaded via `next/font` — no CDN calls at runtime.
