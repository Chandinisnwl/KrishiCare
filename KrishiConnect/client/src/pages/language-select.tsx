import { useTranslation } from "react-i18next";
import { useLocation } from "wouter";
import { LANGUAGES } from "@shared/languages";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageContainer } from "@/components/page-container";

export default function LanguageSelect() {
  const { i18n } = useTranslation();
  const [, setLocation] = useLocation();

  const handleLanguageSelect = async (code: string) => {
    await i18n.changeLanguage(code);
    setLocation("/register");
  };

  return (
    <PageContainer className="flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-primary">
            KrishiCare
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          {LANGUAGES.map((lang) => (
            <Button
              key={lang.code}
              variant="outline"
              className="h-12 text-lg"
              onClick={() => handleLanguageSelect(lang.code)}
            >
              {lang.name}
            </Button>
          ))}
        </CardContent>
      </Card>
    </PageContainer>
  );
}