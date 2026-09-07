# Azure Tech Moulds — Website

A React + Vite + Tailwind CSS website for **Azure Tech Moulds** (Ranipet, Tamil Nadu), a manufacturer of die, mould and CNC machined automobile components. Built from the company profile deck, two capability/SEO documents, certificates and photographs supplied for the project.

## Running locally

```bash
npm install
npm run dev
```

## Building for production

```bash
npm run build
```

Output is written to `dist/`. It's a static site — deploy `dist/` to Netlify, Vercel, or any static host. Since routing uses React Router (client-side), configure your host to redirect all paths to `index.html` (a `_redirects` file for Netlify would contain `/* /index.html 200`).

## Tech stack

- React 19 + Vite 8
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- React Router DOM (client-side routing)
- lucide-react (icons)

## Structure

```
src/
  components/   Header, Footer, ContactForm, MachineSpecCard, ServiceCard, etc.
  data/         All real content as JS objects (company info, services, machinery, gallery...)
  pages/        Home, About, Services (index + dynamic detail), Infrastructure, Gallery, Contact, 404
  assets/       Real photographs (extracted from the supplied profile PDF) and vetted marketing graphics
```

## Content notes / verification summary

**Pages created:** Home, About, Services (index), 4 individual service pages (Precision Machined Parts, Mould & Die Manufacturing, Mechanical & Tool Assembly, Press Tool Assembly), Infrastructure, Gallery, Contact, 404. A standalone Products page was intentionally skipped — this is a job-shop/service business, not a product catalogue.

**Brand name:** The logo and business card say "Azure Tech Moulds"; the company profile deck, ISO certificate and TAGMA certificate all say "New Tech Moulds" at the same address. Per your confirmation, the site uses the **Azure Tech Moulds** name and the business card's contact details throughout, and notes on the certifications (About page) that they were issued under the previous name.

**Images used:**
- Real photographs extracted directly from the company profile PDF: factory exterior, 4 office-interior shots, all named machines (Manford VH1100, both Cosmos CVM800 variants, STM VL1300, STM VL850, Jyoti DX200, Ratna Sparking 7045 EDM), 4th axis rotary table, power grip unit, radial drill, magnetic chuck, laser engraving machine, manual stacker, shop crane, assembly crane, all 4 measuring instruments, and the 4 mould-type reference images.
- The garlanded machine-installation photo and the logo you sent directly were used for the hero and header/footer branding.
- From the two zipped marketing-graphic sets: only the graphics whose printed spec numbers **matched** the real machine data were used (CNC turning, EDM sparking, 4th axis, both Cosmos CVM800 variants, full tool assembly, sub-assembly, press tool fabrication/testing, pattern plate, aluminium die casting). Graphics for the Manford VH1100, STM VL1300 and STM VL850 had **incorrect specs baked into the image** (wrong table sizes/load capacities) and were deliberately left out in favour of the real factory photos, so the site never shows a number that contradicts your actual equipment data.
- The five bullet-list screenshot images (in the first zip) were duplicates of text already in the PDFs and weren't used as photos.

**Not incorporated / worth reviewing:**
- No specific named customer testimonials, project case studies, or "years in business" figure were supplied, so none appear on the site (per the brief's instruction not to invent statistics).
- The Tamil-language quality policy is shown as supplementary text on the About page rather than as the original scanned graphic (which had a decorative sketch background not suited to a clean web layout).
- The contact page embeds a Google Maps search for the address (no place pin / Plus Code was supplied) — swap in an exact Google Maps link or embed code if you have one.
- Business hours on the Contact page are a reasonable placeholder (Mon–Sat, 9:00–6:30) since exact hours weren't stated anywhere in the source material — please confirm or correct.
- No social media links were supplied, so none appear in the footer.
