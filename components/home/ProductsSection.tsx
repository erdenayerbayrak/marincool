"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ServicesSectionProps {
  lang: "tr" | "en";
}

const content = {
  tr: {
    services: [
      {
        id: "purchase",
        title: "MARİNE KLİMA",
        subtitle: "SATIN AL",
        image: "/images/yat2.jpg",
        link: "/tr/urunlerimiz"
      },
      {
        id: "renovation",
        title: "MARİNE KLİMA",
        subtitle: "YENİLEME",
        image: "/images/yat3.jpg",
        link: "/tr/urunlerimiz"
      },
      {
        id: "service",
        title: "MARİNE KLİMA",
        subtitle: "SERVİS",
        image: "/images/yat4.jpg",
        link: "/tr/urunlerimiz"
      }
    ]
  },
  en: {
    services: [
      {
        id: "purchase",
        title: "MARINE AC",
        subtitle: "PURCHASE",
        image: "/images/yat2.jpg",
        link: "/en/products"
      },
      {
        id: "renovation",
        title: "MARINE AC",
        subtitle: "RENOVATION",
        image: "/images/yat3.jpg",
        link: "/en/products"
      },
      {
        id: "service",
        title: "MARINE AC",
        subtitle: "SERVICE",
        image: "/images/yat4.jpg",
        link: "/en/products"
      }
    ]
  }
};

export default function ServicesSection({ lang }: ServicesSectionProps) {
  const t = content[lang];

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-[#f8f8f8] to-white">
      {/* Blue Sea Wave Background */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 800">
          <defs>
            <linearGradient id="deepOceanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.15"/>
              <stop offset="50%" stopColor="#1e40af" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0.25"/>
            </linearGradient>
          </defs>
          
          <path
            d="M0,150 C360,280 520,50 720,150 C920,250 1080,80 1440,150 L1440,800 L0,800 Z"
            fill="url(#deepOceanGradient)"
          >
            <animate
              attributeName="d"
              values="M0,150 C360,280 520,50 720,150 C920,250 1080,80 1440,150 L1440,800 L0,800 Z;
                      M0,180 C360,80 520,320 720,180 C920,80 1080,320 1440,180 L1440,800 L0,800 Z;
                      M0,150 C360,280 520,50 720,150 C920,250 1080,80 1440,150 L1440,800 L0,800 Z"
              dur="25s"
              repeatCount="indefinite"
            />
          </path>
          
          <path
            d="M0,300 C480,420 640,200 960,300 C1280,400 1360,250 1440,300 L1440,800 L0,800 Z"
            fill="#1d4ed8"
            fillOpacity="0.12"
          >
            <animate
              attributeName="d"
              values="M0,300 C480,420 640,200 960,300 C1280,400 1360,250 1440,300 L1440,800 L0,800 Z;
                      M0,330 C480,230 640,480 960,330 C1280,230 1360,480 1440,330 L1440,800 L0,800 Z;
                      M0,300 C480,420 640,200 960,300 C1280,400 1360,250 1440,300 L1440,800 L0,800 Z"
              dur="18s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {t.services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Link
                href={service.link}
                className="group relative block h-96 overflow-hidden rounded-lg border border-gray-300/60 hover:border-gray-400/80 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative z-10 flex h-full flex-col justify-center items-center text-center p-8">
                  <div className="text-white">
                    <div className="text-2xl lg:text-3xl font-bold uppercase tracking-wider leading-tight">
                      {service.title}
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold uppercase tracking-wider">
                      {service.subtitle}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}