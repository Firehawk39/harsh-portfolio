"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-[52px] h-[28px] rounded-full bg-black/5 dark:bg-white/10" />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative flex items-center justify-between w-[64px] h-[34px] rounded-full bg-muted dark:bg-muted p-1.5 transition-colors hover:bg-black/10 dark:hover:bg-white/10 outline-none focus-visible:ring-2 focus-visible:ring-foreground"
      aria-label="Toggle theme"
    >
      <div className="flex items-center justify-center w-6 h-6 z-10 text-muted-foreground">
        <Sun size={14} strokeWidth={3} />
      </div>
      <div className="flex items-center justify-center w-6 h-6 z-10 text-muted-foreground">
        <Moon size={14} strokeWidth={3} />
      </div>
      
      {/* Active Pill */}
      <div 
        className={cn(
          "absolute top-1 w-[26px] h-[26px] rounded-full bg-background shadow-md transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          theme === "dark" ? "translate-x-[30px]" : "translate-x-0"
        )}
      />
    </button>
  );
}
