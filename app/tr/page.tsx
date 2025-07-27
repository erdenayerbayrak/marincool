import { Metadata } from "next";
import Script from "next/script";

// Components
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ProductsSection";
import WhyMarincool from "@/components/home/WhyMarincool";

// Structured Data for Homepage
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Marincool",
  "url": "https://marincool.com",
  "logo": "https://marincool.com/images/marincool-logo.png",
  "description": "Türkiye'nin lider marin klima sistemleri uzmanı. VRF, Chiller ve Monoblok klima çözümleri.",
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
  "foundingDate": "2008",
  "numberOfEmployees": "15-50",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "36.7666666",
      "longitude": "28.7777777"
    },
    "geoRadius": "500000"
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
    }
  ]
};

export default function HomePage() {
  return (
    <>
      {/* Structured Data */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
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
      
      {/* Hero Section */}
      <HeroSection lang="tr" />

      {/* About Section */}
      <AboutSection lang="tr" />

      {/* Services Section */}
      <ServicesSection lang="tr" />

      {/* Why Marincool */}
      <WhyMarincool lang="tr" />
    </>
  );
}