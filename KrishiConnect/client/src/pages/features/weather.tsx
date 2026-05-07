import { useTranslation } from "react-i18next";
import { Cloud, Thermometer, Droplets, Wind, Sun, CloudRain, Sunrise } from "lucide-react";
import { PageContainer } from "@/components/page-container";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface WeatherData {
  current: {
    temperature: number;
    humidity: number;
    windSpeed: number;
    description: string;
    precipitation: number;
    uvIndex: number;
    sunrise: string;
    sunset: string;
  };
  forecast: Array<{
    date: string;
    temperature: {
      min: number;
      max: number;
    };
    description: string;
    precipitation: number;
    humidity: number;
  }>;
  alerts: Array<{
    type: string;
    description: string;
  }>;
}

interface WeatherCardProps {
  icon: typeof Cloud;
  label: string;
  value: string | number;
  unit: string;
}

function WeatherCard({ icon: Icon, label, value, unit }: WeatherCardProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-accent rounded-lg hover:bg-accent/80 transition-colors">
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5 text-primary" />
        <span>{label}</span>
      </div>
      <span className="font-semibold">
        {value}
        {unit}
      </span>
    </div>
  );
}

function ForecastDay({ data }: { data: WeatherData['forecast'][0] }) {
  return (
    <Card className="hover:bg-accent/10 transition-colors">
      <CardHeader className="p-4">
        <CardTitle className="text-base">{new Date(data.date).toLocaleDateString()}</CardTitle>
        <CardDescription>{data.description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Temperature</span>
          <span>
            {data.temperature.min}°C - {data.temperature.max}°C
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Humidity</span>
          <span>{data.humidity}%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Rain Chance</span>
          <span>{data.precipitation}%</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Weather() {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated weather data for MVP
    setTimeout(() => {
      setWeather({
        current: {
          temperature: 28,
          humidity: 65,
          windSpeed: 12,
          description: "Partly Cloudy",
          precipitation: 20,
          uvIndex: 6,
          sunrise: "06:30",
          sunset: "18:45"
        },
        forecast: [
          {
            date: new Date().toISOString(),
            temperature: { min: 22, max: 30 },
            description: "Mostly Sunny",
            precipitation: 10,
            humidity: 60
          },
          {
            date: new Date(Date.now() + 86400000).toISOString(),
            temperature: { min: 21, max: 29 },
            description: "Scattered Showers",
            precipitation: 40,
            humidity: 70
          },
          {
            date: new Date(Date.now() + 172800000).toISOString(),
            temperature: { min: 20, max: 28 },
            description: "Light Rain",
            precipitation: 60,
            humidity: 75
          }
        ],
        alerts: [
          {
            type: "Heavy Rain Warning",
            description: "Possibility of heavy rainfall in the next 48 hours. Consider protecting sensitive crops."
          }
        ]
      });
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <PageContainer>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">{t("features.weather")}</h1>
          <Button variant="outline" onClick={() => setLocation("/dashboard")}>
            Back
          </Button>
        </div>

        <Tabs defaultValue="current" className="space-y-4">
          <TabsList>
            <TabsTrigger value="current">Current Weather</TabsTrigger>
            <TabsTrigger value="forecast">5-Day Forecast</TabsTrigger>
            <TabsTrigger value="alerts">Weather Alerts</TabsTrigger>
          </TabsList>

          <TabsContent value="current" className="space-y-4">
            {loading ? (
              <div className="space-y-4">
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
              </div>
            ) : (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Cloud className="h-6 w-6" />
                      Current Conditions
                    </CardTitle>
                    <CardDescription>{weather?.current.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <WeatherCard
                      icon={Thermometer}
                      label="Temperature"
                      value={weather?.current.temperature || 0}
                      unit="°C"
                    />
                    <WeatherCard
                      icon={Droplets}
                      label="Humidity"
                      value={weather?.current.humidity || 0}
                      unit="%"
                    />
                    <WeatherCard
                      icon={Wind}
                      label="Wind Speed"
                      value={weather?.current.windSpeed || 0}
                      unit=" km/h"
                    />
                    <WeatherCard
                      icon={CloudRain}
                      label="Rain Chance"
                      value={weather?.current.precipitation || 0}
                      unit="%"
                    />
                    <WeatherCard
                      icon={Sun}
                      label="UV Index"
                      value={weather?.current.uvIndex || 0}
                      unit=""
                    />
                    <WeatherCard
                      icon={Sunrise}
                      label="Sunrise/Sunset"
                      value={`${weather?.current.sunrise} - ${weather?.current.sunset}`}
                      unit=""
                    />
                  </CardContent>
                </Card>
              </>
            )}
          </TabsContent>

          <TabsContent value="forecast">
            <div className="grid gap-4 md:grid-cols-3">
              {weather?.forecast.map((day, index) => (
                <ForecastDay key={index} data={day} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="alerts">
            <div className="space-y-4">
              {weather?.alerts.map((alert, index) => (
                <Card key={index} className="border-destructive">
                  <CardHeader>
                    <CardTitle className="text-destructive">{alert.type}</CardTitle>
                    <CardDescription>{alert.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageContainer>
  );
}