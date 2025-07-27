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
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-[#1e3a5f] via-[#2563eb] to-[#1e40af]">
      {/* Real Ocean Wave Background with white foam */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 800">
          {/* Deep ocean base */}
          <rect width="1440" height="800" fill="url(#oceanDepthGradient)" />
          
          <defs>
            <linearGradient id="oceanDepthGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a"/>
              <stop offset="30%" stopColor="#1e40af"/>
              <stop offset="60%" stopColor="#2563eb"/>
              <stop offset="100%" stopColor="#3b82f6"/>
            </linearGradient>
            
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8"/>
              <stop offset="50%" stopColor="#e0f2fe" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.4"/>
            </linearGradient>
            
            <linearGradient id="foamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9"/>
              <stop offset="100%" stopColor="#f8fafc" stopOpacity="0.7"/>
            </linearGradient>
          </defs>
          
          {/* Main wave layers */}
          <path
            d="M0,400 C360,280 480,520 720,400 C960,280 1080,520 1440,400 L1440,800 L0,800 Z"
            fill="url(#waveGradient)"
          >
            <animate
              attributeName="d"
              values="M0,400 C360,280 480,520 720,400 C960,280 1080,520 1440,400 L1440,800 L0,800 Z;
                      M0,420 C360,300 480,540 720,420 C960,300 1080,540 1440,420 L1440,800 L0,800 Z;
                      M0,400 C360,280 480,520 720,400 C960,280 1080,520 1440,400 L1440,800 L0,800 Z"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
          
          {/* Secondary wave */}
          <path
            d="M0,500 C240,380 600,620 960,500 C1200,380 1320,620 1440,500 L1440,800 L0,800 Z"
            fill="url(#foamGradient)"
          >
            <animate
              attributeName="d"
              values="M0,500 C240,380 600,620 960,500 C1200,380 1320,620 1440,500 L1440,800 L0,800 Z;
                      M0,520 C240,400 600,640 960,520 C1200,400 1320,640 1440,520 L1440,800 L0,800 Z;
                      M0,500 C240,380 600,620 960,500 C1200,380 1320,620 1440,500 L1440,800 L0,800 Z"
              dur="12s"
              repeatCount="indefinite"
            />
          </path>
          
          {/* Foam detail */}
          <path
            d="M0,600 C180,500 300,700 480,600 C660,500 780,700 960,600 C1140,500 1260,700 1440,600 L1440,800 L0,800 Z"
            fill="#ffffff"
            fillOpacity="0.3"
          >
            <animate
              attributeName="d"
              values="M0,600 C180,500 300,700 480,600 C660,500 780,700 960,600 C1140,500 1260,700 1440,600 L1440,800 L0,800 Z;
                      M0,620 C180,520 300,720 480,620 C660,520 780,720 960,620 C1140,520 1260,720 1440,620 L1440,800 L0,800 Z;
                      M0,600 C180,500 300,700 480,600 C660,500 780,700 960,600 C1140,500 1260,700 1440,600 L1440,800 L0,800 Z"
              dur="6s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
        {/* Sol Sütun - Yacht Image with Waves */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative w-full lg:w-1/2 h-[50vh] lg:h-screen order-2 lg:order-1 overflow-hidden"
        >
          {/* Yacht Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/yat1.jpg"
              alt="Luxury Yacht in Ocean"
              fill
              sizes="50vw"
              className="object-cover object-center"
              priority
            />
          </div>
          
          {/* Yacht overlay with wave cut */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/20 lg:to-white/40" />
          
          {/* Wave cut effect for desktop */}
          <div className="hidden lg:block absolute right-0 top-0 h-full w-32">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path
                d="M0,0 Q50,25 100,0 L100,100 Q50,75 0,100 Z"
                fill="rgba(255,255,255,0.9)"
              />
            </svg>
          </div>
        </motion.div>

        {/* Sağ Sütun - Content Area */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-2 py-16 lg:py-0"
        >
          {/* White content background */}
          <div className="absolute inset-0 bg-white/95 lg:bg-white/90" />
          
          {/* Content */}
          <div className="relative z-10 px-8 sm:px-12 lg:px-16 xl:px-24 max-w-2xl lg:max-w-xl text-center lg:text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-[#1e3a5f] leading-tight mb-8 tracking-tight"
            >
              {t.title}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-base lg:text-lg xl:text-xl text-gray-700 leading-relaxed mb-10 font-light"
            >
              {t.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <Link 
                href={t.link}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white transition-all duration-300 font-medium tracking-wide text-lg"
              >
                {t.cta}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}