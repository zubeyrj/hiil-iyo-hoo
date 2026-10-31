# Hiil iyo Hoo

Website for **Hiil iyo Hoo** ("support and provision"), a Somali diaspora charity
registered in the UK, providing emergency relief, clean water, health, education, and
livelihood support in Somalia — combining moral solidarity (*hiil*) with material aid
(*hoo*). Head office in London, field office in Mogadishu.

This is a close structural and visual rebuild of the
[DoGood](https://dogood.qodeinteractive.com/) charity theme demo — same section order,
same layout patterns (hero slider, donate/volunteer marquee bands, 3-slide content
carousel with counters, cause cards with percentage-raised, icon row, offset two-image
feature + overlapping "kindness" panel, minimal newsletter, masonry blog grid, video
block, testimonial slider, contact section, 3-column footer), same type system (Anton
display font + Heebo body font) — rebuilt from scratch as plain static HTML/CSS/JS with
Hiil iyo Hoo's own name, branding, and copy in place of DoGood's and the lorem ipsum.
No WordPress, no theme files, no copied code — an original implementation of the same
design. The accent colour system is retuned from DoGood's lavender/coral into the
charity's own maroon/terracotta palette, taken from the supplied logo.

**One deliberate scope cut:** DoGood's nav includes WordPress-theme-demo filler (nine
interchangeable "Home" variants, five blog list layouts, a full Shop, a Portfolio with
~15 layout permutations) that exists to showcase the theme, not to serve a real
charity's visitors. Those were left out. The nav here covers the pages an actual
charity site needs: Home, Our Work (About), Donations (causes), Events, Contact, plus
a dedicated Donate page. Say the word if you want the full demo-page sprawl replicated
too.

## Structure

- `index.html` — homepage, full section sequence described above
- `about.html` — "Our Work": full-bleed photo hero, numbered list, community section,
  kindness/volunteer-signup block, testimonial, programme-benefit counters
- `programs.html` — "Donation List": all six active causes with progress bars
- `events.html` — "Event List": 6 events with date badges
- `donate.html` — donate page (see payments note below)
- `contact.html` — "Contact Us": full-bleed hero, two offices, minimal form, map
- `assets/css/style.css` — the whole visual system (colours, type, every component)
- `assets/js/main.js` — mobile nav, off-canvas panel, hero/content/testimonial
  sliders, animated counters, donate-amount selector
- `assets/img/logo-mark.png`, `logo-text.png` — the HH icon and "HIIL iyo HOO"
  wordmark, both isolated from the supplied brand image with transparent backgrounds
- `assets/img/favicon*.png`, `favicon.ico`, `apple-touch-icon.png` — generated from
  the logo mark

## Before going live

1. **Payments.** `donate.html` is a visual template only — no payment processor is
   wired up. Connect a real one (Stripe Payment Links, PayPal, Donorbox, GiveLively,
   etc.) and replace the `Donate Now` button's behaviour. Amounts are shown in GBP (£).
2. **Forms.** The newsletter, volunteer, and contact forms use Netlify Forms
   attributes (`data-netlify="true"`), which work automatically **only if deployed on
   Netlify**. On another host, swap in a service like Formspree, or your own backend.
3. **Placeholder content to replace:**
   - Phone numbers, emails, and office addresses (London + Mogadishu) are
     realistic-format placeholders, not real contact points.
   - Team names on `about.html` are placeholders.
   - Donation totals / progress-bar / counter numbers are illustrative sample data.
   - Add your real Charity Commission registration number and Gift Aid statement
     (noted inline on `donate.html`) once the charity is registered.
4. **Photography.** The reference site leans heavily on real photography (hero
   portraits, volunteers in the field, testimonial subjects). This build uses
   brand-coloured duotone gradient blocks (`.ph-a`–`.ph-h` classes in the CSS) as
   stand-ins instead, since no rights-cleared photos of Hiil iyo Hoo's actual
   programmes were available. Swap in real photos — replace each
   `<div class="photo-tex ph-*">` with an `<img>`, or set it as that div's
   `background-image`. This matters more for this design than most — photography is
   load-bearing here.
5. **Map.** `contact.html` has a placeholder block where a real map embed (Google
   Maps, Mapbox, etc.) should go once your office addresses are finalised.

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
