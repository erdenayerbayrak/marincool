"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { Spotlight } from "@/components/ui/Spotlight";

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
    <section className="section-padding">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="/images/team-photo.jpg"
              alt="Marincool Team"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 text-primary-navy mb-8">{t.title}</h2>
            <ul className="space-y-4">
              {t.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <FaCheckCircle className="text-2xl text-accent-green flex-shrink-0" />
                  <span className="text-lg text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}