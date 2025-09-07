import React, { ComponentType, SVGProps } from "react";
import Heading from "@/components/typography/heading";
import Body from "@/components/typography/body";
import { PlayCircle, ArrowRight } from "lucide-react";

interface impactStatsProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  color: string;
}
const Hero = ({ impactStats }:{impactStats:impactStatsProps[]}) => {
  return (
    <section id="home" className="pt-24 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-cyan-500/5 to-teal-500/10"></div>
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">

            <Heading  className="leading-tight text-[48px] sm:text-[60px]">
              <span className="bg-gradient-to-r from-blue-700 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Masa Depan
              </span>
              <br />
              <span className="text-gray-800">Budidaya Ikan</span>
              <br />
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                Berkelanjutan
              </span>
            </Heading>
            <Body
              size="xl"
              weight="normal"
              className="text-gray-600 leading-relaxed max-w-xl"
            >
              Menjadi warisan berharga bagi pembudidaya ikan di seluruh
              Indonesia, dengan fokus pada metode bioflok yang ramah lingkungan,
              ekonomis, dan berkelanjutan.
            </Body>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center">
                <PlayCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                <Body size="lg" weight="semibold" className="text-white">
                  Mulai Belajar Sekarang
                </Body>
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-blue-500 hover:text-blue-500 transition-all flex items-center justify-center">
                <Body size="lg" weight="semibold" className="text-current">
                  Lihat Materi
                </Body>
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              {impactStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                  <Body weight="bold" size="md" className="text-gray-800">
                    {stat.value}
                  </Body>
                  <Body size="sm" className="text-gray-600">
                    {stat.label}
                  </Body>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Budidaya Ikan Bioflok"
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <Heading size="xs" className="text-white mb-1">
                  Bioflok Technology
                </Heading>
                <Body size="sm" className="text-white/90">
                  Sustainable Fish Farming
                </Body>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
