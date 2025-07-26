"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaCheckCircle, FaThermometerHalf, FaWind, FaTachometerAlt } from "react-icons/fa";

const products = [
  {
    id: "vrf",
    name: "VRF Marine Air Conditioning Systems",
    shortDesc: "Central air conditioning solution for large yachts",
    description: "Variable Refrigerant Flow (VRF) systems are the most efficient and flexible air conditioning solution for large yachts. They offer the possibility to independently air-condition multiple zones with central control.",
    features: [
      "Maximum energy efficiency (up to 30% savings)",
      "Quiet operation (below 45 dB noise level)",
      "Individual zone control",
      "Remote control via smartphone app",
      "Heating and cooling feature",
      "Operation between -15°C to +50°C",
    ],
    specifications: {
      capacity: "12 kW - 200 kW",
      zones: "4 - 64 zones",
      efficiency: "COP 4.5 - 5.8",
      warranty: "5 years compressor warranty",
    },
    idealFor: "Large Yachts",
  },
  {
    id: "chiller",
    name: "Chiller Marine Air Conditioning Systems",
    shortDesc: "Superior performance with water-cooled system",
    description: "Chiller systems are the ideal solution for mega yachts with water-cooled technology. They provide maximum efficiency by cooling with seawater and offer homogeneous air conditioning in large areas.",
    features: [
      "High efficiency with seawater cooling",
      "Low electricity consumption",
      "Central control system",
      "Very quiet operation",
      "Long-lasting and durable",
      "Corrosion-resistant materials",
    ],
    specifications: {
      capacity: "50 kW - 500 kW",
      type: "Water-cooled scroll compressor",
      efficiency: "EER 3.8 - 4.5",
      warranty: "3 years full warranty",
    },
    idealFor: "Mega Yachts",
  },
  {
    id: "monoblock",
    name: "Monoblock Marine Air Conditioning Systems",
    shortDesc: "Compact design, easy installation",
    description: "Monoblock air conditioners are compact systems where all components are combined in a single unit. They offer a practical and economical solution for medium-sized yachts with easy installation and maintenance advantages.",
    features: [
      "Compact and lightweight design",
      "Easy and quick installation",
      "Low maintenance cost",
      "Quiet operation technology",
      "Energy-saving inverter technology",
      "Automatic dehumidification feature",
    ],
    specifications: {
      capacity: "7 kW - 35 kW",
      dimensions: "Compact dimensions",
      efficiency: "COP 3.5 - 4.2",
      warranty: "2 years warranty",
    },
    idealFor: "Medium Yachts",
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
            <h1 className="heading-1 mb-6">Premium Marine Air Conditioning Systems</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              We offer world-class air conditioning solutions tailored to your yacht&apos;s size and needs. 
              Maximum comfort guarantee at sea with our VRF, Chiller and Monoblock systems.
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
                    <h3 className="text-xl font-semibold text-primary-navy mb-4">Features</h3>
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
                      <p className="text-sm text-gray-600">Capacity</p>
                      <p className="font-semibold">{product.specifications.capacity}</p>
                    </div>
                    <div>
                      <FaTachometerAlt className="text-primary-blue mb-2" />
                      <p className="text-sm text-gray-600">Efficiency</p>
                      <p className="font-semibold">{product.specifications.efficiency}</p>
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Ideal For</p>
                      <p className="font-semibold text-primary-navy">{product.idealFor}</p>
                    </div>
                    <Link href="#quote-form" className="btn btn-primary">
                      Get Quote
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
              Let Us Help You Choose the Best System for Your Yacht
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our expert team analyzes your yacht&apos;s specifications and offers you a customized air conditioning solution.
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
              <Link href="/en/contact" className="btn btn-secondary text-lg">
                Contact Form
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}