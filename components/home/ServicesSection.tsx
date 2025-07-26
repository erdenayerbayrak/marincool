"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaProjectDiagram, FaTools, FaWrench, FaTruck, FaUserTie } from "react-icons/fa";

interface ServicesSectionProps {
  lang: "tr" | "en";
}

const content = {
  tr: {
    title: "Hizmetlerimiz",
    subtitle: "Keşiften montaja, bakımdan desteğe kadar yanınızdayız",
    services: [
      {
        icon: FaProjectDiagram,
        title: "Danışmanlık",
        description: "Mekanik tesisat uygulamalarında, mevcut sistemlerin kontrollerinin yapılarak iyileştirme için gerekli proje danışmanlık desteğinin sağlıyoruz.",
        link: "Detaylı Bilgi →",
      },
      {
        icon: FaTruck,
        title: "Cihaz Temini",
        description: "Projelendirme hizmeti sonrası sizin için en uygun cihaz seçimi ve fiyatlandırılması",
        link: "Detaylı Bilgi →",
      },
      {
        icon: FaProjectDiagram,
        title: "Projelendirme",
        description: "Klimanın takılacağı mekâna en uygun kapasitenin seçimi, teknik gerekliliklerin ve tüketici beklentilerinin tam anlamıyla anlaşılması için ücretsiz",
        link: "Detaylı Bilgi →",
      },
      {
        icon: FaUserTie,
        title: "Keşif",
        description: "Konusunda uzman mühendis kadromuzla güncel hesap ve tasarım yazılımları desteğiyle mekanik tesisat projelerini müşterilerimizin ihtiyaçlarına göre",
        link: "Detaylı Bilgi →",
      },
      {
        icon: FaTools,
        title: "Montaj",
        description: "Uzman kadromuzla siz değerli müşterilerimizin cihaz montajlarının yapılması",
        link: "Detaylı Bilgi →",
      },
      {
        icon: FaWrench,
        title: "Destek",
        description: "Montaj sonrası düzenli bakım ve arızalarınıza hızlı çözüm üretmek için varız.",
        link: "Detaylı Bilgi →",
      },
    ],
  },
  en: {
    title: "Services",
    subtitle: "We are with you from exploration to installation, from maintenance to support",
    services: [
      {
        icon: FaProjectDiagram,
        title: "Survey & Design",
        description: "Custom air conditioning system design and energy efficiency analysis for your yacht",
        link: "Learn More →",
      },
      {
        icon: FaTools,
        title: "Professional Installation",
        description: "Fast and guaranteed air conditioning installation service with our expert team",
        link: "Learn More →",
      },
      {
        icon: FaWrench,
        title: "Maintenance & Service",
        description: "Periodic maintenance and 24/7 emergency response support",
        link: "Learn More →",
      },
    ],
  },
};

export default function ServicesSection({ lang }: ServicesSectionProps) {
  const t = content[lang];

  return (
    <section className="section-padding">
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
          {t.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 mb-6 bg-gray-light rounded-full flex items-center justify-center">
                <service.icon className="text-2xl text-primary-blue" />
              </div>
              <h3 className="text-xl font-semibold text-primary-navy mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                href={`/${lang}/hizmetlerimiz`}
                className="text-primary-blue hover:text-primary-navy font-medium transition-colors"
              >
                {service.link}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}