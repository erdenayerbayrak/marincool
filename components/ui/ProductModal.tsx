"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import { useEffect } from "react";

interface Product {
  id: string;
  name: string;
  shortDesc: string;
  fullDescription: string;
  features: string[];
  specifications: { [key: string]: string };
  idealFor: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!product) return null;

  const Icon = product.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors"
            >
              <FaTimes className="text-gray-600" />
            </button>

            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[90vh]">
              {/* Header */}
              <div className={`p-8 bg-gradient-to-r ${product.color} text-white`}>
                <div className="flex items-center">
                  <Icon className="text-4xl mr-4" />
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
                    <p className="text-xl opacity-90">{product.shortDesc}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Description & Features */}
                  <div>
                    <h3 className="text-2xl font-semibold text-primary-navy mb-6">Sistem Özellikleri</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                      {product.fullDescription}
                    </p>

                    <h4 className="text-xl font-semibold text-primary-navy mb-6">Temel Özellikler</h4>
                    <ul className="space-y-4">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <FaCheckCircle className="text-accent-green mt-1 mr-3 flex-shrink-0 text-lg" />
                          <span className="text-gray-700 text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specifications */}
                  <div>
                    <h3 className="text-2xl font-semibold text-primary-navy mb-6">Teknik Özellikler</h3>
                    <div className="bg-gray-50 rounded-xl p-6 mb-8">
                      {Object.entries(product.specifications).map(([key, value], index) => (
                        <div key={index} className="flex justify-between py-3 border-b border-gray-200 last:border-b-0">
                          <span className="font-semibold text-gray-700 capitalize text-lg">
                            {key === 'capacity' ? 'Kapasite' : 
                             key === 'zones' ? 'Bölge Sayısı' :
                             key === 'efficiency' ? 'Verimlilik' :
                             key === 'warranty' ? 'Garanti' :
                             key === 'type' ? 'Tip' :
                             key === 'dimensions' ? 'Boyutlar' : key}:
                          </span>
                          <span className="text-gray-600 text-lg">{value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-accent-green/10 rounded-xl p-6">
                      <h4 className="font-semibold text-primary-navy mb-3 text-xl">İdeal Kullanım</h4>
                      <p className="text-gray-700 text-lg">{product.idealFor}</p>
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                  <p className="text-gray-600 mb-8 text-lg">
                    {product.name} hakkında daha fazla bilgi almak ve projeleriniz için teklif almak isterseniz bizimle iletişime geçin.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="https://wa.me/905515085085" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary text-lg px-8 py-4"
                    >
                      WhatsApp&apos;tan İletişime Geçin
                    </a>
                    <a href="/tr/iletisim" className="btn btn-outline text-lg px-8 py-4">
                      İletişim Bilgileri
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}