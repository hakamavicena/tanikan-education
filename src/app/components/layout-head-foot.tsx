"use client";
import Header from "./header";
import Footer from "./footer";
import React, { useState, useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
   useEffect(() => {
     const handleScroll = () => setScrollY(window.scrollY);
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);
  return (
    <div className="flex flex-col min-h-screen">
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollY={scrollY}
      />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
    </div>
  );
}
