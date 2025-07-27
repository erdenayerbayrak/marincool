import { Metadata } from 'next';
import Link from 'next/link';
import { blogPostsTR } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: "Marin Klima Blog | Denizcilik İklim Sistemleri | Marincool Muğla",
  description: "Marin klima sistemleri, yat kliması, VRF, Chiller, Monoblok, Multi klima çözümleri hakkında uzman makaleler. Bodrum, Marmaris, Fethiye, Göcek, Kaş, Antalya, Alanya denizcilik iklim rehberi.",
  keywords: "marin klima blog, yat kliması makaleleri, denizcilik iklim sistemleri, VRF marin klima, Chiller marin klima, Monoblok klima, Multi klima, Bodrum yat kliması, Marmaris marin klima, Fethiye klima sistemleri, Göcek yat servisi, Kaş denizcilik, Antalya marin klima, Alanya yat kliması, Muğla klima uzmanı, denizcilik konfor çözümleri",
  openGraph: {
    title: "Marin Klima Blog | Denizcilik İklim Sistemleri Rehberi",
    description: "Marin klima sistemleri hakkında uzman makaleler. VRF, Chiller, Monoblok, Multi klima çözümleri ve denizcilik iklim rehberi.",
    url: "https://marincool.com/tr/blog",
    siteName: "Marincool",
    locale: "tr_TR",
    type: "website",
  },
};

const categoryNames = {
  chiller: 'Chiller Sistemler',
  monoblok: 'Monoblok Sistemler', 
  multi: 'Multi Sistemler',
  vrf: 'VRF Sistemler'
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
    "name": "Marincool Marin Klima Blog",
    "description": "Marin klima sistemleri, yat kliması ve denizcilik iklim çözümleri hakkında uzman makaleler",
    "url": "https://marincool.com/tr/blog",
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
      "itemListElement": blogPostsTR.map((post, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://marincool.com/tr/blog/${post.slug}`
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
              Marin Klima Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Denizcilik iklim sistemleri, yat kliması ve marin klima teknolojileri hakkında uzman makaleler. 
              Bodrum, Marmaris, Fethiye, Göcek, Kaş, Antalya, Alanya bölgelerinde denizcilik konfor çözümleri.
            </p>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="text-gray-600 font-medium">Kategoriler:</span>
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
            {blogPostsTR.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[post.category]}`}>
                      {categoryNames[post.category]}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime} dk okuma</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    <Link 
                      href={`/tr/blog/${post.slug}`}
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
                      {new Date(post.publishedAt).toLocaleDateString('tr-TR')}
                    </span>
                    <Link 
                      href={`/tr/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                    >
                      Devamını Oku →
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
                Marin Klima Sistemleri Rehberi
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Chiller Marin Klima</h3>
                  <p className="text-gray-600 mb-4">
                    Bodrum, Muğla, Marmaris ve Fethiye bölgelerinde chiller marin klima sistemleri ile 
                    yüksek kapasiteli denizcilik iklim çözümleri. Enerji verimliliği ve güçlü performans.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">VRF Marin Klima</h3>
                  <p className="text-gray-600">
                    Göcek, Kaş, Antalya ve Alanya marinalarında VRF sistemler ile değişken soğutucu 
                    akış teknolojisi. Çoklu bölge kontrolü ve maksimum enerji tasarrufu.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Monoblok Marin Klima</h3>
                  <p className="text-gray-600 mb-4">
                    Kompakt tasarım ile kolay kurulum. Orta boy yatlar ve tekneler için ideal çözüm. 
                    Türk Rivierası marinalarında yaygın kullanım alanları.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Multi Marin Klima</h3>
                  <p className="text-gray-600">
                    Çoklu bölge iklim kontrolü ile mega yatlar ve büyük tekneler için profesyonel 
                    çözümler. Esnek tasarım ve gelişmiş teknoloji özellikleri.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Marincool Uzman Servis Bölgeleri
                </h3>
                <p className="text-blue-800">
                  <strong>Muğla:</strong> Bodrum, Marmaris, Fethiye, Göcek, Datça, Dalaman<br/>
                  <strong>Antalya:</strong> Antalya, Alanya, Kaş, Kemer, Side, Manavgat<br/>
                  <strong>Özel Hizmetler:</strong> Yat kliması, tekne klima servisi, marin klima bakımı, 
                  acil klima tamiri, klima montajı, sistem projelendirme
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}