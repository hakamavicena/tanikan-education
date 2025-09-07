import React, {ComponentType, SVGProps} from "react";
import Heading from "@/components/typography/heading";
import Body from "@/components/typography/body";
import { ArrowRight } from "lucide-react";
interface FeaturesProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description:string;
  stats:string;
}
const Features = ({ features }:{features:FeaturesProps[]}) => {
  return (
    <section
      id="materi"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Heading size="lg" className="text-gray-800 mb-4">
            Materi yang Kami Sediakan
          </Heading>
          <Body size="xl" className="text-gray-600 max-w-2xl mx-auto">
            Konten berkualitas tinggi yang dirancang khusus untuk kebutuhan
            pembudidaya ikan Indonesia
          </Body>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <Heading size="xs" className="text-gray-800 mb-3">
                  {feature.title}
                </Heading>
                <Body size="md" className="text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </Body>
                <div className="flex items-center justify-between">
                  <Body
                    size="sm"
                    weight="medium"
                    className="text-blue-600 bg-blue-50 px-3 py-1 rounded-full"
                  >
                    {feature.stats}
                  </Body>
                  <ArrowRight className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
