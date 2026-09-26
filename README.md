# Humza Asif — Mobile App Developer & Flutter Specialist Portfolio

> **Production mobile developer portfolio showcasing 9 published applications on Google Play, cross-platform Flutter architecture, native device hardware integrations, and end-to-end product delivery.**

[![Built with Vite](https://img.shields.io/badge/Built%20with-Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-CSS%20v4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 📱 Shipped Applications Featured

All projects featured on this portfolio are verified, production applications available on the **Google Play Store**:

1. **[Speedometer PRO・MPH Tracker](https://play.google.com/store/apps/details?id=com.appxtrastudio.speedometer)** (`com.appxtrastudio.speedometer`) — GPS-based real-time speed tracking, Heads-Up Display (HUD) windshield projection, high-speed alerts, trip log history, and multi-unit metrics.
2. **[TapOkay](https://play.google.com/store/apps/details?id=com.app.tapokay)** (`com.app.tapokay`) — Daily wellness check-in, 10 cognitive brain games, encrypted health safety vault, and caregiver emergency alerts for independent seniors.
3. **[Buck / Budget Manager](https://play.google.com/store/apps/details?id=xtra.budget.manager)** (`xtra.budget.manager`) — Personal expense manager, multi-currency budget planner, recurring subscription tracker, and visual analytics.
4. **[Cube Solver](https://play.google.com/store/apps/details?id=xtra.cube.solver.cube_solver)** (`xtra.cube.solver.cube_solver`) — Real-time camera facet scanner, 3D interactive cube visualizer, and optimal move solver for 3x3, 4x4, and 5x5 cubes.
5. **[Pot AI Plant Identifier](https://play.google.com/store/apps/details?id=ai.plant.detector)** (`ai.plant.detector`) — Neural plant recognition across 500,000+ species, disease diagnostics, soil analysis, and weather-adaptive watering schedules.
6. **[Nox Decibel Meter](https://play.google.com/store/apps/details?id=com.appxtrastudio.decimalmeter)** (`com.appxtrastudio.decimalmeter`) — Real-time hardware microphone sound pressure level (SPL) tracking, acoustic calibration, and audiometric gauges.
7. **[CarO Car Maintenance](https://play.google.com/store/apps/details?id=xtra.car.maintenance)** (`xtra.car.maintenance`) — Multi-vehicle maintenance logbook, mileage-based service reminders, and fuel economy efficiency tracker.
8. **[Aim Pomodoro Timer](https://play.google.com/store/apps/details?id=xtra.pomodoro.timer)** (`xtra.pomodoro.timer`) — Distraction-free focus timer, custom interval work cycles, background task execution, and productivity streaks.
9. **[Raze Quit Addiction](https://play.google.com/store/apps/details?id=xtra.no.fap)** (`xtra.no.fap`) — Self-improvement and recovery companion featuring precision streak counters, relapse pattern logging, and community accountability.

---

## 🛠️ Tech Stack & Architecture

- **Core**: React 19, TypeScript, Vite 8, Tailwind CSS v4
- **Icons**: Lucide React + Custom SVG Brand Glyphs
- **Static Deployment**: 100% static HTML/CSS/JS with relative path resolution (`base: './'`), zero backend server dependencies
- **Hosting Targets**: GitHub Pages (`username.github.io` or `username.github.io/repo-name/`), Vercel, Netlify, Cloudflare Pages

---

## 🚀 Local Development

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### 1. Clone & Install
```bash
git clone https://github.com/mimoriam/portfolio.git
cd portfolio
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
Generates optimized static production bundles in the `dist/` directory.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## 🌐 Deploying to GitHub Pages

### Method A: Automated GitHub Actions (Recommended)
1. Push this repository to your GitHub account (e.g. `github.com/mimoriam/portfolio` or `github.com/mimoriam/mimoriam.github.io`).
2. Go to your repository **Settings** &rarr; **Pages**.
3. Under **Build and deployment** &rarr; **Source**, select **GitHub Actions**.
4. Push a commit to the `main` branch.
5. The pre-configured `.github/workflows/deploy.yml` will automatically build and publish the site.

### Method B: Deploying to `<username>.github.io`
If the repository is named `<username>.github.io`, the site will automatically deploy to the root domain. The Vite configuration uses relative paths (`base: './'`), ensuring all assets, scripts, icons, and PDF resumes load seamlessly on root or subdirectory paths.

---

## 📁 Content Architecture & Updating Data

All content is cleanly decoupled from UI components:

```
src/
├── data/
│   ├── apps.ts           # 9 Google Play apps metadata, screenshots, and deep case studies
│   ├── experience.ts     # Career history from CV
│   ├── education.ts      # M.Sc. & B.Sc. Computer Science & Pre-Engineering details
│   ├── research.ts       # IEEE ICET 2023 published paper & DOI link
│   ├── expertise.ts      # Mobile pillars & organized tech stack hierarchy
│   └── lifecycle.ts      # "From Idea to App Store" 6-step roadmap
├── components/           # Reusable UI widgets & device mockups
└── sections/             # Modular single-page sections
```

### Adding a New App
To add a new app to the portfolio, simply add an entry to the `APPS_DATA` array in `src/data/apps.ts`:
```ts
{
  id: 'my-new-app',
  name: 'App Name',
  publicTitle: 'Public Title on Play Store',
  packageId: 'com.example.app',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.example.app',
  category: 'Productivity',
  tagline: 'Short catchy tagline',
  oneLiner: 'One sentence value summary',
  icon: './images/apps/my-new-app/icon.webp',
  screenshots: ['./images/apps/my-new-app/screenshot-1.webp'],
  featured: true,
  accentColor: '#3b82f6',
  platform: 'Cross-Platform (Flutter)',
  tags: ['Flutter', 'Dart', 'SQLite'],
  caseStudy: { ... }
}
```

---

## 📄 Verified Credentials & Resume
- **Resume PDF**: Located in `public/Humza_Asif_CV.pdf` (accessible directly via the website header and contact buttons)
- **IEEE Research**: DOI `10.1109/ICET59753.2023.10374768`

---

## 📬 Contact Information
- **Email**: [humza.cs.asif@gmail.com](mailto:humza.cs.asif@gmail.com)
- **Phone**: `0312 6315604` (+92 312 6315604)
- **GitHub**: [github.com/mimoriam](https://github.com/mimoriam)
- **Location**: Multan, Pakistan
