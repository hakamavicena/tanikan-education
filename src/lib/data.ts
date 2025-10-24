// src/lib/data.ts
import { Course } from "./types";

export const courses: Course[] = [
  // Data kursus yang sama (pastikan Anda menyalin SEMUA objek kursus di sini)
  {
    id: 1,
    title: "Bioflok untuk Pemula",
    description:
      "Panduan lengkap memulai budidaya ikan dengan metode bioflok dari nol",
    lessons: 12,
    duration: "3-4 jam",
    level: "Pemula",
    price: "Gratis",
    color: "emerald",
    modules: [
      {
        title: "Pengantar Bioflok",
        lessons: 3,
        items: [
          "Apa itu Bioflok?",
          "Keunggulan Metode Bioflok",
          "Persiapan Awal",
        ],
      },
      {
        title: "Peralatan & Infrastruktur",
        lessons: 4,
        items: [
          "Kolam Bioflok",
          "Sistem Aerasi",
          "Peralatan Monitoring",
          "Budget & Investasi",
        ],
      },
      {
        title: "Memulai Budidaya",
        lessons: 5,
        items: [
          "Persiapan Air",
          "Penebaran Bibit",
          "Pemberian Pakan Awal",
          "Monitoring Harian",
          "Tips Sukses",
        ],
      },
    ],
  },
];

export const getCourseById = (id: number): Course | undefined => {
  return courses.find((course) => course.id === id);
};
