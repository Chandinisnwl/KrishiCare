import { useTranslation } from "react-i18next";
import { Droplets } from "lucide-react";
import { PageContainer } from "@/components/page-container";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const SOIL_TYPES = [
  {
    type: "Black Soil",
    description: "Rich in calcium carbonate, potash, lime and magnesium. Ideal for cotton and sugarcane.",
    characteristics: ["High water retention", "Good for deep-rooted crops", "Self-ploughing nature"]
  },
  {
    type: "Alluvial Soil",
    description: "Fertile soil deposited by rivers. Perfect for rice, wheat and other cereals.",
    characteristics: ["Rich in humus", "Good drainage", "Highly fertile"]
  },
  {
    type: "Red Soil",
    description: "Contains iron oxide and is suitable for growing groundnuts, potato, and citrus fruits.",
    characteristics: ["Poor water retention", "Rich in minerals", "Good for drought-resistant crops"]
  }
];

export default function SoilQuality() {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();

  return (
    <PageContainer>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">{t("features.soilQuality")}</h1>
          <Button variant="outline" onClick={() => setLocation("/dashboard")}>
            Back
          </Button>
        </div>

        <div className="grid gap-4">
          {SOIL_TYPES.map((soil) => (
            <Card key={soil.type}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Droplets className="h-6 w-6" />
                  {soil.type}
                </CardTitle>
                <CardDescription>{soil.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {soil.characteristics.map((char) => (
                    <li key={char} className="text-sm text-muted-foreground">
                      {char}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}