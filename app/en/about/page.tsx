"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Script from "next/script";
import { FaCheckCircle, FaUsers, FaCertificate, FaTrophy, FaShip, FaTools } from "react-icons/fa";
// import { WavyBackground } from "@/components/ui/wavy-background"; // TEMP: Vercel deployment test için devre dışı

// Structured Data for About Page (English)
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Marincool",
  "legalName": "Marincool Marine Air Conditioning Systems",
  "url": "https://marincool.com",
  "logo": "https://marincool.com/images/marincool-logo.png",
  "description": "Turkey's leading marine air conditioning systems expert. 15 years of experience with VRF, Chiller and Monoblock climate solutions.",
  "foundingDate": "2008",
  "founder": {
    "@type": "Person",
    "name": "Marincool Founder"
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
    "https://www.instagram.com/marincool.com.tr/"
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
  "award": "Turkey Marine Climate Leader"
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
      "name": "Home",
      "item": "https://marincool.com/en"
    },
    {
      "@type": "ListItem", 
      "position": 2,
      "name": "About",
      "item": "https://marincool.com/en/about"
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
      
      {/* Hero Section - TEMP: WavyBackground devre dışı (Vercel deployment test) */}
      <div className="h-[50vh] min-h-[400px] bg-primary-navy flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-white"
        >
          <h1 className="heading-1 mb-6">Turkey&apos;s Leading Marine Air Conditioning Systems Expert</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            As Marincool, we offer special marine air conditioning systems solutions to yacht owners and 
            shipowners with our deep experience in the maritime industry.
          </p>
        </motion.div>
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
              <h2 className="heading-2 text-primary-navy mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                As Marincool, we offer special marine air conditioning systems solutions to yacht owners and 
                shipowners with our deep experience gained in the maritime industry. Our Muğla-based company 
                is a trusted name in the sector, with its signature on the most prestigious yachts of the Turkey.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                By combining our expertise in yacht air conditioning with state-of-the-art VRF marine air conditioning, 
                Chiller marine air conditioning and Monoblock air conditioning systems, we produce ideal air conditioning 
                solutions for boats of all sizes.
              </p>
              <p className="text-lg text-gray-600">
                In order to raise our customers&apos; comfort at sea to the highest level, we continuously improve ourselves 
                and bring world-standard marine air conditioning technologies together with yacht owners in Turkey.
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
                alt="Marincool Company"
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
              <h3 className="text-2xl font-semibold text-primary-navy mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide yacht owners with a unique comfort experience by offering innovative and sustainable 
                marine air conditioning solutions in the maritime industry. To continue to be a pioneer in the 
                sector with our quality service approach and expert staff.
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
              <h3 className="text-2xl font-semibold text-primary-navy mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To maintain its leading position in the field of marine air conditioning systems in Turkey and 
                the Aegean-Mediterranean region, and to raise customer satisfaction to the highest level with world-class service quality.
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
            <h2 className="heading-2 text-primary-navy mb-4">Why Marincool?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We make a difference with our experience in the sector and quality service approach
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Engineering Team",
                description: "Specialized, certified engineers and technical personnel",
                icon: FaUsers,
              },
              {
                title: "Original Spare Parts Guarantee",
                description: "Original parts guarantee as authorized distributor of world brands",
                icon: FaCertificate,
              },
              {
                title: "Energy Efficiency Focused Solutions",
                description: "System designs that provide maximum efficiency with minimum energy consumption",
                icon: FaCheckCircle,
              },
              {
                title: "Fast Response Guarantee",
                description: "24/7 emergency response service and fast solution-oriented approach",
                icon: FaTools,
              },
              {
                title: "Competitive Pricing Policy",
                description: "Transparent pricing policy that offers quality service at the most affordable prices",
                icon: FaTrophy,
              },
              {
                title: "Comprehensive After-Sales Service",
                description: "Complete service package from installation to maintenance, from training to support",
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
            <h2 className="heading-2 text-primary-navy mb-4">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We aim for excellence in every project with our experienced and expert staff
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
                alt="Marincool Team"
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
              <h3 className="text-2xl font-semibold text-primary-navy mb-6">Our Professional Team</h3>
              <p className="text-lg text-gray-600 mb-6">
                The Marincool team consists of engineers, technical personnel and sales consultants 
                specialized in marine air conditioning systems. Our team, which keeps itself up to date 
                with continuous training and development programs, aims to provide the highest quality 
                service to our customers.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <FaCheckCircle className="text-accent-green" />
                  <span>Certified engineering staff</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaCheckCircle className="text-accent-green" />
                  <span>Experienced technical personnel</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaCheckCircle className="text-accent-green" />
                  <span>Continuous training programs</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaCheckCircle className="text-accent-green" />
                  <span>Customer-oriented service approach</span>
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
              Experience the Marincool Difference
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let us be your reliable solution partner for your yacht&apos;s air conditioning systems with our 15 years of experience and expert staff.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/905555555555" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary text-lg"
              >
                Contact via WhatsApp
              </a>
              <a href="/en/contact" className="btn btn-secondary text-lg">
                Contact Information
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}