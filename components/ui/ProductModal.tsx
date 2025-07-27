"use client";

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
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Don't block page scroll - let it remain scrollable
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!product || !isOpen) return null;

  const Icon = product.icon;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-50 duration-200">
        {/* Header */}
        <div className={`px-6 py-4 bg-gradient-to-r ${product.color} text-white flex items-center justify-between`}>
          <div className="flex items-center">
            <Icon className="text-2xl mr-3" />
            <div>
              <h3 className="text-xl font-bold">{product.name}</h3>
              <p className="text-sm opacity-90">{product.idealFor}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white">
            <FaTimes className="text-lg" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              {product.fullDescription}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Features */}
              <div>
                <h4 className="text-lg font-bold text-primary-navy mb-4">Özellikler</h4>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheckCircle className="text-accent-green mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specs */}
              <div>
                <h4 className="text-lg font-bold text-primary-navy mb-4">Teknik Bilgiler</h4>
                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  {Object.entries(product.specifications).map(([key, value], index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="font-medium text-gray-700">
                        {key === 'capacity' ? 'Kapasite' : 
                         key === 'zones' ? 'Bölge Sayısı' :
                         key === 'efficiency' ? 'Verimlilik' :
                         key === 'warranty' ? 'Garanti' :
                         key === 'type' ? 'Tip' :
                         key === 'dimensions' ? 'Boyutlar' : key}:
                      </span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 p-3 bg-accent-green/10 rounded-lg">
                  <h5 className="font-medium text-primary-navy mb-1 text-sm">İdeal Kullanım</h5>
                  <p className="text-gray-700 text-sm">{product.idealFor}</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-4">
                {product.name} hakkında bilgi almak için iletişime geçin.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a 
                  href="https://wa.me/905515085085" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center px-6 py-2 bg-accent-green text-white font-medium rounded-lg hover:bg-green-600 transition-colors"
                >
                  WhatsApp'tan Bilgi Al
                </a>
                <button 
                  onClick={onClose}
                  className="inline-flex items-center justify-center px-6 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Kapat
                </button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}