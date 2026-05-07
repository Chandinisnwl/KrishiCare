import { useTranslation } from "react-i18next";
import { MessageCircle, Send, User } from "lucide-react";
import { PageContainer } from "@/components/page-container";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useLocation } from "wouter";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

const EXPERT_CATEGORIES = [
  {
    title: "Crop Management",
    description: "Get advice on crop selection, rotation, and management practices"
  },
  {
    title: "Soil Health",
    description: "Consult experts about soil testing and improvement methods"
  },
  {
    title: "Pest Control",
    description: "Get professional help with pest identification and control"
  },
  {
    title: "Market Advisory",
    description: "Receive guidance on market trends and crop pricing"
  }
];

// Simulated expert responses based on keywords
const getExpertResponse = (query: string) => {
  const lowerQuery = query.toLowerCase();
  if (lowerQuery.includes("pest") || lowerQuery.includes("insect")) {
    return "For pest control, I recommend implementing Integrated Pest Management (IPM). Start with regular monitoring of your crops, use natural predators when possible, and only use chemical pesticides as a last resort. Consider neem-based solutions for organic pest control.";
  }
  if (lowerQuery.includes("soil") || lowerQuery.includes("fertilizer")) {
    return "For optimal soil health, start with a soil test to understand its composition. Consider adding organic matter through composting and implement crop rotation to maintain soil fertility. Maintain proper pH levels between 6.0-7.0 for most crops.";
  }
  if (lowerQuery.includes("crop") || lowerQuery.includes("plant")) {
    return "Based on current agricultural trends, consider diversifying your crops. Implement intercropping techniques to maximize land use and reduce pest pressure. Monitor weather patterns to optimize planting schedules.";
  }
  if (lowerQuery.includes("market") || lowerQuery.includes("price")) {
    return "Current market trends show strong demand for organic produce. Consider direct-to-consumer sales channels and local farmers markets. Focus on high-value crops like vegetables and fruits for better returns.";
  }
  return "Thank you for your question. Based on agricultural best practices, I recommend starting with a small-scale trial to test different approaches. Monitor the results carefully and adjust based on your specific conditions. Consider consulting with local agricultural extension services for location-specific advice.";
};

export default function ExpertAdvice() {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    // Simulate API delay
    setTimeout(() => {
      const expertResponse = getExpertResponse(query);
      setResponse(expertResponse);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <PageContainer>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">{t("features.expertAdvice")}</h1>
          <Button variant="outline" onClick={() => setLocation("/dashboard")}>
            Back
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {EXPERT_CATEGORIES.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  {category.title}
                </CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Ask an Expert</CardTitle>
            <CardDescription>
              Describe your farming concern and our experts will provide personalized advice
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Textarea
                placeholder="Type your question here..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="min-h-[120px]"
              />
              <Button 
                type="submit"
                className="w-full sm:w-auto"
                disabled={isLoading || !query.trim()}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
                    Processing...
                  </span>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Submit Question
                  </>
                )}
              </Button>
            </form>

            {response && (
              <div className="mt-6 space-y-4">
                <Separator />
                <Card className="bg-accent/50">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Expert Response
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed">{response}</p>
                  </CardContent>
                </Card>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}