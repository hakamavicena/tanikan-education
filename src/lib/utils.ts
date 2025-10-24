import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// src/lib/utils.ts
import { ColorClasses } from "./types";

export const getLevelColor = (level: string): string => {
  switch (level) {
    case "Pemula": return "bg-green-100 text-green-700";
    case "Menengah": return "bg-blue-100 text-blue-700";
    case "Lanjutan": return "bg-purple-100 text-purple-700";
    case "Mahir": return "bg-orange-100 text-orange-700";
    default: return "bg-gray-100 text-gray-700";
  }
};

// FIX UNTUK TAILWIND: Menyediakan kelas hover lengkap secara eksplisit
export const getColorClasses = (color: string): ColorClasses => {
  const colors: Record<string, ColorClasses> = {
    emerald: {
      bg: "from-emerald-500 to-green-600", border: "border-emerald-500", text: "text-emerald-600", hover: "hover:border-emerald-600", hover_bg_full: "group-hover:from-emerald-500 group-hover:to-green-600",
    },
    blue: {
      bg: "from-blue-500 to-indigo-600", border: "border-blue-500", text: "text-blue-600", hover: "hover:border-blue-600", hover_bg_full: "group-hover:from-blue-500 group-hover:to-indigo-600",
    },
    red: {
      bg: "from-red-500 to-rose-600", border: "border-red-500", text: "text-red-600", hover: "hover:border-red-600", hover_bg_full: "group-hover:from-red-500 group-hover:to-rose-600",
    },
    purple: {
      bg: "from-purple-500 to-violet-600", border: "border-purple-500", text: "text-purple-600", hover: "hover:border-purple-600", hover_bg_full: "group-hover:from-purple-500 group-hover:to-violet-600",
    },
    orange: {
      bg: "from-orange-500 to-amber-600", border: "border-orange-500", text: "text-orange-600", hover: "hover:border-orange-600", hover_bg_full: "group-hover:from-orange-500 group-hover:to-amber-600",
    },
    teal: {
      bg: "from-teal-500 to-cyan-600", border: "border-teal-500", text: "text-teal-600", hover: "hover:border-teal-600", hover_bg_full: "group-hover:from-teal-500 group-hover:to-cyan-600",
    },
  };
  return colors[color] || colors.emerald;
};