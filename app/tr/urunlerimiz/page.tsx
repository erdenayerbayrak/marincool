"use client";

import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaThermometerHalf, FaWind, FaTachometerAlt, FaCog, FaShieldAlt } from "react-icons/fa";
import dynamic from "next/dynamic";
// Temporarily disabled for Vercel deployment testing
// import { WavyBackground } from "@/components/ui/wavy-background";

// Lazy load modal for better performance
const ProductModal = dynamic(() => import("@/components/ui/ProductModal"), {
  loading: () => <div className="fixed inset-0 bg-black/50 flex items-center justify-center"><div className="bg-white p-4 rounded-lg">Yükleniyor...</div></div>
});

const products = [
  {
    id: "multi-split",
    name: "Multi Split Marin Klima Sistemi",
    shortDesc: "Çoklu bölge kontrolü ile maksimum konfor",
    fullDescription: "Multi Split Marin Klima Sistemi, yatınızın farklı bölgelerini bağımsız olarak kontrol etmenizi sağlayan ileri teknoloji ürünüdür. Her kabin için ayrı sıcaklık kontrolü ile mükemmel konfor sağlar. Marincool olarak, Multi Split Marin Klima Sistemleri konusundaki uzmanlığımızla denizcilik sektörüne kapsamlı hizmetler sunuyoruz.",
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
    color: "from-blue-500 to-blue-700",
    image: "/images/multisplitmarineklima.png"
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
    color: "from-teal-500 to-teal-700",
    image: "/images/chillermarineklima.png"
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
    color: "from-green-500 to-green-700",
    image: "/images/monoblokmarineklima.png"
  },
  {
    id: "fancoil",
    name: "Fancoil Marin Klima Sistemi",
    shortDesc: "Kompakt tasarım ile etkili hava dağıtımı",
    fullDescription: "Fancoil Marin Klima Sistemi, yat iç mekanlarında ideal hava dağıtımı sağlayan kompakt ve verimli bir çözümdür. Düşük gürültü seviyesi ve yüksek performansıyla kabin konforunu maksimize eder. Marincool'un uzman ekibi tarafından denizcilik standartlarına uygun olarak tasarlanmıştır.",
    features: [
      "Kompakt Tasarım",
      "Düşük Gürültü Seviyesi",
      "Yüksek Hava Dağıtım Kapasitesi",
      "Kolay Montaj",
      "Enerji Verimli Motor",
      "Deniz Ortamına Dayanıklı"
    ],
    specifications: {
      capacity: "2 kW - 15 kW",
      airflow: "200 - 1500 m³/h",
      efficiency: "Yüksek verimlilik",
      warranty: "2 yıl garanti",
    },
    idealFor: "Tüm boyut yatlar",
    icon: FaTachometerAlt,
    color: "from-purple-500 to-purple-700",
    image: "/images/fancoilklima.png"
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
    color: "from-orange-500 to-orange-700",
    image: "/images/splitmarineklima.png"
  },
];

// Structured Data for Products Page
const productsPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Premium Marin Klima Sistemleri",
  "description": "Yatınızın büyüklüğü ve ihtiyaçlarına özel, dünya standartlarında klima çözümleri.",
  "url": "https://marincool.com/tr/urunlerimiz",
  "mainEntity": {
    "@type": "ItemList",
    "numberOfItems": 5,
    "itemListElement": [
      {
        "@type": "Product",
        "position": 1,
        "name": "Multi Split Marin Klima Sistemi",
        "url": "https://marincool.com/tr/urunlerimiz#multi-split"
      },
      {
        "@type": "Product",
        "position": 2,
        "name": "Chiller Marin Klima Sistemi", 
        "url": "https://marincool.com/tr/urunlerimiz#chiller"
      },
      {
        "@type": "Product",
        "position": 3,
        "name": "Monoblok Marin Klima Sistemi",
        "url": "https://marincool.com/tr/urunlerimiz#monoblok"
      },
      {
        "@type": "Product",
        "position": 4,
        "name": "Fancoil Marin Klima Sistemi",
        "url": "https://marincool.com/tr/urunlerimiz#fancoil"
      },
      {
        "@type": "Product",
        "position": 5,
        "name": "Split Marin Klima Sistemi",
        "url": "https://marincool.com/tr/urunlerimiz#split"
      }
    ]
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Ana Sayfa",
      "item": "https://marincool.com/tr"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Ürünlerimiz",
      "item": "https://marincool.com/tr/urunlerimiz"
    }
  ]
};

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Memoized callbacks for better performance
  const openModal = useCallback((product: typeof products[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  }, []);

  // Memoize products data to prevent re-renders
  const memoizedProducts = useMemo(() => products, []);

  return (
    <>
      {/* Structured Data Scripts */}
      <Script
        id="products-page-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productsPageSchema)
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      
      {/* Hero Section - Temporarily disabled WavyBackground for Vercel deployment testing */}
      <div className="bg-primary-navy h-[50vh] min-h-[400px] flex items-center justify-center">
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

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {memoizedProducts.map((product, index) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden border border-gray-100"
              >
                
                {/* Card Header with Product Image */}
                <div className="h-48 bg-white relative overflow-hidden border-b border-gray-100">
                  {product.image ? (
                    <div className="relative h-full flex items-center justify-center p-4">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={200}
                        height={150}
                        className="object-contain w-full h-full"
                        style={{ maxWidth: '100%', maxHeight: '100%' }}
                      />
                    </div>
                  ) : (
                    <div className={`h-full bg-gradient-to-r ${product.color} relative flex items-center justify-center`}>
                      <product.icon className="text-5xl text-white" />
                    </div>
                  )}
                </div>

                {/* Card Title Section */}
                <div className={`px-6 py-4 bg-gradient-to-r ${product.color}`}>
                  <h3 className="text-lg font-bold text-white">{product.name}</h3>
                  <p className="text-sm text-white/90">{product.shortDesc}</p>
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
                    className="inline-flex items-center justify-center w-full py-3 px-4 bg-primary-navy text-white font-semibold rounded-xl hover:bg-primary-blue transition-colors duration-200 transform-gpu"
                  >
                    Detaylı Bilgi
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
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
    </>
  );
}