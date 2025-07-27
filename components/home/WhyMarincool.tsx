"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

interface WhyMarincoolProps {
  lang: "tr" | "en";
}

const content = {
  tr: {
    title: "Neden Marincool?",
    features: [
      "Uzman mühendis kadrosu",
      "Orijinal yedek parça garantisi",
      "Enerji verimliliği odaklı çözümler",
      "Hızlı müdahale garantisi",
      "Rekabetçi fiyat politikası",
    ],
  },
  en: {
    title: "Why Marincool?",
    features: [
      "Expert engineering team",
      "Original spare parts guarantee",
      "Energy efficiency focused solutions",
      "Fast response guarantee",
      "Competitive pricing policy",
    ],
  },
};

export default function WhyMarincool({ lang }: WhyMarincoolProps) {
  const t = content[lang];

  return (
    <section className="relative py-12 bg-gray-50">
      {/* Background Yacht Image */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <Image
          src="/images/yat5.jpg"
          alt="Yacht Background"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary-navy mb-3">{t.title}</h2>
          <div className="w-16 h-0.5 bg-primary-navy mx-auto"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left - Visual Content */}
            <div className="relative">
              <div className="relative bg-white p-3 rounded-2xl shadow-lg max-w-sm mx-auto">
                <div className="relative w-full h-[240px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/team-photo.jpeg"
                    alt="Marincool Team"
                    fill
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 384px"
                    className="object-contain bg-gray-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <h3 className="text-base font-semibold">
                      {lang === "tr" ? "Uzman Ekibimiz" : "Our Expert Team"}
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Features List */}
            <div className="space-y-3">
              {t.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-green/10 rounded-lg flex items-center justify-center">
                    <FaCheckCircle className="text-accent-green text-sm" />
                  </div>
                  <span className="text-gray-800 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}