# Quintile Advisory — Website

Boutique recruitment firm site for **Quintile Advisory** (Chicago).
Specializing in Supply Chain, Manufacturing, Operations, Engineering, Technology & AI talent.

> **We Find The Exceptional.**

## Stack

- **Framework:** Next.js 15 (App Router) + React 19
- **Styling:** Tailwind CSS v4 + a custom design-token layer (`app/globals.css`)
- **Fonts:** Fraunces (editorial serif) · Inter (UI) · JetBrains Mono (markers) — self-hosted via `next/font`
- **Hosting:** Vercel
- **Contact form backend:** API route at `app/api/contact/route.ts` — optional Supabase storage + Resend email

Design language blends an editorial, cream-paper aesthetic (Antimetal) with a confident
monochrome-pill system (xAI), recolored to the brand palette:
**Deep Navy `#042C53` · Gold `#C9A84C` · Cream `#F0EAD6`**.

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About Us |
| `/services` | Services |
| `/industries` | Industries |
| `/functions` | Functions |
| `/contact` | Contact (form) |

All copy lives in [`lib/content.ts`](lib/content.ts) — edit there to update text.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Contact form — environment variables

The form works out of the box (validates + logs submissions server-side). To enable
storage, email notifications, and confirmations, set these in Vercel → Project → Settings → Environment Variables:

```bash
# Email notifications + auto-confirmation (Resend — https://resend.com)
RESEND_API_KEY=re_xxxxxxxx
CONTACT_TO_EMAIL=quintileadvisory@quintileadvisory.com
CONTACT_FROM_EMAIL="Quintile Advisory <hello@quintileadvisory.com>"   # must be a verified Resend domain

# Optional: store submissions in Supabase
SUPABASE_URL=https://xxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=xxxxxxxx
```

**Supabase table** (if used):

```sql
create table contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text, email text, "companyName" text, phone text,
  "lookingFor" text, message text,
  "submittedAt" timestamptz default now()
);
```

Spam protection is handled with a hidden honeypot field. To add **reCAPTCHA v3**, wire a
token in `components/ContactForm.tsx` and verify it in the API route with `RECAPTCHA_SECRET`.

## Deploy to Vercel

```bash
# one-time
npm i -g vercel
vercel login

# from the repo root
vercel          # preview
vercel --prod   # production
```

Then add the domain **quintileadvisory.com** under Vercel → Domains and point DNS as Vercel instructs.

## SEO

- Per-page titles/descriptions via the metadata API
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt`
- Update the production URL in `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts` if the domain changes.
