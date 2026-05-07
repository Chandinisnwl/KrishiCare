import { useTranslation } from "react-i18next";
import { Book } from "lucide-react";
import { PageContainer } from "@/components/page-container";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FARMING_TECHNIQUES = [
  {
    title: "Crop Rotation",
    content: "Rotate different crops in the same area to maintain soil health and reduce pest problems. This helps in natural nutrient management and pest control."
  },
  {
    title: "Mulching",
    content: "Cover the soil with organic materials to conserve moisture, suppress weeds, and improve soil fertility over time."
  },
  {
    title: "Integrated Pest Management",
    content: "Use biological controls, crop rotation, and resistant varieties before chemical pesticides. Monitor pest levels regularly and only treat when necessary."
  },
  {
    title: "Water Management",
    content: "Implement efficient irrigation systems like drip irrigation or sprinklers. Water early morning or late evening to reduce evaporation."
  },
  {
    title: "Organic Farming",
    content: "Use natural fertilizers and pest control methods. Focus on building healthy soil through composting and natural amendments."
  }
];

export default function FarmingTechniques() {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();

  return (
    <PageContainer>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">{t("features.farmingTechniques")}</h1>
          <Button variant="outline" onClick={() => setLocation("/dashboard")}>
            Back
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Book className="h-6 w-6" />
              Best Farming Practices
            </CardTitle>
          </CardHeader>
          <Accordion type="single" collapsible className="px-6 pb-6">
            {FARMING_TECHNIQUES.map((technique, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {technique.title}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {technique.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </PageContainer>
  );
}