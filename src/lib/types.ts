// src/lib/types.ts

// Definisikan tipe Course & ColorClasses di sini
export type Course = {
  id: number;
  title: string;
  description: string;
  lessons: number;
  duration: string;
  level: "Pemula" | "Menengah" | "Lanjutan" | "Mahir" | "Semua Level";
  price: string;
  color: "emerald" | "blue" | "red" | "purple" | "orange" | "teal";
  modules: {
    title: string;
    lessons: number;
    items: string[];
  }[];
};

export type ColorClasses = {
  bg: string;
  border: string;
  text: string;
  hover: string;
  hover_bg_full: string;
};
