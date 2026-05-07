import { useTranslation } from "react-i18next";
import { Bug, AlertTriangle } from "lucide-react";
import { PageContainer } from "@/components/page-container";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Separator } from "@/components/ui/separator";

const COMMON_PESTS = [
  {
    name: "Aphids",
    description: "Small sap-sucking insects that can damage crops",
    symptoms: ["Yellowing leaves", "Stunted growth", "Sticky residue on leaves"],
    control: "Use neem oil spray or introduce ladybugs as natural predators"
  },
  {
    name: "Armyworms",
    description: "Caterpillars that feed on crop leaves and stems",
    symptoms: ["Irregular holes in leaves", "Damaged crop edges", "Visible caterpillars"],
    control: "Apply Bacillus thuringiensis (Bt) or use pheromone traps"
  },
  {
    name: "Whiteflies",
    description: "Tiny white flying insects that feed on plant sap",
    symptoms: ["Honeydew on leaves", "Yellow mottling", "Wilting plants"],
    control: "Use yellow sticky traps and insecticidal soaps"
  }
];

export default function PestDetection() {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();

  return (
    <PageContainer>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">{t("features.pestDetection")}</h1>
          <Button variant="outline" onClick={() => setLocation("/dashboard")}>
            Back
          </Button>
        </div>

        {COMMON_PESTS.map((pest) => (
          <Card key={pest.name}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bug className="h-6 w-6" />
                {pest.name}
              </CardTitle>
              <CardDescription>{pest.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                    Symptoms
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    {pest.symptoms.map((symptom) => (
                      <li key={symptom} className="text-sm text-muted-foreground">
                        {symptom}
                      </li>
                    ))}
                  </ul>
                </div>
                <Separator />
                <div>
                  <h3 className="font-semibold mb-2">Control Measures</h3>
                  <p className="text-sm text-muted-foreground">{pest.control}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
}