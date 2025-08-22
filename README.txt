
# Khushi Collection — Gold & Black + Admin (Decap CMS)

## How it works
- Products and settings are stored in JSON files in `/data/`.
- Admin panel lives at `/admin` using Decap (Netlify) CMS.
- Images are uploaded to `/uploads` by the CMS.
- The frontend reads `/data/settings.json` and `/data/products.json` at runtime and renders the catalog.

## One-time setup on Netlify (required for saving from Admin)
1) Push these files to a Git repo (GitHub/GitLab/Bitbucket).
2) On Netlify, **New site from Git** → connect the repo → deploy.
3) In Site settings → **Identity**: Enable Netlify Identity.
4) In Identity → **Registration**: Invite users. Invite your admin email (the ID you mentioned).
5) Enable **Git Gateway** (Identity → Services → Enable Git Gateway).
6) Visit `https://YOUR-SITE.netlify.app/admin` → Accept the invite and log in → You can edit products and settings.

> Drag-and-drop deploys without a Git repo won't allow saving from the CMS. Use a Git-connected site for the admin to work.

## Editing
- To change theme colors, hero text, or contact info: Admin → *Site Settings*.
- To add products: Admin → *Products* → Add new item → Upload images → Publish.
- WhatsApp button uses the product title and price automatically.

## Customize
- Replace `/assets/logo.svg` with your own logo.
- Default colors are Black (`#000000`) and Gold (`#D4AF37`). You can edit them in the admin.

