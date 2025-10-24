"use client";
import React, { useState, useEffect } from "react";
import Hero from "./components/hero";
import About from "./components/about";
import Features from "./components/features";
import Impact from "./components/impact";
import {
  BookOpen,
  Users,
  Globe,
  Target,
  TrendingUp,
} from "lucide-react";

const TanikanEducation = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Panduan Lengkap Bioflok",
      description:
        "Pelajari metode budidaya bioflok dari dasar hingga panen dengan panduan langkah demi langkah yang mudah dipahami.",
      stats: "50+ Tutorial",
    },
    {
      icon: Target,
      title: "Identifikasi Masalah",
      description:
        "Kenali dan atasi berbagai kendala yang sering muncul dalam budidaya ikan bioflok dengan solusi praktis dan efektif.",
      stats: "100+ Solusi",
    },
    {
      icon: TrendingUp,
      title: "Tips dan Trik Ahli",
      description:
        "Dapatkan kiat-kiat praktis dari para ahli untuk meningkatkan efisiensi dan hasil panen Anda secara signifikan.",
      stats: "24/7 Support",
    },
  ];

  const impactStats = [
    {
      icon: Globe,
      label: "Jangkauan",
      value: "Se-Indonesia",
      color: "text-blue-500",
    },
    {
      icon: Users,
      label: "Target Pengguna",
      value: "Pembudidaya",
      color: "text-green-500",
    },
    {
      icon: TrendingUp,
      label: "Dampak",
      value: "Jangka Panjang",
      color: "text-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bungee&family=Changa:wght@200;300;400;500;600;700;800&display=swap');
      `}</style>
      <Hero impactStats={impactStats} />
      <About />
      <Features features={features} />
      <Impact />
    </div>
  );
};

export default TanikanEducation;
