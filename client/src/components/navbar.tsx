import { Moon, Sun } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

const links = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Weather", path: "/weather" },
  { label: "Planner", path: "/crop-planner" },
  { label: "Alerts", path: "/market-alerts" }
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [location, setLocation] = useLocation();

  return (
    <nav className="glass-panel sticky top-0 z-50">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/20">
              K
            </span>
            <div>
              <h1 className="text-lg font-bold text-slate-950 dark:text-white">KrishiCare</h1>
              <p className="text-xs text-slate-600 dark:text-slate-400">Smart farming dashboard</p>
            </div>
          </div>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <Button
              key={link.path}
              variant={location === link.path ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setLocation(link.path)}
            >
              {link.label}
            </Button>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5 text-white" />
          ) : (
            <Moon className="h-5 w-5 text-slate-900" />
          )}
        </Button>
      </div>
    </nav>
  );
}
