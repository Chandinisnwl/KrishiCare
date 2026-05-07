import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { LANGUAGES } from "@shared/languages";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to KrishiCare",
      selectLanguage: "Select Your Language",
      register: {
        title: "Register",
        name: "Full Name",
        age: "Age",
        region: "Region",
        district: "District",
        village: "Village",
        pin: "PIN Code",
        submit: "Continue"
      },
      features: {
        weather: "Weather Forecast",
        cropPrices: "Crop Prices",
        soilQuality: "Soil Quality",
        farmingTechniques: "Farming Techniques",
        pestDetection: "Pest Detection",
        expertAdvice: "Expert Advice",
        cropPlanner: "Crop Planner",
        marketAlerts: "Market Alerts"
      }
    }
  }
  // Additional translations would be added here
};

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18next;