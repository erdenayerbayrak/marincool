"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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

export default function HeroSection({ lang }: HeroSectionProps) {
  const t = content[lang];

  return (
    <section className="relative h-[60vh] sm:h-[65vh] md:h-[70vh] min-h-[400px] sm:min-h-[450px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/videos/herovideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-navy/70 to-primary-blue/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-4">
            {t.title}
            <br />
            <span className="text-accent-green">{t.titleHighlight}</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 max-w-2xl mx-auto opacity-90 px-4 sm:px-0">
            {t.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center px-4"
        >
          <a 
            href="https://wa.me/905515085085" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary min-h-[48px] px-8 py-4 text-center"
            style={{ touchAction: 'manipulation' }}
          >
            {t.cta1}
          </a>
          <Link
            href={lang === 'tr' ? '/tr/urunlerimiz' : '/en/products'}
            className="btn btn-secondary min-h-[48px] px-8 py-4 text-center"
            style={{ touchAction: 'manipulation' }}
          >
            {t.cta2}
          </Link>
        </motion.div>
      </div>

    </section>
  );
}