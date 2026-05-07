import { useState } from "react";
import { useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { PageContainer } from "@/components/page-container";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const cropOptions = ["Rice", "Wheat", "Maize", "Tomato", "Cotton"];
const seasonOptions = ["Kharif", "Rabi", "Zaid"];

const cropRecommendations: Record<string, { yield: string; fertilizer: string; irrigation: string }> = {
  Rice: { yield: "4.5 tons/ha", fertilizer: "Nitrogen-rich feed", irrigation: "High" },
  Wheat: { yield: "3.8 tons/ha", fertilizer: "Balanced NPK", irrigation: "Moderate" },
  Maize: { yield: "5.0 tons/ha", fertilizer: "Phosphorus-rich mix", irrigation: "Moderate" },
  Tomato: { yield: "60 tons/ha", fertilizer: "Potassium-rich blend", irrigation: "Regular drip" },
  Cotton: { yield: "2.3 tons/ha", fertilizer: "Nitrogen with micronutrients", irrigation: "Low to moderate" }
};

export default function CropPlanner() {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();
  const [crop, setCrop] = useState("Rice");
  const [season, setSeason] = useState("Kharif");
  const [area, setArea] = useState(1);
  const [plan, setPlan] = useState<string | null>(null);

  const generatePlan = () => {
    const details = cropRecommendations[crop];
    setPlan(
      `Plant ${crop} in the ${season} season over ${area} ha. Estimated yield ${details.yield}. Use ${details.fertilizer} and ${details.irrigation.toLowerCase()} irrigation practices.`
    );
  };

  return (
    <PageContainer className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-950 dark:text-white">{t("features.cropPlanner")}</h1>
          <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
            Build a simple crop strategy for the coming season and see recommended care notes.
          </p>
        </div>
        <Button variant="outline" onClick={() => setLocation("/dashboard")}>Back to dashboard</Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1.5fr]">
        <Card className="space-y-4 rounded-3xl border border-slate-200/60 bg-white/90 p-6 shadow-xl shadow-slate-950/10 dark:border-white/10 dark:bg-slate-950/80 dark:shadow-slate-950/20">
          <CardHeader>
            <CardTitle>Settings</CardTitle>
            <CardDescription>Choose your crop, season, and planted area.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-3">
              <label className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                Crop
                <select
                  value={crop}
                  onChange={(event) => setCrop(event.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                >
                  {cropOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                Season
                <select
                  value={season}
                  onChange={(event) => setSeason(event.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                >
                  {seasonOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                Area (hectares)
                <Input
                  type="number"
                  min={0.1}
                  step={0.1}
                  value={area}
                  onChange={(event) => setArea(Number(event.target.value))}
                  className="bg-white text-slate-950 dark:bg-slate-900 dark:text-white"
                />
              </label>
            </div>
            <Button className="w-full rounded-full bg-emerald-500 px-5 py-3 text-white hover:bg-emerald-400" onClick={generatePlan}>
              Generate plan
            </Button>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border border-slate-200/60 bg-white/90 p-6 shadow-xl shadow-slate-950/10 dark:border-white/10 dark:bg-slate-950/80 dark:shadow-slate-950/20">
          <CardHeader>
            <CardTitle>Recommended plan</CardTitle>
            <CardDescription>Review the crop schedule and care summary.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {plan ? (
              <div className="space-y-4 rounded-3xl bg-slate-100/80 p-4 text-slate-950 dark:bg-slate-900/80 dark:text-slate-100">
                <p>{plan}</p>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-3xl bg-white p-4 text-slate-950 shadow-sm shadow-slate-900/5 dark:bg-slate-800/80 dark:text-slate-100 dark:shadow-none">
                    <p className="text-sm uppercase text-slate-500 dark:text-slate-400">Target yield</p>
                    <p className="mt-2 font-semibold text-slate-950 dark:text-white">{cropRecommendations[crop].yield}</p>
                  </div>
                  <div className="rounded-3xl bg-white p-4 text-slate-950 shadow-sm shadow-slate-900/5 dark:bg-slate-800/80 dark:text-slate-100 dark:shadow-none">
                    <p className="text-sm uppercase text-slate-500 dark:text-slate-400">Fertilizer</p>
                    <p className="mt-2 font-semibold text-slate-950 dark:text-white">{cropRecommendations[crop].fertilizer}</p>
                  </div>
                  <div className="rounded-3xl bg-white p-4 text-slate-950 shadow-sm shadow-slate-900/5 dark:bg-slate-800/80 dark:text-slate-100 dark:shadow-none">
                    <p className="text-sm uppercase text-slate-500 dark:text-slate-400">Irrigation</p>
                    <p className="mt-2 font-semibold text-slate-950 dark:text-white">{cropRecommendations[crop].irrigation}</p>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-slate-500 dark:text-slate-400">Generate a plan to see a personalized crop strategy.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
