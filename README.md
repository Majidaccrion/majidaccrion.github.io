# Accrion Accountants — Website

Static multi-page website for **accrionaccountants.co.uk**.

## Pages
- `index.html` — Home
- `about.html` — About the practice
- `services.html` — Services overview
- `tax.html`, `accounts.html`, `quickbooks.html`, `xero.html`, `automation.html` — service detail pages
- `contact.html` — Contact form, map, FAQ

## Key details baked into the site
- Phone / WhatsApp: 07496 693077 (`wa.me/447496693077`)
- Email: Info@accrionaccountants.co.uk
- Address: Atrium House, 574 Manchester Road, Bury, England, BL9 9SW
- Company No. 17121589 (shown in footer)

## To replace the logo
The site uses `images/logo.svg` (a recreation of the brand mark). To use the
original logo file instead, save it as `images/logo.png` and change
`images/logo.svg` to `images/logo.png` in the `<img>` tag of each page's header
and footer (search for `logo.svg`).

## Photos
The homepage hero and About page use free stock photos hotlinked from
Unsplash's CDN (images.unsplash.com). To use your own photos instead, save
them into `images/` and update the two `<img src="https://images.unsplash...`
tags in `index.html` and `about.html`.

## Contact form
The form posts to **formsubmit.co**, which forwards submissions to
Info@accrionaccountants.co.uk. The FIRST submission triggers a confirmation
email to that inbox — it must be confirmed once (click the link in that email)
before messages start arriving.

## Deploy to GitHub Pages (free hosting)
1. Create a GitHub account and a new **public** repository, e.g. `accrion-website`.
2. Upload all files in this folder to the repository (drag-and-drop on github.com works).
3. Repository → Settings → Pages → Source: `main` branch, `/ (root)` → Save.
4. In the Pages settings, set the custom domain to `accrionaccountants.co.uk`
   (this creates a `CNAME` file) and tick **Enforce HTTPS** once available.

## Point the GoDaddy domain at GitHub Pages
In GoDaddy DNS for accrionaccountants.co.uk:
1. Delete any existing `A` / parked records for `@`.
2. Add four `A` records for host `@`:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153
3. Add a `CNAME` record: host `www` → `<github-username>.github.io`
4. Wait up to an hour for DNS, then enable Enforce HTTPS in GitHub Pages.

## Run locally
Open `index.html` in a browser, or run a local server:
```
python -m http.server 8642
```
then visit http://localhost:8642
