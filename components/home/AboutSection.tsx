"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface AboutSectionProps {
  lang: "tr" | "en";
}

const content = {
  tr: {
    title: "MARINCOOL DÜNYASINI KEŞFEDİN",
    description: "30 yılı aşkın süredir müşterilerimizi memnun ediyor ve teknik bilgi birikimimizi sürekli geliştiriyoruz. Hizmet yelpazemiz, sizin ve yatınızın ihtiyaç duyduğu her şeyi kapsıyor.",
    cta: "Daha fazla bilgi edin",
    link: "/tr/hakkimizda"
  },
  en: {
    title: "DISCOVER THE MARINCOOL WORLD",
    description: "We have been satisfying our customers for over 30 years and continuously improving our technical knowledge. Our service range covers everything you and your yacht need.",
    cta: "Learn more",
    link: "/en/about"
  },
};

export default function AboutSection({ lang }: AboutSectionProps) {
  const t = content[lang];

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Cropped Yacht Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/yat1.jpg"
          alt="Luxury Yacht in Ocean"
          fill
          sizes="100vw"
          className="object-cover object-bottom"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />

      {/* Content Overlay */}
      <div className="relative z-10 flex items-start justify-center h-full px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight mb-6 tracking-tight"
          >
            {t.title}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed mb-8 font-light max-w-2xl mx-auto"
          >
            {t.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link 
              href={t.link}
              className="inline-flex items-center justify-center px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 font-medium tracking-wider text-base rounded-sm"
            >
              {t.cta}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
      >
        <div className="flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}