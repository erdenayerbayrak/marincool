"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface HeroSectionProps {
  lang: "tr" | "en";
}

const content = {
  tr: {
    title: "Yatınızın Konforunu",
    titleHighlight: "Garanti Altına Alın",
    subtitle: "Profesyonel marin klima çözümleri ile denizde maksimum konfor",
    cta1: "Hızlı Teklif Al",
    cta2: "Ürünlerimizi İnceleyin",
  },
  en: {
    title: "Guarantee Your",
    titleHighlight: "Yacht's Comfort",
    subtitle: "Maximum comfort at sea with professional marine air conditioning solutions",
    cta1: "Get Quick Quote",
    cta2: "View Our Products",
  },
};

const heroImages = [
  "/images/anasayfa1.jpg",
  "/images/anasayfa2.jpg",
  "/images/yat2.jpg",
];

export default function HeroSection({ lang }: HeroSectionProps) {
  const t = content[lang];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 saniyede bir değişim

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Decorative Yacht Image */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none z-0">
        <Image
          src="/images/yat6.jpg"
          alt="Yacht Decorative"
          fill
          className="object-cover object-left"
        />
      </div>
      
      {/* Background Images Slider */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Marincool Hero ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              quality={90}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-navy/70 to-primary-blue/50" />
      </div>

      {/* Slider Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? "bg-white scale-125" 
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            {t.title}
            <br />
            <span className="text-accent-green">{t.titleHighlight}</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto opacity-90">
            {t.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a 
            href="https://wa.me/905515085085" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
          >
            {t.cta1}
          </a>
          <Link
            href={`/${lang}/urunlerimiz`}
            className="btn btn-secondary"
          >
            {t.cta2}
          </Link>
        </motion.div>
      </div>

    </section>
  );
}