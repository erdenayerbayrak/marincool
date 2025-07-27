"use client";

import Link from "next/link";
import Head from "next/head";
import { useState, useCallback, useMemo } from "react";
import { FaCheckCircle, FaThermometerHalf, FaWind, FaTachometerAlt, FaCog, FaShieldAlt } from "react-icons/fa";
import dynamic from "next/dynamic";

// Lazy load modal for better performance
const ProductModal = dynamic(() => import("@/components/ui/ProductModal"), {
  loading: () => <div className="fixed inset-0 bg-black/50 flex items-center justify-center"><div className="bg-white p-4 rounded-lg">Loading...</div></div>
});

const products = [
  {
    id: "vrf",
    name: "VRF Marine Air Conditioning System",
    shortDesc: "Central air conditioning solution for large yachts",
    fullDescription: "Variable Refrigerant Flow (VRF) systems play a critical role in keeping the interior spaces of ships at ideal temperatures and making sea voyages more comfortable in the maritime industry. As Marincool, we provide comprehensive services to the maritime sector with our expertise in VRF Marine Air Conditioning Systems.",
    features: [
      "Customized Design and Installation",
      "Maintenance and Repair Services",
      "Spare Parts Supply",
      "Training and Consultancy",
      "Energy Efficiency",
      "24/7 Technical Support"
    ],
    specifications: {
      capacity: "12 kW - 200 kW",
      zones: "4 - 64 zones",
      efficiency: "COP 4.5 - 5.8",
      warranty: "5 years compressor warranty",
    },
    idealFor: "Large Yachts",
    icon: FaThermometerHalf,
    color: "from-blue-500 to-blue-700"
  },
  {
    id: "chiller",
    name: "Chiller Marine Air Conditioning System",
    shortDesc: "Superior performance with water-cooled system",
    fullDescription: "Maritime transportation is of critical importance in providing safe and comfortable travel for people and cargo. The Chiller Marine Air Conditioning System comes into play. These systems, specially designed for the maritime sector, offer an excellent solution to keep the interior spaces of ships at ideal temperatures and optimize indoor air quality.",
    features: [
      "High Efficiency",
      "Modular Design",
      "Low Maintenance Requirement",
      "Digital Control",
      "Environmentally Friendly",
      "Seawater Cooled"
    ],
    specifications: {
      capacity: "50 kW - 500 kW",
      type: "Water-cooled scroll compressor",
      efficiency: "EER 3.8 - 4.5",
      warranty: "3 years full warranty",
    },
    idealFor: "Mega Yachts",
    icon: FaWind,
    color: "from-teal-500 to-teal-700"
  },
  {
    id: "monoblok",
    name: "Monoblock Marine Air Conditioning System",
    shortDesc: "Compact design, easy installation",
    fullDescription: "The maritime industry needs to heat and cool ship interiors comfortably. The Monoblock Marine Air Conditioning System is an air conditioning solution specially designed to meet this need. This system provides energy efficiency while cooling or heating ship interiors quickly and effectively.",
    features: [
      "Compact Design",
      "Easy Installation",
      "High Efficiency",
      "Digital Control",
      "Low Maintenance Requirement",
      "Energy Saving"
    ],
    specifications: {
      capacity: "7 kW - 35 kW",
      dimensions: "Compact dimensions",
      efficiency: "COP 3.5 - 4.2",
      warranty: "2 years warranty",
    },
    idealFor: "Medium Yachts",
    icon: FaCog,
    color: "from-green-500 to-green-700"
  },
  {
    id: "multi",
    name: "Multi Marine Air Conditioning System",
    shortDesc: "Multi-zone control and comfort",
    fullDescription: "Maritime transportation requires efficient heating and cooling of interior spaces, as well as ensuring the comfort of passengers and ship personnel. The Multi Marine Air Conditioning System is a system designed to meet these needs, where multi-climate control and efficiency are highlighted.",
    features: [
      "Multi-Zone Control",
      "High Energy Efficiency",
      "Flexibility and Customization",
      "Remote Control",
      "Low Maintenance Requirement",
      "Advanced Technology"
    ],
    specifications: {
      capacity: "15 kW - 150 kW",
      zones: "2 - 32 zones",
      efficiency: "COP 4.0 - 5.5",
      warranty: "3 years warranty",
    },
    idealFor: "Large Yachts",
    icon: FaTachometerAlt,
    color: "from-purple-500 to-purple-700"
  },
  {
    id: "split",
    name: "Split Marine Air Conditioning System",
    shortDesc: "Flexible design with fast air conditioning",
    fullDescription: "The maritime industry needs to heat and cool ship interiors comfortably. The Split Marine Air Conditioning System is an air conditioning solution specially designed to meet this need. This system provides energy efficiency while cooling or heating ship interiors quickly and effectively.",
    features: [
      "Compact and Flexible Design",
      "User-Friendly Control",
      "High Energy Efficiency",
      "Easy Maintenance and Repair",
      "Environmentally Friendly",
      "Fast Installation"
    ],
    specifications: {
      capacity: "5 kW - 25 kW",
      type: "Indoor-Outdoor unit separation",
      efficiency: "COP 3.8 - 4.8",
      warranty: "2 years warranty",
    },
    idealFor: "Small Yachts",
    icon: FaShieldAlt,
    color: "from-orange-500 to-orange-700"
  },
];

