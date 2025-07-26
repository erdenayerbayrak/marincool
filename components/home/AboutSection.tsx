"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

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
    <section className="section-padding bg-white">
      <div className="container">
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
            <div className="bg-gradient-to-br from-primary-navy to-primary-blue rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <h3 className="text-3xl font-bold text-accent-green mb-2">15+</h3>
                  <p className="text-sm opacity-90">Yıllık Deneyim</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-accent-green mb-2">500+</h3>
                  <p className="text-sm opacity-90">Mutlu Müşteri</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-accent-green mb-2">1000+</h3>
                  <p className="text-sm opacity-90">Tamamlanan Proje</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-accent-green mb-2">7/24</h3>
                  <p className="text-sm opacity-90">Teknik Destek</p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <p className="text-sm text-center opacity-90">
                  {lang === "tr" 
                    ? "Bizimle çalıştığınızda, güvenilirlik, kalite ve mükemmel hizmetin bir araya geldiği bir deneyim yaşayacaksınız."
                    : "When you work with us, you will experience where reliability, quality and excellent service come together."
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