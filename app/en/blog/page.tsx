import { Metadata } from 'next';
import Link from 'next/link';
import { blogPostsEN } from '@/lib/blog-data';
import { seoContent } from '@/lib/static-content';

export const metadata: Metadata = {
  title: "Marine AC Blog | Yacht Climate Systems | Marincool Muğla",
  description: "Expert articles on marine air conditioning systems, yacht climate, VRF, Chiller, Monoblock, Multi AC solutions. Bodrum, Marmaris, Fethiye, Göcek, Kaş, Antalya, Alanya maritime climate guide.",
  keywords: "marine AC blog, yacht climate articles, maritime air conditioning systems, VRF marine AC, Chiller marine AC, Monoblock AC, Multi AC, Bodrum yacht climate, Marmaris marine AC, Fethiye climate systems, Göcek yacht service, Kaş maritime, Antalya marine AC, Alanya yacht climate, Muğla AC expert, maritime comfort solutions",
  openGraph: {
    title: "Marine AC Blog | Maritime Climate Systems Guide",
    description: "Expert articles on marine air conditioning systems. VRF, Chiller, Monoblock, Multi AC solutions and maritime climate guide.",
    url: "https://marincool.com/en/blog",
    siteName: "Marincool",
    locale: "en_US",
    type: "website",
  },
};

const categoryNames = {
  chiller: 'Chiller Systems',
  monoblok: 'Monoblock Systems', 
  multi: 'Multi Systems',
  vrf: 'VRF Systems'
};

const categoryColors = {
  chiller: 'bg-blue-100 text-blue-800',
  monoblok: 'bg-green-100 text-green-800',
  multi: 'bg-purple-100 text-purple-800',
  vrf: 'bg-orange-100 text-orange-800'
};

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Marincool Marine AC Blog",
    "description": "Expert articles on marine air conditioning systems, yacht climate and maritime climate solutions",
    "url": "https://marincool.com/en/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Marincool",
      "logo": {
        "@type": "ImageObject",
        "url": "https://marincool.com/images/logo.png"
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": blogPostsEN.map((post, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://marincool.com/en/blog/${post.slug}`
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Marine AC Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert articles on maritime climate systems, yacht air conditioning and marine AC technologies. 
              Comfort solutions for Bodrum, Marmaris, Fethiye, Göcek, Kaş, Antalya, Alanya regions.
            </p>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="text-gray-600 font-medium">Categories:</span>
            {Object.entries(categoryNames).map(([key, name]) => (
              <span
                key={key}
                className={`px-4 py-2 rounded-full text-sm font-medium ${categoryColors[key as keyof typeof categoryColors]}`}
              >
                {name}
              </span>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPostsEN.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[post.category]}`}>
                      {categoryNames[post.category]}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime} min read</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    <Link 
                      href={`/en/blog/${post.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-gray-500 text-sm">
                      {new Date(post.publishedAt).toLocaleDateString('en-US')}
                    </span>
                    <Link 
                      href={`/en/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* SEO Content Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Marine Air Conditioning Systems Guide
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Chiller Marine AC</h3>
                  <p className="text-gray-600 mb-4">
                    High-capacity maritime climate solutions with chiller marine air conditioning systems 
                    in Bodrum, Muğla, Marmaris and Fethiye regions. Energy efficiency and powerful performance.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">VRF Marine AC</h3>
                  <p className="text-gray-600">
                    Variable refrigerant flow technology with VRF systems in Göcek, Kaş, Antalya and 
                    Alanya marinas. Multi-zone control and maximum energy savings.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Monoblock Marine AC</h3>
                  <p className="text-gray-600 mb-4">
                    Easy installation with compact design. Ideal solution for medium-sized yachts and boats. 
                    Widespread usage areas in Turkish Riviera marinas.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Multi Marine AC</h3>
                  <p className="text-gray-600">
                    Professional solutions for mega yachts and large vessels with multi-zone climate control. 
                    Flexible design and advanced technology features.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Marincool Expert Service Areas
                </h3>
                <p className="text-blue-800">
                  <strong>Muğla:</strong> Bodrum, Marmaris, Fethiye, Göcek, Datça, Dalaman<br/>
                  <strong>Antalya:</strong> Antalya, Alanya, Kaş, Kemer, Side, Manavgat<br/>
                  <strong>Special Services:</strong> Yacht air conditioning, boat AC service, marine AC maintenance, 
                  emergency AC repair, AC installation, system design
                </p>
              </div>
            </div>
          </div>

          {/* SEO Content Area */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-white p-8">
              <div className="prose prose-lg max-w-none">
                <div 
                  style={{ 
                    lineHeight: '1.6',
                    fontSize: '16px',
                    color: '#374151',
                    whiteSpace: 'pre-line'
                  }}
                >
                  {seoContent.en}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}