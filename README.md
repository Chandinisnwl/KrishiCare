# KrishiCare

KrishiCare is a full-stack farming dashboard designed for weather-aware crop planning, market alerts, soil insights, and expert guidance. The project combines a modern React + Vite frontend with a lightweight Node/Express backend.

## Live Demo

🚀 **[View Live Demo](https://krishicare.onrender.com/)**

## Features
🌦️ Weather-aware crop planning

🌱 Seasonal crop recommendations

📈 Market alerts and farming trends

🧪 Soil insights and guidance

🌐 Multi-language support using react-i18next

🌓 Transparent glassmorphism light/dark UI

📱 Fully responsive layout for mobile and desktop

⚡ Fast navigation with client-side routing

🔧 Modular backend architecture with Express

🛠️ Tech Stack
Frontend
React 18

Vite

Tailwind CSS

TypeScript

Backend
Node.js

Express.js

Database & ORM
Drizzle ORM

Drizzle Kit

State Management & Fetching
@tanstack/react-query

UI & Utilities
Radix UI

Lucide React Icons

react-i18next

wouter

📂 Project Structure
KrishiCare/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   └── main.tsx
│
├── server/
│   ├── index.ts
│   ├── routes.ts
│   ├── storage.ts
│   └── vite.ts
│
├── shared/
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── drizzle.config.ts
└── README.md
⚙️ Installation
Clone the repository:

git clone https://github.com/chandinisnwl/KrishiCare.git
cd KrishiCare
Install dependencies:

npm install
▶️ Run Development Server
npm run dev
Open:

http://localhost:5173
📦 Production Build
npm run build
🌐 Deployment
The application is deployed using Render.

<<<<<<< HEAD
## Deployment

### Render (Current Deployment)

KrishiCare is currently deployed on Render at: **[https://krishicare.onrender.com/](https://krishicare.onrender.com/)**

### Vercel (Alternative)

KrishiCare is also configured for easy deployment to Vercel:

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel --prod
   ```

Or use the provided deployment scripts:
- **Linux/Mac**: `./deploy.sh`
- **Windows**: `deploy.bat`

The app will be deployed as a full-stack application with the Express server running as serverless functions.

### Manual Vercel Deployment

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect the `vercel.json` configuration and deploy

## Future Improvements
=======
Open KrishiCare
>>>>>>> fc4428884d98e81770d6a4f06415295b8b3fd852

🔮 Future Improvements
Real-time weather API integration

Live mandi/market price tracking

AI-powered crop recommendations

User authentication & farmer profiles

Historical analytics and charts

Offline support for rural connectivity

Pest detection using image processing

📝 Notes
Theme preferences are stored using localStorage

Backend production builds use esbuild

drizzle-kit is configured for schema management and migrations

👩‍💻 Author
Chandini Sonowal
BTech CSE Student | Full-Stack Developer

📜 License
This project is developed for educational and learning purposes.
