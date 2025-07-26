"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaCheckCircle, FaThermometerHalf, FaWind, FaTachometerAlt, FaCog, FaShieldAlt } from "react-icons/fa";
import { Spotlight } from "@/components/ui/Spotlight";
import ProductModal from "@/components/ui/ProductModal";

const products = [
  {
    id: "vrf",
    name: "VRF Marin Klima Sistemi",
    shortDesc: "Büyük yatlar için merkezi klima çözümü",
    fullDescription: "Denizcilik endüstrisinde VRF Marin Klima Sistemleri, gemilerin iç mekanlarını ideal sıcaklıkta tutmak ve deniz yolculuklarını daha konforlu hale getirmek için kritik bir rol oynar. Marincool olarak, VRF Marin Klima Sistemleri konusundaki uzmanlığımızla denizcilik sektörüne kapsamlı hizmetler sunuyoruz.",
    features: [
      "Özelleştirilmiş Tasarım ve Kurulum",
      "Bakım ve Onarım Hizmetleri",
      "Yedek Parça Temini",
      "Eğitim ve Danışmanlık",
      "Enerji Verimliliği",
      "7/24 Teknik Destek"
    ],
    specifications: {
      capacity: "12 kW - 200 kW",
      zones: "4 - 64 bölge",
      efficiency: "COP 4.5 - 5.8",
      warranty: "5 yıl kompresör garantisi",
    },
    idealFor: "Büyük yatlar",
    icon: FaThermometerHalf,
    color: "from-blue-500 to-blue-700"
  },
  {
    id: "chiller",
    name: "Chiller Marin Klima Sistemi",
    shortDesc: "Su soğutmalı sistem ile üstün performans",
    fullDescription: "Deniz taşımacılığı, insanlar ve yükler için güvenli ve konforlu bir seyahat sunma konusunda kritik bir öneme sahiptir. Chiller Marin Klima Sistemi devreye girer. Denizcilik sektörü için özel olarak tasarlanan bu sistemler, gemilerin iç mekanlarını ideal sıcaklıkta tutmak ve iç hava kalitesini optimize etmek için mükemmel bir çözüm sunar.",
    features: [
      "Yüksek Verimlilik",
      "Modüler Tasarım",
      "Düşük Bakım İhtiyacı",
      "Dijital Kontrol",
      "Çevre Dostu",
      "Deniz Suyu Soğutmalı"
    ],
    specifications: {
      capacity: "50 kW - 500 kW",
      type: "Su soğutmalı scroll kompresör",
      efficiency: "EER 3.8 - 4.5",
      warranty: "3 yıl tam garanti",
    },
    idealFor: "Mega yatlar",
    icon: FaWind,
    color: "from-teal-500 to-teal-700"
  },
  {
    id: "monoblok",
    name: "Monoblok Marin Klima Sistemi",
    shortDesc: "Kompakt tasarım, kolay montaj",
    fullDescription: "Denizcilik endüstrisi, gemi iç mekanlarının konforlu bir şekilde ısıtılması ve soğutulmasını sağlama ihtiyacı duyar. Monoblok Marin Klima Sistemi, bu ihtiyacı karşılamak için özel olarak tasarlanmış bir iklimlendirme çözümüdür. Bu sistem, gemi iç mekanlarını hızlı ve etkili bir şekilde soğuturken veya ısıtırken enerji verimliliği de sağlar.",
    features: [
      "Kompakt Tasarım",
      "Kolay Kurulum",
      "Yüksek Verimlilik",
      "Dijital Kontrol",
      "Düşük Bakım İhtiyacı",
      "Enerji Tasarrufu"
    ],
    specifications: {
      capacity: "7 kW - 35 kW",
      dimensions: "Kompakt boyutlar",
      efficiency: "COP 3.5 - 4.2",
      warranty: "2 yıl garanti",
    },
    idealFor: "Orta boy yatlar",
    icon: FaCog,
    color: "from-green-500 to-green-700"
  },
  {
    id: "multi",
    name: "Multi Marin Klima Sistemi",
    shortDesc: "Çoklu bölge kontrolü ve konfor",
    fullDescription: "Deniz taşımacılığı, yolcuların ve gemi personelinin konforunu sağlamanın yanı sıra, iç mekanların verimli bir şekilde ısıtılması ve soğutulmasını gerektirir. Multi Marin Klima Sistemi, bu ihtiyaçları karşılamak için tasarlanmış çoklu iklim kontrolünün ve verimliliğin öne çıktığı bir sistemdir.",
    features: [
      "Çoklu Bölge Kontrolü",
      "Yüksek Enerji Verimliliği",
      "Esneklik ve Özelleştirme",
      "Uzaktan Kontrol",
      "Düşük Bakım Gereksinimi",
      "İleri Teknoloji"
    ],
    specifications: {
      capacity: "15 kW - 150 kW",
      zones: "2 - 32 bölge",
      efficiency: "COP 4.0 - 5.5",
      warranty: "3 yıl garanti",
    },
    idealFor: "Büyük yatlar",
    icon: FaTachometerAlt,
    color: "from-purple-500 to-purple-700"
  },
  {
    id: "split",
    name: "Split Marin Klima Sistemi",
    shortDesc: "Esnek tasarım ile hızlı iklimlendirme",
    fullDescription: "Denizcilik endüstrisi, gemi iç mekanlarının konforlu bir şekilde ısıtılması ve soğutulmasını sağlama ihtiyacı duyar. Split Marin Klima Sistemi, bu ihtiyacı karşılamak için özel olarak tasarlanmış bir iklimlendirme çözümüdür. Bu sistem, gemi iç mekanlarını hızlı ve etkili bir şekilde soğuturken veya ısıtırken enerji verimliliği de sağlar.",
    features: [
      "Kompakt ve Esnek Tasarım",
      "Kullanıcı Dostu Kontrol",
      "Yüksek Enerji Verimliliği",
      "Kolay Bakım ve Onarım",
      "Çevre Dostu",
      "Hızlı Kurulum"
    ],
    specifications: {
      capacity: "5 kW - 25 kW",
      type: "İç-Dış ünite ayrımı",
      efficiency: "COP 3.8 - 4.8",
      warranty: "2 yıl garanti",
    },
    idealFor: "Küçük yatlar",
    icon: FaShieldAlt,
    color: "from-orange-500 to-orange-700"
  },
];

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen">
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
              Her boyut yat için ideal iklimlendirme sistemleri ile denizde maksimum konfor garantisi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                <Spotlight className="from-primary-blue/20 via-primary-navy/10 to-transparent" size={300} />
                
                {/* Card Header */}
                <div className={`h-32 bg-gradient-to-r ${product.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="relative h-full flex items-center justify-center">
                    <product.icon className="text-4xl text-white" />
                  </div>
                  <div className="absolute bottom-4 left-6 text-white">
                    <h3 className="text-lg font-bold">{product.name}</h3>
                    <p className="text-sm opacity-90">{product.shortDesc}</p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium">
                      {product.idealFor}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {product.fullDescription.substring(0, 150)}...
                  </p>

                  {/* Quick Features */}
                  <div className="space-y-2 mb-6">
                    {product.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <FaCheckCircle className="text-accent-green mr-2 text-xs" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => openModal(product)}
                    className="inline-flex items-center justify-center w-full py-3 px-4 bg-primary-navy text-white font-semibold rounded-xl hover:bg-primary-blue transition-all duration-300 group-hover:transform group-hover:scale-105"
                  >
                    Detaylı Bilgi
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Product Modal */}
      <ProductModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}