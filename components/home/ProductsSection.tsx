"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo } from "react";

interface ProductsSectionProps {
  lang: "tr" | "en";
}

const content = {
  tr: {
    title: "Premium Marin Klima Sistemleri",
    subtitle: "Her yat için ideal klima çözümü",
    products: [
      {
        id: "vrf",
        name: "VRF Marin Klima",
        description: "Büyük yatlar için merkezi klima çözümü. Maksimum enerji verimliliği ve sessiz çalışma.",
        features: ["Enerji Verimliliği", "Modüler Tasarım", "Sessiz Çalışma"],
        ideal: "Büyük Yatlar",
        link: "İncele",
      },
      {
        id: "chiller",
        name: "Chiller Marin Klima",
        description: "Su soğutmalı sistem ile üstün performans. Mega yatlar için ideal çözüm.",
        features: ["Yüksek Verimlilik", "Düşük Bakım", "Dijital Kontrol"],
        ideal: "Mega Yatlar",
        link: "İncele",
      },
      {
        id: "monoblok",
        name: "Monoblok Marin Klima",
        description: "Kompakt tasarım, kolay montaj. Orta boy yatlar için pratik çözüm.",
        features: ["Kompakt Tasarım", "Kolay Kurulum", "Düşük Bakım"],
        ideal: "Orta Yatlar",
        link: "İncele",
      },
      {
        id: "multi",
        name: "Multi Marin Klima",
        description: "Çoklu bölge kontrolü ve konfor. Farklı sıcaklık gereksinimlerini karşılar.",
        features: ["Çoklu Kontrol", "Esneklik", "Uzaktan İzleme"],
        ideal: "Büyük Yatlar",
        link: "İncele",
      },
      {
        id: "split",
        name: "Split Marin Klima",
        description: "Esnek tasarım ile hızlı ve etkili iklimlendirme çözümü.",
        features: ["Esnek Montaj", "Enerji Tasarrufu", "Çevre Dostu"],
        ideal: "Küçük Yatlar",
        link: "İncele",
      },
    ],
  },
  en: {
    title: "Premium Marine Air Conditioning Systems",
    subtitle: "The ideal air conditioning solution for every yacht",
    products: [
      {
        id: "vrf",
        name: "VRF Marine AC",
        description: "Central air conditioning solution for large yachts. Maximum energy efficiency and quiet operation.",
        features: ["Energy Efficiency", "Modular Design", "Quiet Operation"],
        ideal: "Large Yachts",
        link: "Explore",
      },
      {
        id: "chiller",
        name: "Chiller Marine AC",
        description: "Superior performance with water-cooled system. Ideal solution for mega yachts.",
        features: ["High Efficiency", "Low Maintenance", "Digital Control"],
        ideal: "Mega Yachts",
        link: "Explore",
      },
      {
        id: "monoblock",
        name: "Monoblock Marine AC",
        description: "Compact design, easy installation. Practical solution for medium-sized yachts.",
        features: ["Compact Design", "Easy Installation", "Low Maintenance"],
        ideal: "Medium Yachts",
        link: "Explore",
      },
      {
        id: "multi",
        name: "Multi Marine AC",
        description: "Multi-zone control and comfort. Meets different temperature requirements.",
        features: ["Multi Control", "Flexibility", "Remote Monitoring"],
        ideal: "Large Yachts",
        link: "Explore",
      },
      {
        id: "split",
        name: "Split Marine AC",
        description: "Fast and effective climate control solution with flexible design.",
        features: ["Flexible Installation", "Energy Saving", "Eco-Friendly"],
        ideal: "Small Yachts",
        link: "Explore",
      },
    ],
  },
};

export default function ProductsSection({ lang }: ProductsSectionProps) {
  const t = useMemo(() => content[lang], [lang]);

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {t.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true, margin: "50px" }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 will-change-transform"
            >
              
              
              {/* Card Content */}
              <div className="relative p-6 h-full flex flex-col">
                {/* Header */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-navy to-primary-blue rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 transform-gpu">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-primary-navy mb-2 group-hover:text-primary-blue transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {product.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-4 flex-grow">
                  <div className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs text-gray-700">
                        <div className="w-1.5 h-1.5 bg-accent-green rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ideal For Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                    {product.ideal}
                  </span>
                </div>

                {/* CTA Button */}
                <Link
                  href={`/${lang}/${lang === 'tr' ? 'urunlerimiz' : 'products'}#${product.id}`}
                  className="inline-flex items-center justify-center w-full py-2.5 px-4 bg-primary-navy text-white text-sm font-semibold rounded-xl hover:bg-primary-blue transition-colors duration-200 transform-gpu"
                >
                  {product.link}
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200 transform-gpu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}