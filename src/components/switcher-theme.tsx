"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export function ThemeSwitcher() {
  const { colorTheme, toggleTheme } = useTheme();

  return (
    <button
      role="button"
      aria-label="Toggle Theme"
      onClick={toggleTheme}
      className={`fixed left-8 bottom-6 w-14 h-14 border dark:border-zinc-500 rounded-full flex items-center justify-center z-[9999] shadow-lg dark:bg-zinc-900 bg-zinc-100 transition-colors`}
    >
      {colorTheme === "dark" ? (
        <Sun size={24} className="text-dark" />
      ) : (
        <Moon size={24} className="text-light" />
      )}
    </button>
  );
}
