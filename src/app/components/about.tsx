import React from "react";
import Heading from "@/components/typography/heading";
import Body from "@/components/typography/body";
import { CheckCircle, Globe } from "lucide-react";

const About = () => {
  return (
    <section id="tentang" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Heading size="lg" className="text-gray-800 mb-4">
            Tentang Tanikan Education
          </Heading>
          <Body size="xl" className="text-gray-600 max-w-3xl mx-auto">
            Gerakan nirlaba yang lahir dari kepedulian mendalam terhadap
            tantangan yang dihadapi pembudidaya ikan di Indonesia.
          </Body>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <Heading size="sm" className="text-gray-800">
                Misi Kami
              </Heading>
              <Body size="md" className="text-gray-600 leading-relaxed">
                Tanikan Education adalah platform informasi komprehensif dan
                mudah diakses, yang berdedikasi memberikan pengetahuan praktis
                dan solusi nyata, khususnya melalui metode bioflok yang terbukti
                berkelanjutan.
              </Body>
              <Body size="md" className="text-gray-600 leading-relaxed">
                Kami percaya bahwa dengan edukasi yang tepat, budidaya ikan
                dapat menjadi sumber penghidupan yang berkelanjutan dan warisan
                bagi generasi mendatang.
              </Body>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl">
                <CheckCircle className="w-8 h-8 text-blue-500 mb-3" />
                <Heading size="xs" className="text-gray-800 mb-2">
                  Praktis
                </Heading>
                <Body size="sm" className="text-gray-600">
                  Solusi yang dapat langsung diterapkan
                </Body>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl">
                <Globe className="w-8 h-8 text-green-500 mb-3" />
                <Heading size="xs" className="text-gray-800 mb-2">
                  Berkelanjutan
                </Heading>
                <Body size="sm" className="text-gray-600">
                  Ramah lingkungan dan ekonomis
                </Body>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl blur-2xl"></div>
            <div className="relative grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Tim Tanikan 1"
                className="rounded-2xl shadow-lg h-48 object-cover transform -rotate-2 hover:rotate-0 transition-transform duration-300"
              />
              <img
                src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Tim Tanikan 2"
                className="rounded-2xl shadow-lg h-48 object-cover transform rotate-2 hover:rotate-0 transition-transform duration-300 mt-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
