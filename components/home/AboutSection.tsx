"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { Spotlight } from "@/components/ui/Spotlight";

interface AboutSectionProps {
  lang: "tr" | "en";
}

const content = {
  tr: {
    title: "Hakkımızda",
    subtitle: "Türkiye'nin Lider Marin Klima Sistemleri Uzmanı",
    description: "Marincool olarak, yılların verdiği deneyimle sizlere en iyi hizmeti sunmayı taahhüt ediyoruz. Müşteri memnuniyetini her zaman önceliğimiz olarak kabul ediyor ve her işimizi bu felsefeyle gerçekleştiriyoruz. Gelişmiş teknolojileri ve uzman kadromuzu bir araya getirerek, müşterilerimize kaliteli ürünler ve hizmetler sunmayı amaçlıyoruz.",
    highlights: [
      "Güvenilirlik, kalite ve mükemmel hizmet",
      "Sürekli gelişim ve yenilik odaklı yaklaşım", 
      "Uzman kadro ve gelişmiş teknoloji",
      "Müşteri memnuniyeti öncelikli hizmet anlayışı"
    ],
    cta: "Detaylı Bilgi",
    link: "/tr/hakkimizda"
  },
  en: {
    title: "About Us",
    subtitle: "Turkey's Leading Marine Air Conditioning Systems Expert",
    description: "As Marincool, we commit to providing you with the best service with years of experience. We always consider customer satisfaction as our priority and carry out all our work with this philosophy. By bringing together advanced technologies and our expert staff, we aim to provide quality products and services to our customers.",
    highlights: [
      "Reliability, quality and excellent service",
      "Continuous development and innovation-focused approach",
      "Expert staff and advanced technology", 
      "Customer satisfaction priority service approach"
    ],
    cta: "Learn More",
    link: "/en/about"
  },
};

export default function AboutSection({ lang }: AboutSectionProps) {
  const t = content[lang];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Yacht Image */}
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none">
        <Image
          src="/images/yat4.jpg"
          alt="Yacht Background"
          fill
          sizes="50vw"
          className="object-cover object-left"
        />
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <span className="text-accent-green font-semibold text-sm tracking-wide uppercase">
                {t.title}
              </span>
              <h2 className="heading-2 text-primary-navy mt-2 mb-6">{t.subtitle}</h2>
            </div>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t.description}
            </p>

            {/* Highlights */}
            <ul className="space-y-4 mb-8">
              {t.highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <FaCheckCircle className="text-accent-green mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{highlight}</span>
                </motion.li>
              ))}
            </ul>

            <Link 
              href={t.link}
              className="inline-flex items-center space-x-2 text-primary-blue hover:text-primary-navy font-semibold transition-colors group"
            >
              <span>{t.cta}</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/yat1.jpg"
                alt="Marincool Marine Services"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  {lang === "tr" ? "Profesyonel Marin Klima Çözümleri" : "Professional Marine Climate Solutions"}
                </h3>
                <p className="opacity-90">
                  {lang === "tr" 
                    ? "Yatınızın konforu için en kaliteli hizmeti sunuyoruz."
                    : "We provide the highest quality service for your yacht's comfort."
                  }
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}