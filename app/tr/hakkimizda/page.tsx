"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Script from "next/script";
import { FaCheckCircle, FaUsers, FaCertificate, FaTrophy, FaShip, FaTools } from "react-icons/fa";
// import { WavyBackground } from "@/components/ui/wavy-background"; // MINIMAL TEST

// Structured Data for About Page
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Marincool",
  "legalName": "Marincool Marin Klima Sistemleri",
  "url": "https://marincool.com",
  "logo": "https://marincool.com/images/marincool-logo.png",
  "description": "Türkiye'nin lider marin klima sistemleri uzmanı. 15 yıllık deneyimle VRF, Chiller ve Monoblok klima çözümleri.",
  "foundingDate": "2008",
  "founder": {
    "@type": "Person",
    "name": "Marincool Kurucusu"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Merkez, Cengiz Topel Cd. No:82/A",
    "addressLocality": "Dalaman",
    "addressRegion": "Muğla",
    "postalCode": "48770",
    "addressCountry": "TR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+90-551-508-50-85",
    "contactType": "customer service",
    "areaServed": "TR",
    "availableLanguage": ["Turkish", "English"]
  },
  "sameAs": [
    "https://www.instagram.com/marincool.com.tr/",
    "https://www.facebook.com/marincoolmarinehvac/",
    "https://www.linkedin.com/company/marincool/",
    "https://x.com/MarincoolS",
    "https://www.youtube.com/@marincool"
  ],
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "minValue": 15,
    "maxValue": 50
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "36.7666666",
      "longitude": "28.7777777"
    },
    "geoRadius": "500000"
  },
  "knowsAbout": [
    "Marine Air Conditioning",
    "VRF Systems",
    "Chiller Systems",
    "Yacht Climate Control",
    "Boat Air Conditioning"
  ],
  "award": "Türkiye Marin Klima Líderi"
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://marincool.com",
  "name": "Marincool",
  "image": "https://marincool.com/images/marincool-logo.png",
  "telephone": "+90-551-508-50-85",
  "email": "info@marincool.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Merkez, Cengiz Topel Cd. No:82/A",
    "addressLocality": "Dalaman",
    "addressRegion": "Muğla",
    "postalCode": "48770",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "36.7666666",
    "longitude": "28.7777777"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "16:00"
    }
  ],
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
  "currenciesAccepted": "TRY"
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
      "name": "Hakkımızda",
      "item": "https://marincool.com/tr/hakkimizda"
    }
  ]
};

