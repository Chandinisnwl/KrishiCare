# KrishiCare

KrishiCare is a full-stack farming dashboard designed for weather-aware crop planning, market alerts, soil insights, and expert guidance. The project combines a modern React + Vite frontend with a lightweight Node/Express backend.

## Features

- Transparent light/dark glass UI with adaptive styling
- Dashboard with fast access to farming tools and analytics
- Crop planner with seasonal recommendations
- Market alerts and trend tracking
- Multi-page routing using `wouter`
- Responsive design optimized for desktop and mobile
- Internationalization support with `react-i18next`
- Backend-ready structure with Express server and database tooling

## Tech Stack

- Frontend: React 18, Vite, Tailwind CSS
- Backend: Node.js, Express, TypeScript
- Database / ORM: Drizzle ORM + Drizzle Kit
- State / data fetching: `@tanstack/react-query`
- UI primitives: Radix UI, Lucide icons, custom components
- Localization: `react-i18next`

## Repository Structure

```txt
KrishiCare/
├── client/
│   ├── index.html
│   ├── src/
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── main.tsx
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── lib/
│   │   └── pages/
│   └── tsconfig.json
├── server/
│   ├── index.ts
│   ├── routes.ts
│   ├── storage.ts
│   └── vite.ts
├── shared/
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
├── drizzle.config.ts
├── postcss.config.js
├── theme.json
├── .gitignore
└── README.md
```

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open the URL shown by Vite in your browser (usually `http://localhost:5173`).

## Build

```bash
npm run build
```

## Future Improvements

- Add database migrations and seeded demo data
- Integrate real weather and market data APIs
- Add user authentication and profiles
- Add charts and historical analytics
- Add mobile navigation and performance optimization

## Notes

- Theme selection is saved in `localStorage`
- The backend server is bundled with `esbuild` for production builds
- `drizzle-kit` is configured to manage database schema changes
