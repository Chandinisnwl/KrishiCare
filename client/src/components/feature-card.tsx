import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick: () => void;
}

export function FeatureCard({ icon: Icon, title, description, onClick }: FeatureCardProps) {
  return (
    <Card
      className="glass-card"
      onClick={onClick}
    >
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-300">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <CardTitle className="text-lg text-slate-950 dark:text-white">{title}</CardTitle>
            <CardDescription className="text-slate-600 dark:text-slate-400">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
