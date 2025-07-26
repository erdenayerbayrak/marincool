"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaProjectDiagram, FaTools, FaWrench, FaUserTie, FaTruck, FaPhoneAlt } from "react-icons/fa";

const services = [
  {
    id: "survey",
    title: "Survey and Design",
    icon: FaProjectDiagram,
    shortDesc: "Custom air conditioning system design for your yacht",
    description: "We provide optimum air conditioning design services by analyzing your yacht's technical specifications and usage areas in detail. Our expert engineers determine which of the VRF marine air conditioning or Chiller marine air conditioning systems is ideal for your yacht and produce solutions that will maximize energy efficiency.",
    process: [
      "Yacht technical analysis and measurement",
      "Heat load calculation",
      "System design and engineering",
      "3D visualization and presentation",
      "Cost analysis and quotation preparation",
    ],
    duration: "3-5 business days",
    cost: "Free preliminary survey",
  },
  {
    id: "consulting",
    title: "Expert Consulting",
    icon: FaUserTie,
    shortDesc: "Professional guidance with 15 years of experience",
    description: "With our experience in the maritime industry, we provide professional consulting services to yacht owners on marine air conditioning systems. We help you determine the most suitable solution for your yacht's specifications and budget among monoblock air conditioning, multi-system or split air conditioning alternatives.",
    process: [
      "Needs analysis and evaluation",
      "System alternatives presentation",
      "Cost-benefit analysis",
      "Energy efficiency optimization",
      "Maintenance planning recommendations",
    ],
    duration: "Immediate",
    cost: "Free consultation",
  },
  {
    id: "installation",
    title: "Professional Installation",
    icon: FaTools,
    shortDesc: "Guaranteed installation with certified team",
    description: "Our certified technical team performs air conditioning installation procedures to international standards. We install without damaging your yacht's electrical and mechanical infrastructure, with minimal intervention to provide maximum efficiency. As the preferred company in Antalya marine air conditioning installation, we provide workmanship warranty.",
    process: [
      "Pre-installation preparation and planning",
      "Electrical and mechanical infrastructure preparation",
      "System installation and connections",
      "Test run and calibration",
      "Delivery and usage training",
    ],
    duration: "1-5 days (depending on system)",
    cost: "Project-based pricing",
  },
  {
    id: "equipment",
    title: "Original Equipment Supply",
    icon: FaTruck,
    shortDesc: "Authorized distributor of world brands",
    description: "As an authorized distributor of world leading brands, we supply original and guaranteed marine air conditioning systems. With VRF, Chiller and Monoblock air conditioning systems in our stock, we quickly meet your orders and offer competitive price advantages.",
    process: [
      "Need determination and product selection",
      "Stock control and supply planning",
      "Order confirmation and production tracking",
      "Logistics and transportation organization",
      "Delivery and control procedures",
    ],
    duration: "7-21 days",
    cost: "Competitive price guarantee",
  },
  {
    id: "maintenance",
    title: "24/7 Technical Support and Maintenance",
    icon: FaWrench,
    shortDesc: "Uninterrupted service guarantee",
    description: "With our boat air conditioning service, we ensure that every moment you spend at sea is comfortable. With our periodic maintenance programs and 24/7 emergency response team, we provide uninterrupted support in Antalya and Alanya yacht service areas. We are with you with rapid intervention in case of breakdown, spare parts supply and expert repair services.",
    process: [
      "Periodic maintenance programs",
      "Preventive maintenance applications",
      "24/7 emergency response service",
      "Fault diagnosis and repair",
      "Spare parts supply and replacement",
    ],
    duration: "24/7 uninterrupted",
    cost: "Maintenance package options",
  },
];

export default function ServicesPage() {
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
            <h1 className="heading-1 mb-6">360° Service Approach</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              With our 360-degree service approach at Marincool, we manage your yacht&apos;s marine air conditioning 
              systems needs from start to finish. We are with you at every stage from exploration to installation, 
              from maintenance to support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gray-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 text-primary-navy mb-4">Why Marincool Services?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              With our 15 years of industry experience and expert team, we provide the highest quality service to yacht owners.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 mb-4 bg-primary-blue/10 rounded-full flex items-center justify-center">
                  <service.icon className="text-2xl text-primary-blue" />
                </div>
                <h3 className="text-xl font-semibold text-primary-navy mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.shortDesc}</p>
                <Link 
                  href={`#${service.id}`}
                  className="text-primary-blue hover:text-primary-navy font-medium transition-colors"
                >
                  View Details →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="section-padding">
        <div className="container">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`mb-20 ${index !== services.length - 1 ? "pb-20 border-b border-gray-200" : ""}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Content */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="text-xl text-primary-blue" />
                    </div>
                    <h2 className="heading-3 text-primary-navy">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>

                  {/* Process */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-primary-navy mb-4">Process Steps</h3>
                    <ul className="space-y-2">
                      {service.process.map((step, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-accent-green text-white text-sm rounded-full flex items-center justify-center font-medium">
                            {i + 1}
                          </span>
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Info Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-light rounded-lg">
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="font-semibold text-primary-navy">{service.duration}</p>
                    </div>
                    <div className="p-4 bg-gray-light rounded-lg">
                      <p className="text-sm text-gray-600">Cost</p>
                      <p className="font-semibold text-primary-navy">{service.cost}</p>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={`/images/service-${service.id}.jpg`}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
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
              Get Professional Service for Your Yacht
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our expert team and benefit from our comprehensive service package for your yacht&apos;s air conditioning systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/905555555555" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary text-lg"
              >
                <FaPhoneAlt className="mr-2" />
                Call Now
              </a>
              <Link href="/en/contact" className="btn btn-secondary text-lg">
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}