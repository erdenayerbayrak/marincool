"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface YachtGalleryProps {
  lang: "tr" | "en";
}

const content = {
  tr: {
    title: "Projelerimizden Örnekler",
    subtitle: "Başarıyla tamamladığımız lüks yat klima sistemleri",
    viewAll: "Tümünü Göster"
  },
  en: {
    title: "Examples from Our Projects",
    subtitle: "Successfully completed luxury yacht air conditioning systems",
    viewAll: "View All"
  },
};

const yachtImages = [
  { src: "/images/yat1.jpg", alt: "Luxury Yacht 1" },
  { src: "/images/yat2.jpg", alt: "Luxury Yacht 2" },
  { src: "/images/yat3.jpg", alt: "Luxury Yacht 3" },
  { src: "/images/yat4.jpg", alt: "Luxury Yacht 4" },
  { src: "/images/yat5.jpg", alt: "Luxury Yacht 5" },
  { src: "/images/yat6.jpg", alt: "Luxury Yacht 6" },
];

export default function YachtGallery({ lang }: YachtGalleryProps) {
  const t = content[lang];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-gray-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-primary-navy mb-4">{t.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {yachtImages.map((yacht, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={yacht.src}
                  alt={yacht.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={`object-cover transition-transform duration-500 ${
                    hoveredIndex === index ? "scale-110" : "scale-100"
                  }`}
                />
                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-primary-navy/70 to-transparent transition-opacity duration-300 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />
                <div 
                  className={`absolute bottom-4 left-4 right-4 text-white transition-transform duration-300 ${
                    hoveredIndex === index ? "translate-y-0" : "translate-y-4"
                  }`}
                >
                  <h3 className="text-lg font-semibold mb-1">
                    {lang === "tr" ? `Proje ${index + 1}` : `Project ${index + 1}`}
                  </h3>
                  <p className="text-sm opacity-90">
                    {lang === "tr" ? "Marin klima sistemi" : "Marine air conditioning system"}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-primary-navy text-white rounded-full hover:bg-primary-blue transition-colors cursor-pointer">
            <span className="font-semibold">{t.viewAll}</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}