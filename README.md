# Hiil iyo Hoo

Website for **Hiil iyo Hoo** ("support and provision"), a Somali community nonprofit
providing emergency relief, clean water, health, education, and livelihood support —
combining moral solidarity (*hiil*) with material aid (*hoo*).

Structure and section flow are modeled on the
[DoGood](https://dogood.qodeinteractive.com/) charity theme demo, rebuilt from scratch
as plain static HTML/CSS/JS with original content, branding, and copy for this
organization. No WordPress, no theme files, no copied code or assets — just the same
page layout pattern, personalized.

## Structure

- `index.html` — homepage (hero, impact panels, causes, CTA, newsletter, news,
  testimonials, contact teaser, footer)
- `about.html` — story, commitments, team, impact stats
- `programs.html` — all six active causes with progress bars
- `events.html` — upcoming events list
- `donate.html` — donation UI (see note below)
- `contact.html` — offices + contact form
- `assets/css/style.css` — shared stylesheet (brand colors, typography, components)
- `assets/js/main.js` — mobile nav, animated counters, donate-amount selector

## Before going live

1. **Payments.** `donate.html` is a visual template only — no payment processor is
   wired up. Connect a real one (Stripe Payment Links, PayPal, Donorbox, GiveLively,
   etc.) and replace the `Donate Now` button's behavior.
2. **Forms.** The newsletter and contact forms use Netlify Forms attributes
   (`data-netlify="true"`), which work automatically **only if deployed on Netlify**.
   On another host, swap in a service like Formspree, or your own backend.
3. **Placeholder content to replace:**
   - Phone numbers, emails, and office addresses (Mogadishu + Minneapolis) are
     realistic-format placeholders, not real contact points.
   - Team names on `about.html` are placeholders.
   - Donation totals / progress-bar numbers are illustrative sample data.
   - Add your real nonprofit registration / EIN and tax-deductibility statement
     (noted inline on `donate.html`).
4. **Images.** All media blocks currently use brand-colored CSS gradients
   (`.ph-1`–`.ph-6` classes) instead of photography, to avoid using anyone else's
   images without rights. Swap in real photos of your programs and communities —
   just replace the gradient `<div>` tiles with `<img>` tags.
5. **Logo.** The header/footer logo is a text wordmark. Replace with a real logo file
   if you have one.

## Running locally

Any static file server works, e.g.:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploying

This is a static site — no build step. Push to GitHub and deploy on Netlify, Vercel,
or GitHub Pages. A `netlify.toml` is included for a one-click Netlify deploy (and it
makes the forms above work out of the box).