export default function AboutPage() {
  return (
    <>
      {/* Structured Data Scripts */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
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
      
      {/* Hero Section - MINIMAL TEST */}
      <div className="h-[50vh] min-h-[400px] bg-blue-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-6">Türkiye&apos;nin Lider Marin Klima Sistemleri Uzmanı</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Marincool olarak, denizcilik sektöründe edindiğimiz köklü deneyimle yat sahiplerine ve 
            armatörlere özel marin klima sistemleri çözümleri sunuyoruz.
          </p>
        </div>
      </div>

      {/* Company Story */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-2 text-primary-navy mb-6">Hikayemiz</h2>
              <p className="text-lg text-gray-600 mb-6">
                Marincool olarak, denizcilik sektöründe edindiğimiz köklü deneyimle yat sahiplerine ve 
                armatörlere özel marin klima sistemleri çözümleri sunuyoruz. Muğla merkezli firmamız, 
                Türkiye&apos;in en prestijli yatlarında imzası bulunan, sektörün güvenilir ismidir.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Yat kliması konusundaki uzmanlığımızı, son teknoloji VRF marin klima, Chiller marin klima 
                ve Monoblok klima sistemleriyle birleştirerek, her boyuttaki tekne için ideal iklimlendirme 
                çözümleri üretiyoruz.
              </p>
              <p className="text-lg text-gray-600">
                Müşterilerimizin deniz üzerindeki konforunu en üst seviyeye taşımak için sürekli kendimizi 
                geliştiriyor, dünya standartlarındaki marin klima teknolojilerini Türkiye&apos;deki yat sahipleriyle 
                buluşturuyoruz.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="/images/yat2.jpg"
                alt="Marincool Şirket"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-light">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="w-16 h-16 mb-6 bg-primary-blue/10 rounded-full flex items-center justify-center">
                <FaShip className="text-2xl text-primary-blue" />
              </div>
              <h3 className="text-2xl font-semibold text-primary-navy mb-4">Misyonumuz</h3>
              <p className="text-gray-600">
                Denizcilik sektöründe yenilikçi ve sürdürülebilir marin klima çözümleri sunarak, 
                yat sahiplerine benzersiz konfor deneyimi yaşatmak. Kaliteli hizmet anlayışımız ve 
                uzman kadromuzla sektörde öncü olmaya devam etmek.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="w-16 h-16 mb-6 bg-accent-green/10 rounded-full flex items-center justify-center">
                <FaTrophy className="text-2xl text-accent-green" />
              </div>
              <h3 className="text-2xl font-semibold text-primary-navy mb-4">Vizyonumuz</h3>
              <p className="text-gray-600">
                Türkiye ve Ege-Akdeniz bölgesinde marin klima sistemleri alanında lider konumunu 
                sürdürerek, dünya standartlarında hizmet kalitesiyle müşteri memnuniyetini 
                en üst seviyeye taşımak.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="relative section-padding bg-gray-light">
        {/* Background Yacht Image */}
        <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
          <Image
            src="/images/yat5.jpg"
            alt="Yacht Background"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 text-primary-navy mb-4">Neden Marincool?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sektördeki deneyimimiz ve kaliteli hizmet anlayışımızla fark yaratıyoruz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Uzman Mühendis Kadrosu",
                description: "Alanında uzman, sertifikalı mühendisler ve teknik personel",
                icon: FaUsers,
              },
              {
                title: "Orijinal Yedek Parça Garantisi",
                description: "Dünya markalarının yetkili distribütörü olarak orijinal parça garantisi",
                icon: FaCertificate,
              },
              {
                title: "Enerji Verimliliği Odaklı Çözümler",
                description: "En az enerji tüketimiyle maksimum verim sağlayan sistem tasarımları",
                icon: FaCheckCircle,
              },
              {
                title: "Hızlı Müdahale Garantisi",
                description: "7/24 acil müdahale hizmeti ve hızlı çözüm odaklı yaklaşım",
                icon: FaTools,
              },
              {
                title: "Rekabetçi Fiyat Politikası",
                description: "Kaliteli hizmeti en uygun fiyatlarla sunan şeffaf fiyat politikası",
                icon: FaTrophy,
              },
              {
                title: "Kapsamlı Satış Sonrası Hizmet",
                description: "Montajdan bakıma, eğitimden desteğe kadar tam hizmet paketi",
                icon: FaShip,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="w-12 h-12 mb-4 bg-primary-blue/10 rounded-full flex items-center justify-center">
                  <item.icon className="text-xl text-primary-blue" />
                </div>
                <h3 className="text-xl font-semibold text-primary-navy mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 text-primary-navy mb-4">Ekibimiz</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deneyimli ve uzman kadromuzla her projede mükemmeli hedefliyoruz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="/images/yat1.jpg"
                alt="Marincool Ekibi"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-primary-navy mb-6">Profesyonel Ekibimiz</h3>
              <p className="text-lg text-gray-600 mb-6">
                Marincool ekibi, marin klima sistemleri konusunda uzmanlaşmış mühendisler, 
                teknik personel ve satış danışmanlarından oluşmaktadır. Sürekli eğitim ve 
                gelişim programlarıyla kendilerini güncel tutan ekibimiz, müşterilerimize 
                en kaliteli hizmeti sunmayı hedefler.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <FaCheckCircle className="text-accent-green" />
                  <span>Sertifikalı mühendis kadrosu</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaCheckCircle className="text-accent-green" />
                  <span>Deneyimli teknik personel</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaCheckCircle className="text-accent-green" />
                  <span>Sürekli eğitim programları</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaCheckCircle className="text-accent-green" />
                  <span>Müşteri odaklı hizmet anlayışı</span>
                </li>
              </ul>
            </motion.div>
          </div>
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
              Marincool Farkını Deneyimleyin
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              15 yıllık deneyimimiz ve uzman kadromuzla yatınızın klima sistemleri için güvenilir çözüm ortağınız olalım.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/905555555555" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary text-lg"
              >
                WhatsApp&apos;tan İletişime Geçin
              </a>
              <a href="/tr/iletisim" className="btn btn-secondary text-lg">
                İletişim Bilgileri
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}