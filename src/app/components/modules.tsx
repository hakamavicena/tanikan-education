"use client";
import React, { ComponentType, SVGProps } from "react";
import Heading from "@/components/typography/heading";
import Body from "@/components/typography/body";
import { PlayCircle, Star, Users, CheckCircle } from "lucide-react";

interface ModuleData {
  id: number;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  color: string;
}

interface ModuleProps {
  modules: ModuleData[];
  activeModule: number | null;
  setActiveModule: React.Dispatch<React.SetStateAction<number | null>>;
}
const Modules = ({ modules, activeModule, setActiveModule }: ModuleProps) => {
  return (
    <section id="modul" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Heading size="lg" className="text-gray-800 mb-4">
            Modul Pembelajaran
          </Heading>
          <Body size="xl" className="text-gray-600 max-w-3xl mx-auto">
            Jelajahi modul-modul kami yang terstruktur dan mudah diikuti,
            dirancang untuk membantu Anda menguasai setiap aspek budidaya ikan
            bioflok.
          </Body>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {modules.map((module) => (
            <div
              key={module.id}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer ${
                activeModule === module.id ? "ring-4 ring-blue-500/20" : ""
              }`}
              onClick={() =>
                setActiveModule(activeModule === module.id ? null : module.id)
              }
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-5`}
              ></div>
              <div className="relative p-8">
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${module.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <module.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <Body
                      size="sm"
                      weight="medium"
                      className="text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-1"
                    >
                      {module.difficulty}
                    </Body>
                    <Body size="xs" className="text-gray-500">
                      {module.duration}
                    </Body>
                  </div>
                </div>
                <Heading size="xs" className="text-gray-800 mb-3">
                  {module.title}
                </Heading>
                <Body size="md" className="text-gray-600 leading-relaxed mb-6">
                  {module.description}
                </Body>
                <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-xl hover:shadow-lg transition-all group-hover:scale-105 flex items-center justify-center">
                  <PlayCircle className="w-5 h-5 mr-2" />
                  <Body size="md" weight="medium" className="text-white">
                    Mulai Modul
                  </Body>
                </button>
              </div>
              {activeModule === module.id && (
                <div className="bg-gray-50 p-6 border-t animate-in slide-in-from-top">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-2" />
                      <Body size="sm" className="text-gray-600">
                        Rating: 4.8/5 (1,234 reviews)
                      </Body>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-blue-500 mr-2" />
                      <Body size="sm" className="text-gray-600">
                        2,345 siswa aktif
                      </Body>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <Body size="sm" className="text-gray-600">
                        Sertifikat tersedia
                      </Body>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;
