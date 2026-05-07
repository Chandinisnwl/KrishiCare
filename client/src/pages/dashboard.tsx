import { useTranslation } from "react-i18next";
import { useLocation } from "wouter";
import { Cloud, Sprout, Droplets, Book, Bug, MessageCircle, TrendingUp, CalendarDays } from "lucide-react";
import { PageContainer } from "@/components/page-container";
import { FeatureCard } from "@/components/feature-card";

const dashboardStats = [
  { label: "Active tools", value: "8", accent: "bg-emerald-500/10", icon: TrendingUp },
  { label: "Daily tips", value: "12+", accent: "bg-amber-500/10", icon: Book },
  { label: "Farms supported", value: "420+", accent: "bg-sky-500/10", icon: Sprout }
];

export default function Dashboard() {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();

  const features = [
    {
      icon: Cloud,
      title: t("features.weather"),
      description: "Check the latest weather outlook for your farm",
      path: "/weather"
    },
    {
      icon: Sprout,
      title: t("features.cropPrices"),
      description: "See farm-gate prices for popular crops",
      path: "/crop-prices"
    },
    {
      icon: Droplets,
      title: t("features.soilQuality"),
      description: "Understand soil health and nutrient needs",
      path: "/soil-quality"
    },
    {
      icon: Book,
      title: t("features.farmingTechniques"),
      description: "Learn smart planting and harvesting methods",
      path: "/farming-techniques"
    },
    {
      icon: Bug,
      title: t("features.pestDetection"),
      description: "Spot pests quickly and protect your crops",
      path: "/pest-detection"
    },
    {
      icon: MessageCircle,
      title: t("features.expertAdvice"),
      description: "Ask experts for guidance on your farm",
      path: "/expert-advice"
    },
    {
      icon: CalendarDays,
      title: t("features.cropPlanner"),
      description: "Build a season-ready crop plan",
      path: "/crop-planner"
    },
    {
      icon: TrendingUp,
      title: t("features.marketAlerts"),
      description: "Track market signals and price alerts",
      path: "/market-alerts"
    }
  ];

  return (
    <PageContainer className="space-y-8">
      <section className="glass-panel p-8">
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300/90">KrishiCare</p>
            <h1 className="text-4xl font-extrabold leading-tight text-slate-950 dark:text-white md:text-5xl">
              Smarter farming, better harvests.
            </h1>
            <p className="max-w-2xl text-slate-600 dark:text-slate-300">
              Use weather insights, pricing signals, and planning tools to grow more with less effort.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <button
                onClick={() => setLocation("/crop-planner")}
                className="rounded-full bg-emerald-500/90 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
              >
                Plan a crop
              </button>
              <button
                onClick={() => setLocation("/weather")}
                className="rounded-full border border-slate-200/60 bg-white/90 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 dark:border-white/15 dark:bg-slate-950/60 dark:text-slate-100 dark:hover:bg-slate-900"
              >
                View weather
              </button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {dashboardStats.map((stat) => (
              <div key={stat.label} className="glass-panel p-5">
                <div className={`inline-flex items-center justify-center rounded-3xl p-3 ${stat.accent}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <p className="mt-4 text-3xl font-bold text-slate-950 dark:text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="glass-panel p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-950 dark:text-white">Explore tools</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">Open any tool to get personalized farming support.</p>
          </div>
        </div>
      </section>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {features.slice(0, 4).map((feature) => (
          <FeatureCard
            key={feature.path}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            onClick={() => setLocation(feature.path)}
          />
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {features.slice(4).map((feature) => (
          <FeatureCard
            key={feature.path}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            onClick={() => setLocation(feature.path)}
          />
        ))}
      </div>
    </PageContainer>
  );
}
