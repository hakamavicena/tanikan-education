"use client";
import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Features from "./components/features";
import Modules from "./components/modules";
import Impact from "./components/impact";
import Footer from "./components/footer";
import {
  Fish,
  Droplets,
  BookOpen,
  Users,
  Award,
  Globe,
  Target,
  TrendingUp,
} from "lucide-react";

const TanikanEducation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeModule, setActiveModule] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const modules = [
    {
      id: 1,
      title: "Pengantar Bioflok",
      description:
        "Pelajari konsep dasar bioflok, keunggulan metode ini, serta peralatan dan persiapan yang dibutuhkan untuk memulai budidaya.",
      duration: "2-3 jam",
      difficulty: "Pemula",
      icon: Fish,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Manajemen Kualitas Air",
      description:
        "Pahami parameter kualitas air yang krusial dan pelajari cara menjaga kestabilan ekosistem kolam agar ikan tumbuh optimal.",
      duration: "3-4 jam",
      difficulty: "Menengah",
      icon: Droplets,
      color: "from-teal-500 to-green-500",
    },
    {
      id: 3,
      title: "Penanganan Penyakit Ikan",
      description:
        "Kenali gejala penyakit umum, pelajari langkah pencegahan, dan cara penanganan efektif untuk menjaga kesehatan ikan Anda.",
      duration: "2-3 jam",
      difficulty: "Lanjutan",
      icon: Award,
      color: "from-purple-500 to-pink-500",
    },
  ];

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
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollY={scrollY}
      />
      <Hero impactStats={impactStats} />
      <About />
      <Features features={features} />
      <Modules
        modules={modules}
        activeModule={activeModule}
        setActiveModule={setActiveModule}
      />
      <Impact />
      <Footer />
    </div>
  );
};

export default TanikanEducation;
