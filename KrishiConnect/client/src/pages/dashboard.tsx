import { useTranslation } from "react-i18next";
import { useLocation } from "wouter";
import { Cloud, Sprout, Droplets, Book, Bug, MessageCircle } from "lucide-react";
import { PageContainer } from "@/components/page-container";
import { FeatureCard } from "@/components/feature-card";

export default function Dashboard() {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();

  const features = [
    {
      icon: Cloud,
      title: t("features.weather"),
      description: "Check weather forecast for your area",
      path: "/weather"
    },
    {
      icon: Sprout,
      title: t("features.cropPrices"),
      description: "View current market prices",
      path: "/crop-prices"
    },
    {
      icon: Droplets,
      title: t("features.soilQuality"),
      description: "Learn about soil health",
      path: "/soil-quality"
    },
    {
      icon: Book,
      title: t("features.farmingTechniques"),
      description: "Best farming practices",
      path: "/farming-techniques"
    },
    {
      icon: Bug,
      title: t("features.pestDetection"),
      description: "Identify and manage pests",
      path: "/pest-detection"
    },
    {
      icon: MessageCircle,
      title: t("features.expertAdvice"),
      description: "Get expert consultation and advice",
      path: "/expert-advice"
    }
  ];

  return (
    <PageContainer>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
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