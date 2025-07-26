"use client";

import { motion } from "framer-motion";
import { FaClock, FaUsers, FaTools } from "react-icons/fa";

interface TrustBadgesProps {
  lang: "tr" | "en";
}

const content = {
  tr: {
    badges: [
      {
        icon: FaClock,
        title: "15 Yıllık Deneyim",
        description: "Sektörde güvenilir isim",
      },
      {
        icon: FaUsers,
        title: "500+ Mutlu Müşteri",
        description: "Referanslarımız konuşuyor",
      },
      {
        icon: FaTools,
        title: "7/24 Teknik Servis",
        description: "Her zaman yanınızdayız",
      },
    ],
  },
  en: {
    badges: [
      {
        icon: FaClock,
        title: "15 Years Experience",
        description: "Trusted name in the industry",
      },
      {
        icon: FaUsers,
        title: "500+ Happy Customers",
        description: "Our references speak",
      },
      {
        icon: FaTools,
        title: "24/7 Technical Service",
        description: "Always by your side",
      },
    ],
  },
};

export default function TrustBadges({ lang }: TrustBadgesProps) {
  const t = content[lang];

  return (
    <section className="py-16 bg-gray-light">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                <badge.icon className="text-3xl text-primary-blue" />
              </div>
              <h3 className="text-xl font-semibold text-primary-navy mb-2">
                {badge.title}
              </h3>
              <p className="text-gray-600">{badge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}