import { useTranslation } from "react-i18next";
import { Sprout } from "lucide-react";
import { PageContainer } from "@/components/page-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CROP_PRICES = [
  { name: "Rice", price: 2200, unit: "quintal" },
  { name: "Wheat", price: 2015, unit: "quintal" },
  { name: "Corn", price: 1870, unit: "quintal" },
  { name: "Soybeans", price: 3900, unit: "quintal" },
  { name: "Cotton", price: 6200, unit: "quintal" }
];

export default function CropPrices() {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();

  return (
    <PageContainer>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">{t("features.cropPrices")}</h1>
          <Button variant="outline" onClick={() => setLocation("/dashboard")}>
            Back
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sprout className="h-6 w-6" />
              Market Prices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Crop</TableHead>
                  <TableHead>Price (₹)</TableHead>
                  <TableHead>Unit</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {CROP_PRICES.map((crop) => (
                  <TableRow key={crop.name}>
                    <TableCell className="font-medium">{crop.name}</TableCell>
                    <TableCell>₹{crop.price}</TableCell>
                    <TableCell>per {crop.unit}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}