"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ProductsSectionProps {
  lang: "tr" | "en";
}

const content = {
  tr: {
    title: "Premium Marin Klima Sistemleri",
    subtitle: "Her yat için ideal klima çözümü",
    products: [
      {
        name: "VRF Sistemler",
        description: "Büyük yatlar için merkezi klima çözümü. Maksimum enerji verimliliği ve sessiz çalışma.",
        link: "İncele",
      },
      {
        name: "Chiller Sistemler",
        description: "Su soğutmalı sistem ile üstün performans. Mega yatlar için ideal çözüm.",
        link: "İncele",
      },
      {
        name: "Monoblok Sistemler",
        description: "Kompakt tasarım, kolay montaj. Orta boy yatlar için pratik çözüm.",
        link: "İncele",
      },
    ],
  },
  en: {
    title: "Premium Marine Air Conditioning Systems",
    subtitle: "The ideal air conditioning solution for every yacht",
    products: [
      {
        name: "VRF Systems",
        description: "Central air conditioning solution for large yachts. Maximum energy efficiency and quiet operation.",
        link: "Explore",
      },
      {
        name: "Chiller Systems",
        description: "Superior performance with water-cooled system. Ideal solution for mega yachts.",
        link: "Explore",
      },
      {
        name: "Monoblock Systems",
        description: "Compact design, easy installation. Practical solution for medium-sized yachts.",
        link: "Explore",
      },
    ],
  },
};

export default function ProductsSection({ lang }: ProductsSectionProps) {
  const t = content[lang];

  return (
    <section className="section-padding bg-gray-light">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-navy mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link
                  href={`/${lang}/urunlerimiz#${['vrf', 'chiller', 'monoblock'][index]}`}
                  className="btn btn-outline group"
                >
                  {product.link}
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}