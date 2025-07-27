"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface ServicesSectionProps {
  lang: "tr" | "en";
}

const content = {
  tr: {
    sectionTitle: "HİZMETLERİMİZ",
    sectionSubtitle: "Denizde konfor ve güvenilirlik için profesyonel çözümler",
    services: [
      {
        id: "purchase",
        title: "MARİNE KLİMA",
        subtitle: "SATIN AL",
        image: "/images/yat2.jpg",
        link: "/tr/urunlerimiz"
      },
      {
        id: "renovation",
        title: "MARİNE KLİMA",
        subtitle: "YENİLEME",
        image: "/images/yat3.jpg",
        link: "/tr/urunlerimiz"
      },
      {
        id: "service",
        title: "MARİNE KLİMA",
        subtitle: "SERVİS",
        image: "/images/yat4.jpg",
        link: "/tr/urunlerimiz"
      }
    ]
  },
  en: {
    sectionTitle: "OUR SERVICES",
    sectionSubtitle: "Professional solutions for comfort and reliability at sea",
    services: [
      {
        id: "purchase",
        title: "MARINE AC",
        subtitle: "PURCHASE",
        image: "/images/yat2.jpg",
        link: "/en/products"
      },
      {
        id: "renovation",
        title: "MARINE AC",
        subtitle: "RENOVATION",
        image: "/images/yat3.jpg",
        link: "/en/products"
      },
      {
        id: "service",
        title: "MARINE AC",
        subtitle: "SERVICE",
        image: "/images/yat4.jpg",
        link: "/en/products"
      }
    ]
  }
};

export default function ServicesSection({ lang }: ServicesSectionProps) {
  const t = content[lang];

  return (
    <section className="relative bg-primary-navy pb-0 overflow-hidden">

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {t.services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Link
                href={service.link}
                className="group relative block h-80 md:h-96 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Background Image */}
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                  <Image
                    src={service.image}
                    alt={`${service.title} ${service.subtitle}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 z-10" />
                
                {/* Content */}
                <div className="relative z-20 flex h-full flex-col justify-center items-center text-center p-8">
                  <div className="text-white">
                    <div className="text-2xl lg:text-3xl font-bold uppercase tracking-wider leading-tight mb-2">
                      {service.title}
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold uppercase tracking-wider">
                      {service.subtitle}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="relative block w-full h-auto">
          <path 
            fill="#ffffff"
            fillOpacity="1" 
            d="M0,160L48,181.3C96,203,192,245,288,240C384,235,480,181,576,149.3C672,117,768,107,864,128C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>
    </section>
  );
}