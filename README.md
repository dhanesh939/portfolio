This is a Next.js project for `dhaneshpatel.com`.

## Local development

```bash
npm run dev
```

Open `http://localhost:3000` in your browser to see the result.

## Production domain

Preferred production domain:

`https://www.dhaneshpatel.com`

All of the following should resolve to that primary URL:

- `http://dhaneshpatel.com`
- `http://www.dhaneshpatel.com`
- `https://dhaneshpatel.com`
- `https://www.dhaneshpatel.com`

## HTTPS and domain checklist

In Vercel:

- Add both domains:
- `dhaneshpatel.com`
- `www.dhaneshpatel.com`
- Set `www.dhaneshpatel.com` as the primary domain.
- Make sure the non-primary domain redirects to the primary domain.
- Redeploy production after DNS or domain changes.

In Cloudflare:

- SSL/TLS mode should be `Full` or `Full (strict)`.
- Enable `Always Use HTTPS`.
- Enable `Automatic HTTPS Rewrites`.
- Make sure DNS records point correctly to Vercel.
- Avoid proxy or DNS misconfiguration if Vercel domain verification fails.

## Security notes

- Metadata base, canonical URLs, and OpenGraph URLs should use `https://www.dhaneshpatel.com`.
- Use only local relative asset paths or HTTPS URLs.
- Avoid hardcoded `http://` URLs anywhere in metadata, assets, scripts, or API calls.
- HSTS is enabled in `next.config.ts`, so keep HTTPS fully working in production.

## Build

```bash
npm run build
```
