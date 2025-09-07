"use client";
import React from "react";
import Heading from "@/components/typography/heading";
import Body from "@/components/typography/body";
import { Fish, Menu, X, PlayCircle, ArrowRight } from "lucide-react";

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  scrollY: number;
}
const Header = ({ isMenuOpen, setIsMenuOpen, scrollY }: HeaderProps) => {
  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/90"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Fish className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <Heading
                size="xs"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
              >
                TANIKAN EDUCATION
              </Heading>
              <Body size="xs" className="text-gray-500">
                Budidaya Berkelanjutan
              </Body>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {["Home", "Tentang", "Materi", "Modul", "Dampak"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-600 transition-colors relative group"
              >
                <Body size="md" weight="medium">
                  {item}
                </Body>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all transform hover:scale-105">
              <Body size="md" weight="medium" className="text-white">
                Mulai Belajar
              </Body>
            </button>
          </nav>
          <button
            className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-white rounded-lg shadow-lg animate-in slide-in-from-top">
            {["Home", "Tentang", "Materi", "Modul", "Dampak"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-gray-700 hover:text-blue-600"
              >
                <Body size="md" weight="medium">
                  {item}
                </Body>
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
