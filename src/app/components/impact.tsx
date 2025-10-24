import React from "react";
import Heading from "@/components/typography/heading";
import Body from "@/components/typography/body";
import { Target, Globe, TrendingUp } from "lucide-react";
import Link from "next/link";

const Impact = () => {
  return (
    <section
      id="dampak"
      className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Heading size="lg" className="text-white mb-4">
            Dampak & Target Kami
          </Heading>
          <Body size="xl" className="opacity-90 max-w-3xl mx-auto text-white">
            Menciptakan perubahan nyata dalam dunia budidaya ikan berkelanjutan
            di Indonesia
          </Body>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Target className="w-10 h-10" />
            </div>
            <Heading size="xs" className="text-white mb-2">
              Target Persona
            </Heading>
            <Body size="md" className="opacity-90 text-white">
              Pembudidaya ikan di Indonesia, dari pemula hingga berpengalaman
              yang ingin menerapkan metode berkelanjutan
            </Body>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Globe className="w-10 h-10" />
            </div>
            <Heading size="xs" className="text-white mb-2">
              Jangkauan Dampak
            </Heading>
            <Body size="md" className="opacity-90 text-white">
              Se-Indonesia dengan dampak jangka panjang yang berkelanjutan
              hingga bertahun-tahun ke depan
            </Body>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-10 h-10" />
            </div>
            <Heading size="xs" className="text-white mb-2">
              Kebutuhan Solusi
            </Heading>
            <Body size="md" className="opacity-90 text-white">
              Target sudah menyadari kebutuhan akan solusi berkelanjutan untuk
              budidaya ikan yang lebih efisien
            </Body>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <div className="text-center ">
            <Link href="">
              <div className="bg-white text-blue-600 px-8 py-4 rounded-full hover:shadow-xl transition-all transform hover:scale-105  ">
                <Body size="lg" weight="semibold" className="text-blue-600">
                  Bergabung dengan Gerakan Kami
                </Body>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
