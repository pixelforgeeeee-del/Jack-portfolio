# Jack — 3D Creator Portfolio

A single-page portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion (scroll reveals, character-by-character text reveal, sticky-stacking project cards)
- Lucide React (icon dependency included per spec; swap in icons as needed)

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/
    FadeIn.tsx           reusable whileInView reveal wrapper
    Magnet.tsx            mouse-following magnetic hover effect
    AnimatedText.tsx       character-by-character scroll reveal
    ContactButton.tsx      gradient pill CTA
    LiveProjectButton.tsx  ghost pill button
  sections/
    HeroSection.tsx
    MarqueeSection.tsx
    AboutSection.tsx
    ServicesSection.tsx
    ProjectsSection.tsx
  App.tsx
  main.tsx
  index.css
```

## Notes

- All imagery is pulled from the external URLs specified in the brief (motionsites.ai GIFs,
  the Figma-hosted portrait/decorative PNGs, and the higgs.ai/CloudFront project renders).
  An internet connection is required at runtime to load them.
- This project was authored in a sandboxed environment without network access, so
  `npm install` / a production build could not be executed here to double-check compilation.
  The code has been reviewed by hand for correctness — run `npm run build` locally to confirm,
  and let me know if anything needs adjusting.
