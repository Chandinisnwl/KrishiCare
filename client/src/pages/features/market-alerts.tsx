import { useState } from "react";
import { useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { PageContainer } from "@/components/page-container";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, TrendingUp, ArrowUpRight } from "lucide-react";

const alerts = [
  { title: "Tomato price surge", message: "Tomato prices rose 15% this week in the local mandi.", tag: "High demand" },
  { title: "Wheat market stable", message: "Wheat prices are steady with strong buying interest from mills.", tag: "Stable" },
  { title: "New subsidy alert", message: "Government support announced for organic cotton farmers.", tag: "Subsidy" }
];

const trending = [
  { crop: "Tomato", change: "+15%" },
  { crop: "Rice", change: "+6%" },
  { crop: "Maize", change: "-2%" }
];

export default function MarketAlerts() {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <PageContainer className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-950 dark:text-white">{t("features.marketAlerts")}</h1>
          <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">
            Stay updated with the latest commodity movements and price signals.
          </p>
        </div>
        <Button variant="outline" onClick={() => setLocation("/dashboard")}>Back to dashboard</Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
        <Card className="rounded-3xl border border-slate-200/60 bg-white/90 p-6 shadow-xl shadow-slate-950/10 dark:border-white/10 dark:bg-slate-950/80 dark:shadow-slate-950/20">
          <CardHeader className="flex items-start justify-between gap-4">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-emerald-400" />
                Latest alerts
              </CardTitle>
              <CardDescription>Important signals from the market and crop updates.</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {alerts.map((alert) => (
              <div key={alert.title} className="rounded-3xl border border-slate-200/70 bg-slate-50/90 p-4 text-slate-950 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-100">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-slate-950 dark:text-white">{alert.title}</p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{alert.message}</p>
                  </div>
                  <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-700 dark:text-emerald-200">{alert.tag}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="rounded-3xl border border-slate-200/60 bg-white/90 p-6 shadow-xl shadow-slate-950/10 dark:border-white/10 dark:bg-slate-950/80 dark:shadow-slate-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-sky-400" />
              Trending crops
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {trending.map((item) => (
              <div key={item.crop} className="flex items-center justify-between rounded-3xl bg-slate-50/90 p-4 text-slate-950 dark:bg-slate-900/80 dark:text-slate-100">
                <div>
                  <p className="font-semibold text-slate-950 dark:text-white">{item.crop}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Price change</p>
                </div>
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm text-emerald-700 dark:text-emerald-200">{item.change}</span>
              </div>
            ))}
          </CardContent>

          <div className="mt-6 rounded-3xl border border-slate-200/70 bg-slate-50/90 p-5 text-slate-950 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-100">
            <p className="text-sm text-slate-600 dark:text-slate-400">Subscribe for email updates on new alerts and price surges.</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Input
                placeholder="Email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="bg-white text-slate-950 dark:bg-slate-950 dark:text-white"
              />
              <Button
                className="rounded-full bg-emerald-500 px-5 py-3 text-white hover:bg-emerald-400"
                onClick={() => setSubscribed(true)}
              >
                Subscribe
              </Button>
            </div>
            {subscribed && (
              <p className="mt-3 text-sm text-emerald-700 dark:text-emerald-300">Subscribed! We’ll send alerts to {email || "your inbox"}.</p>
            )}
          </div>
        </Card>
      </div>
    </PageContainer>
  );
}
