# Bhitick Sethia & Associates

Chartered Accountants website — Next.js App Router.

**Production domain:** [bhiticksethia.com](https://bhiticksethia.com)

## Local

```bash
npm install
npm run dev
```

## Hostinger (Node.js Web App)

1. hPanel → **Websites** → **Add Website** → **Node.js web app**
2. **Import Git Repository** → connect this repo (`main`)
3. Settings:
   - Framework: **Next.js**
   - Node.js: **20+**
   - Build: `npm run build`
   - Output: `.next`
   - Start: `npm run start` (uses `$PORT`)
4. Attach domain **bhiticksethia.com** (+ `www` if needed)
5. Deploy — later pushes to `main` auto-redeploy

## Stack

Next.js 16 · React 19 · Tailwind CSS 4 · Framer Motion
