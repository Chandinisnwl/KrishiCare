import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import LanguageSelect from "@/pages/language-select";
import Register from "@/pages/register";
import Dashboard from "@/pages/dashboard";
import Weather from "@/pages/features/weather";
import CropPrices from "@/pages/features/crop-prices";
import SoilQuality from "@/pages/features/soil-quality";
import FarmingTechniques from "@/pages/features/farming-techniques";
import PestDetection from "@/pages/features/pest-detection";
import ExpertAdvice from "@/pages/features/expert-advice";
import NotFound from "@/pages/not-found";
import "./lib/i18n";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={LanguageSelect} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/weather" component={Weather} />
          <Route path="/crop-prices" component={CropPrices} />
          <Route path="/soil-quality" component={SoilQuality} />
          <Route path="/farming-techniques" component={FarmingTechniques} />
          <Route path="/pest-detection" component={PestDetection} />
          <Route path="/expert-advice" component={ExpertAdvice} />
          <Route component={NotFound} />
        </Switch>
      </main>
      {/* Watermark */}
      <div className="fixed bottom-4 right-4 text-sm text-foreground/40 pointer-events-none">
        Created by Chandini & Diya
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="krishicare-theme">
      <QueryClientProvider client={queryClient}>
        <Router />
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;