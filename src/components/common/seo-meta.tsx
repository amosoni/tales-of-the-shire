import Head from 'next/head';

interface SEOMetaProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'recipe' | 'character' | 'decoration';
}

export default function SEOMeta({ 
  title, 
  description, 
  keywords = '', 
  image = '/og-image.jpg',
  url = '',
  type = 'website'
}: SEOMetaProps) {
  const fullTitle = `${title} - Tales of the Shire Guide`;
  const fullUrl = url ? `https://talesoftheshire.com${url}` : 'https://talesoftheshire.com';

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={`Tales of the Shire, Lord of the Rings, hobbit, recipes, characters, decorations, ${keywords}`} />
      <meta name="author" content="Tales of the Shire Guide" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Tales of the Shire Guide" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#16a34a" />
      <link rel="canonical" href={fullUrl} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Tales of the Shire Guide",
            "description": "Complete guide for The Lord of the Rings: Tales of the Shire game",
            "url": "https://talesoftheshire.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://talesoftheshire.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
    </Head>
  );
} 