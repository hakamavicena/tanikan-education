import React from "react";
import Heading from "@/components/typography/heading";
import Body from "@/components/typography/body";
import { Fish } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Fish className="w-5 h-5 text-white" />
              </div>
              <Heading size="xs" className="text-white">
                Tanikan Education
              </Heading>
            </div>
            <Body size="md" className="text-gray-400">
              Menjadi legacy bagi budidaya ikan berkelanjutan di Indonesia
            </Body>
          </div>
          <div>
            <Heading size="xs" className="text-white mb-4">
              Navigasi
            </Heading>
            <div className="space-y-2">
              {["Home", "Tentang", "Materi", "Modul"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  <Body size="md">{item}</Body>
                </a>
              ))}
            </div>
          </div>
          <div>
            <Heading size="xs" className="text-white mb-4">
              Kontak
            </Heading>
            <div className="space-y-2">
              <Body size="md" className="text-gray-400">
                Email: info@tanikaneducation.id
              </Body>
              <Body size="md" className="text-gray-400">
                WhatsApp: +62 812-3456-7890
              </Body>
            </div>
          </div>
          <div>
            <Heading size="xs" className="text-white mb-4">
              Ikuti Kami
            </Heading>
            <div className="flex space-x-4">
              {["Facebook", "Instagram", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Body size="md">{social}</Body>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <Body size="md" className="text-gray-400">
            &copy; 2024 Tanikan Education. Semua Hak Dilindungi.
            <span className="text-green-400 ml-2">🌱 Sustainable Future</span>
          </Body>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
