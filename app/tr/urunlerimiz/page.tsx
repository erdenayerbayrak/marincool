"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaCheckCircle, FaThermometerHalf, FaWind, FaTachometerAlt } from "react-icons/fa";

const products = [
  {
    id: "vrf",
    name: "VRF Marin Klima Sistemleri",
    shortDesc: "Büyük yatlar için merkezi klima çözümü",
    description: "Variable Refrigerant Flow (VRF) sistemleri, büyük yatlar için en verimli ve esnek klima çözümüdür. Merkezi kontrol ile birden fazla bölgeyi bağımsız olarak iklimlendirme imkanı sunar.",
    features: [
      "Maksimum enerji verimliliği (%30'a varan tasarruf)",
      "Sessiz çalışma (45 dB altı ses seviyesi)",
      "Bireysel bölge kontrolü",
      "Akıllı telefon uygulaması ile uzaktan kontrol",
      "Isıtma ve soğutma özelliği",
      "-15°C ile +50°C arasında çalışma",
    ],
    specifications: {
      capacity: "12 kW - 200 kW",
      zones: "4 - 64 bölge",
      efficiency: "COP 4.5 - 5.8",
      warranty: "5 yıl kompresör garantisi",
    },
    idealFor: "25 metre ve üzeri yatlar",
  },
  {
    id: "chiller",
    name: "Chiller Marin Klima Sistemleri",
    shortDesc: "Su soğutmalı sistem ile üstün performans",
    description: "Chiller sistemleri, su soğutmalı teknolojisi ile mega yatlar için ideal çözümdür. Deniz suyu ile soğutma yaparak maksimum verimlilik sağlar ve geniş alanlarda homojen iklimlendirme sunar.",
    features: [
      "Deniz suyu soğutmalı yüksek verimlilik",
      "Düşük elektrik tüketimi",
      "Merkezi kontrol sistemi",
      "Çok sessiz çalışma",
      "Uzun ömürlü ve dayanıklı",
      "Korozyon dirençli malzemeler",
    ],
    specifications: {
      capacity: "50 kW - 500 kW",
      type: "Su soğutmalı scroll kompresör",
      efficiency: "EER 3.8 - 4.5",
      warranty: "3 yıl tam garanti",
    },
    idealFor: "40 metre ve üzeri mega yatlar",
  },
  {
    id: "monoblok",
    name: "Monoblok Marin Klima Sistemleri",
    shortDesc: "Kompakt tasarım, kolay montaj",
    description: "Monoblok klimalar, tüm bileşenlerin tek ünitede toplandığı kompakt sistemlerdir. Orta boy yatlar için pratik ve ekonomik çözüm sunar. Kolay montaj ve bakım avantajı sağlar.",
    features: [
      "Kompakt ve hafif tasarım",
      "Kolay ve hızlı montaj",
      "Düşük bakım maliyeti",
      "Sessiz çalışma teknolojisi",
      "Enerji tasarruflu inverter teknoloji",
      "Otomatik nem alma özelliği",
    ],
    specifications: {
      capacity: "7 kW - 35 kW",
      dimensions: "Kompakt boyutlar",
      efficiency: "COP 3.5 - 4.2",
      warranty: "2 yıl garanti",
    },
    idealFor: "10-25 metre arası yatlar",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-navy to-primary-blue">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white"
          >
            <h1 className="heading-1 mb-6">Premium Marin Klima Sistemleri</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Yatınızın büyüklüğü ve ihtiyaçlarına özel, dünya standartlarında klima çözümleri sunuyoruz. 
              VRF, Chiller ve Monoblok sistemlerimizle denizde maksimum konfor garantisi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding">
        <div className="container">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`mb-20 ${index !== products.length - 1 ? "pb-20 border-b border-gray-200" : ""}`}
            >
              <div className="max-w-4xl mx-auto">
                {/* Content */}
                <div>
                  <h2 className="heading-2 text-primary-navy mb-4">{product.name}</h2>
                  <p className="text-lg text-gray-600 mb-6">{product.description}</p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-primary-navy mb-4">Özellikler</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <FaCheckCircle className="text-accent-green mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specifications */}
                  <div className="grid grid-cols-2 gap-4 mb-6 p-6 bg-gray-light rounded-lg">
                    <div>
                      <FaThermometerHalf className="text-primary-blue mb-2" />
                      <p className="text-sm text-gray-600">Kapasite</p>
                      <p className="font-semibold">{product.specifications.capacity}</p>
                    </div>
                    <div>
                      <FaTachometerAlt className="text-primary-blue mb-2" />
                      <p className="text-sm text-gray-600">Verimlilik</p>
                      <p className="font-semibold">{product.specifications.efficiency}</p>
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">İdeal Kullanım</p>
                      <p className="font-semibold text-primary-navy">{product.idealFor}</p>
                    </div>
                    <Link href="#teklif-form" className="btn btn-primary">
                      Teklif Al
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-navy">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 text-white mb-6">
              Yatınız İçin En Uygun Sistemi Seçmenize Yardımcı Olalım
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Uzman ekibimiz, yatınızın özelliklerini analiz ederek size özel klima çözümü sunar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/905555555555" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary text-lg"
              >
                WhatsApp&apos;tan Ulaşın
              </a>
              <Link href="/tr/iletisim" className="btn btn-secondary text-lg">
                İletişim Formu
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}