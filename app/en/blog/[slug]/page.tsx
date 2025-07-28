import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPostsEN } from '@/lib/blog-data';

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  // TEMP: Vercel deployment test için blog static generation devre dışı
  // Bu değişiklik, Vercel'e bu deploy için HİÇBİR blog sayfası oluşturmamasını söyler.
  return []; 
  
  /* ORIGINAL CODE (YORUMA ALINDI):
  return blogPostsEN.map((post) => ({
    slug: post.slug,
  }));
  */
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPostsEN.find((post) => post.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found | Marincool',
    };
  }

  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords.join(', '),
    openGraph: {
      title: post.seo.title,
      description: post.seo.description,
      url: `https://marincool.com/en/blog/${post.slug}`,
      siteName: "Marincool",
      locale: "en_US",
      type: "article",
      publishedTime: post.publishedAt,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo.title,
      description: post.seo.description,
    },
  };
}

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

export default function BlogPost({ params }: Props) {
  const post = blogPostsEN.find((post) => post.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = blogPostsEN
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(post.schema) }}
      />
      
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
            <Link href="/en" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/en/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-900">{post.title}</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${categoryColors[post.category]}`}>
                {categoryNames[post.category]}
              </span>
              <span className="text-gray-500">
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500">{post.readTime} min read</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none mb-12">
            <div 
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }}
              className="text-gray-800 leading-relaxed"
            />
          </article>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12 pb-8 border-b border-gray-200">
            <span className="text-gray-700 font-medium mr-2">Tags:</span>
            {post.tags.map((tag) => (
              <span key={tag} className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm transition-colors">
                #{tag}
              </span>
            ))}
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <article key={relatedPost.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[relatedPost.category]} mb-3 inline-block`}>
                      {categoryNames[relatedPost.category]}
                    </span>
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      <Link href={`/en/blog/${relatedPost.slug}`} className="hover:text-blue-600">
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                      {relatedPost.excerpt}
                    </p>
                    <Link 
                      href={`/en/blog/${relatedPost.slug}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Read More →
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* CTA Section */}
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Expert Support for Your Marine AC System
            </h2>
            <p className="text-blue-800 mb-6 max-w-2xl mx-auto">
              Get professional marine air conditioning services in Bodrum, Marmaris, Fethiye, 
              Göcek, Kaş, Antalya and Alanya regions from Marincool experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/en/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                href="/en/products"
                className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 px-8 py-3 rounded-lg font-medium transition-colors"
              >
                View Our Products
              </Link>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link 
              href="/en/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to All Blog Posts
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}