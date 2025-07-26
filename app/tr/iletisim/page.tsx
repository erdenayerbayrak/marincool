"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

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
            <h1 className="heading-1 mb-6">İletişim</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Yatınızın marin klima sistemleri konusunda uzman ekibimizle iletişime geçin. 
              Size en uygun çözümü sunmaya hazırız.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-2 text-primary-navy mb-8">İletişim Bilgileri</h2>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-xl text-primary-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-navy mb-1">Telefon</h3>
                    <p className="text-gray-600">+90 551 508 50 85</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-xl text-accent-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-navy mb-1">E-posta</h3>
                    <p className="text-gray-600">info@marincool.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-navy/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-xl text-primary-navy" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-navy mb-1">Adres</h3>
                    <p className="text-gray-600">
                      Merkez, Cengiz Topel Cd. No:82/A<br />
                      48770 Dalaman/Muğla<br />
                      Türkiye
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-xl text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-navy mb-1">Çalışma Saatleri</h3>
                    <p className="text-gray-600">Pazartesi - Cuma: 08:00 - 18:00</p>
                    <p className="text-gray-600">Cumartesi: 09:00 - 16:00</p>
                    <p className="text-gray-600">Acil Durum: 7/24</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-primary-navy mb-4">Sosyal Medya</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* WhatsApp Contact */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="heading-3 text-primary-navy mb-6">Hızlı İletişim</h2>
              
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-accent-green/10 rounded-full flex items-center justify-center">
                  <FaWhatsapp className="text-4xl text-accent-green" />
                </div>
                
                <h3 className="text-xl font-semibold text-primary-navy mb-4">
                  WhatsApp Üzerinden Anında Destek
                </h3>
                
                <p className="text-gray-600 mb-8">
                  Yatınızın klima sistemleri konusunda tüm sorularınız için uzman ekibimizle 
                  WhatsApp üzerinden anında iletişime geçin.
                </p>
                
                <a
                  href="https://wa.me/905515085085"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-lg px-8 py-4 mb-6"
                >
                  <FaWhatsapp className="mr-2" />
                  WhatsApp&apos;tan Ulaşın
                </a>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <strong>Hızlı Teklif:</strong> Yat özelliklerinizi paylaşın, anında teklif alın
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <strong>Teknik Destek:</strong> Arızalar ve bakım konularında anında yardım
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <strong>Ürün Bilgisi:</strong> Klima sistemleri hakkında detaylı bilgi
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <strong>Randevu:</strong> Keşif ve montaj randevusu planlaması
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
            <h2 className="heading-2 text-primary-navy mb-4">Konumumuz</h2>
            <p className="text-lg text-gray-600">
              Dalaman/Muğla&apos;da bulunan merkez ofisimizi ziyaret edebilirsiniz
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Harita buraya entegre edilecek</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}