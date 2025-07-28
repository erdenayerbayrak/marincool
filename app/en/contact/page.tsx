"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Script from "next/script";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock, FaInstagram, FaFacebook, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";
// Temporarily disabled for Vercel deployment testing
// import { WavyBackground } from "@/components/ui/wavy-background";

// Structured Data for Contact Page (English)
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://marincool.com",
  "name": "Marincool",
  "alternateName": "Marincool Marine Air Conditioning Systems",
  "description": "Muğla's leading marine air conditioning service. Professional yacht climate solutions with VRF, Chiller and Monoblock systems.",
  "image": "https://marincool.com/images/marincool-logo.png",
  "telephone": "+90-551-508-50-85",
  "email": "info@marincool.com",
  "url": "https://marincool.com",
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
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  },
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
  "currenciesAccepted": "TRY",
  "areaServed": [
    {
      "@type": "City",
      "name": "Muğla"
    },
    {
      "@type": "City", 
      "name": "Bodrum"
    },
    {
      "@type": "City",
      "name": "Marmaris"
    },
    {
      "@type": "City",
      "name": "Göcek"
    }
  ],
  "hasMap": "https://maps.google.com/?q=36.7666666,28.7777777"
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact - Marincool",
  "description": "Contact our expert team for marine air conditioning systems. WhatsApp us immediately or call.",
  "url": "https://marincool.com/en/contact",
  "mainEntity": {
    "@type": "ContactPoint",
    "telephone": "+90-551-508-50-85",
    "contactType": "customer service",
    "areaServed": "TR",
    "availableLanguage": ["Turkish", "English"],
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "description": "Emergency 24/7 available"
    }
  }
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
      "name": "Contact",
      "item": "https://marincool.com/en/contact"
    }
  ]
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    // Here you would normally send the form data to your backend
    console.log("Form submitted:", formData);
    setStatus("success");
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
      setStatus("idle");
    }, 3000);
  };

  return (
    <>
      {/* Structured Data Scripts */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
      <Script
        id="contact-page-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema)
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
          <h1 className="heading-1 mb-6">Contact</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Contact our expert team about your yacht&apos;s marine air conditioning systems. 
            We are ready to offer you the most suitable solution.
          </p>
        </motion.div>
      </div>

      {/* Contact Info & Form Section */}
      <section className="relative pb-8 sm:pb-12 md:pb-16 lg:pb-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/yat3.jpg"
            alt="Yacht Background"
            fill
            sizes="100vw"
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-white/70"></div>
        </div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-2 text-primary-navy mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-xl text-primary-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-navy mb-1">Phone</h3>
                    <p className="text-gray-600">+90 551 508 50 85</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-xl text-accent-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-navy mb-1">Email</h3>
                    <p className="text-gray-600">info@marincool.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-navy/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-xl text-primary-navy" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-navy mb-1">Address</h3>
                    <p className="text-gray-600">
                      Merkez, Cengiz Topel Cd. No:82/A<br />
                      48770 Dalaman/Muğla<br />
                      Turkey
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-xl text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-navy mb-1">Working Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 08:00 - 18:00</p>
                    <p className="text-gray-600">Saturday: 09:00 - 16:00</p>
                    <p className="text-gray-600">Emergency: 24/7</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-primary-navy mb-4">Social Media</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://x.com/MarincoolS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/marincool/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.facebook.com/marincoolmarinehvac/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://www.instagram.com/marincool.com.tr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.youtube.com/@marincool"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="heading-3 text-primary-navy mb-6">Quick Contact</h2>
              
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-accent-green/10 rounded-full flex items-center justify-center">
                  <FaWhatsapp className="text-4xl text-accent-green" />
                </div>
                
                <h3 className="text-xl font-semibold text-primary-navy mb-4">
                  Instant Support via WhatsApp
                </h3>
                
                <p className="text-gray-600 mb-8">
                  Contact our expert team instantly via WhatsApp for all your questions about your yacht&apos;s air conditioning systems.
                </p>
                
                <a
                  href="https://wa.me/905515085085"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-lg px-8 py-4 mb-6"
                >
                  <FaWhatsapp className="mr-2" />
                  Contact via WhatsApp
                </a>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <strong>Quick Quote:</strong> Share your yacht specifications, get instant quote
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <strong>Technical Support:</strong> Instant help for breakdowns and maintenance
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <strong>Product Info:</strong> Detailed information about air conditioning systems
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <strong>Appointment:</strong> Survey and installation appointment planning
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="heading-2 text-primary-navy mb-4">Our Location</h2>
            <p className="text-lg text-gray-600">
              You can visit our headquarters located in Dalaman/Muğla
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3181.123456789!2d28.777777777777!3d36.7666666666666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c0497c8c9f8b23%3A0x12345!2sCengiz%20Topel%20Cd.%20No%3A82%2FA%2C%2048770%20Dalaman%2FMu%C4%9Fla!5e0!3m2!1sen!2str!4v1234567890123!5m2!1sen!2str"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-96"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}