// Structured Data for Products Page
const productsPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Premium Marine Air Conditioning Systems",
  "description": "World-class air conditioning solutions tailored to your yacht's size and needs.",
  "url": "https://marincool.com/en/products",
  "mainEntity": {
    "@type": "ItemList",
    "numberOfItems": 5,
    "itemListElement": [
      {
        "@type": "Product",
        "position": 1,
        "name": "VRF Marine Air Conditioning Systems",
        "url": "https://marincool.com/en/products#vrf"
      },
      {
        "@type": "Product",
        "position": 2,
        "name": "Chiller Marine Air Conditioning Systems", 
        "url": "https://marincool.com/en/products#chiller"
      },
      {
        "@type": "Product",
        "position": 3,
        "name": "Monoblock Marine Air Conditioning Systems",
        "url": "https://marincool.com/en/products#monoblok"
      },
      {
        "@type": "Product",
        "position": 4,
        "name": "Multi Marine Air Conditioning System",
        "url": "https://marincool.com/en/products#multi"
      },
      {
        "@type": "Product",
        "position": 5,
        "name": "Split Marine Air Conditioning System",
        "url": "https://marincool.com/en/products#split"
      }
    ]
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
      "name": "Products",
      "item": "https://marincool.com/en/products"
    }
  ]
};

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Memoized callbacks for better performance
  const openModal = useCallback((product: typeof products[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  }, []);

  // Memoize products data to prevent re-renders
  const memoizedProducts = useMemo(() => products, []);

  return (
    <>
      <Head>
        {/* Enhanced Meta Tags */}
        <title>Premium Marine Air Conditioning Systems - VRF, Chiller, Monoblock | Marincool Turkey</title>
        <meta name="description" content="Professional marine air conditioning solutions for yachts: VRF, Chiller and Monoblock systems. Expert installation and warranty service in Turkey." />
        <meta name="keywords" content="marine air conditioning, yacht climate systems, VRF marine AC, Chiller yacht AC, Monoblock marine, boat air conditioning, Turkey marine AC" />
        <link rel="canonical" href="https://marincool.com/en/products" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Premium Marine Air Conditioning Systems | Marincool" />
        <meta property="og:description" content="From large yachts to small boats, specialized climate solutions for every size. Professional marine AC systems." />
        <meta property="og:url" content="https://marincool.com/en/products" />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productsPageSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema)
          }}
        />
      </Head>
      
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-navy to-primary-blue">
        <div className="container">
          <div className="text-center text-white">
            <h1 className="heading-1 mb-6">Premium Marine Air Conditioning Systems</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              We offer world-class air conditioning solutions tailored to your yacht&apos;s size and needs. 
              Maximum comfort guarantee at sea with our VRF, Chiller and Monoblock systems.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {memoizedProducts.map((product, index) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden border border-gray-100"
              >
                
                {/* Card Header */}
                <div className={`h-32 bg-gradient-to-r ${product.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="relative h-full flex items-center justify-center">
                    <product.icon className="text-4xl text-white" />
                  </div>
                  <div className="absolute bottom-4 left-6 text-white">
                    <h3 className="text-lg font-bold">{product.name}</h3>
                    <p className="text-sm opacity-90">{product.shortDesc}</p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium">
                      {product.idealFor}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {product.fullDescription.substring(0, 150)}...
                  </p>

                  {/* Quick Features */}
                  <div className="space-y-2 mb-6">
                    {product.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <FaCheckCircle className="text-accent-green mr-2 text-xs" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => openModal(product)}
                    className="inline-flex items-center justify-center w-full py-3 px-4 bg-primary-navy text-white font-semibold rounded-xl hover:bg-primary-blue transition-colors duration-200 transform-gpu"
                  >
                    Detailed Information
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Product Modal */}
      <ProductModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
    </>
  );
}