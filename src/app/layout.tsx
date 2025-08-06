import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: "Tales of the Shire Guide - Complete Hobbit Life & Gaming Companion",
    template: "%s | Tales of the Shire Guide"
  },
  description: "Your ultimate companion for The Lord of the Rings: Tales of the Shire game. Discover authentic hobbit recipes, meet beloved characters, create perfect decorations, and join our community. Master the art of hobbit life in Middle-earth with our comprehensive guide.",
  keywords: [
    "Lord of the Rings",
    "Tales of the Shire", 
    "Hobbit Guide",
    "Middle-earth",
    "Recipe Guide",
    "NPC Guide",
    "Decoration Guide",
    "Hobbit Life",
    "Gaming Guide",
    "Community",
    "Hobbit Recipes",
    "Shire Characters",
    "Hobbit Hole Decoration",
    "Tales of the Shire Game",
    "Hobbit Cooking",
    "Middle-earth Guide",
    "Shire Community",
    "Hobbit Life Simulator"
  ],
  authors: [{ name: "Tales of the Shire Guide Team" }],
  creator: "Tales of the Shire Guide",
  publisher: "Tales of the Shire Guide",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://talesoftheshire.online'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://talesoftheshire.online",
    title: "Tales of the Shire Guide - Complete Hobbit Life & Gaming Companion",
    description: "Your ultimate companion for The Lord of the Rings: Tales of the Shire game. Discover authentic hobbit recipes, meet beloved characters, create perfect decorations, and join our community.",
    siteName: "Tales of the Shire Guide",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tales of the Shire Guide - Complete Hobbit Life & Gaming Companion",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tales of the Shire Guide - Complete Hobbit Life & Gaming Companion",
    description: "Your ultimate companion for The Lord of the Rings: Tales of the Shire game. Discover authentic hobbit recipes, meet beloved characters, create perfect decorations, and join our community.",
    images: ["/og-image.png"],
    creator: "@talesoftheshireguide",
    site: "@talesoftheshireguide",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "G-0RM4QWR5KJ",
  },
  other: {
    'language': 'en-US',
    'content-language': 'en-US',
    'theme-color': '#16a34a',
    'color-scheme': 'light',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="language" content="en-US" />
        <meta httpEquiv="Content-Language" content="en-US" />
        <meta name="content-language" content="en-US" />
        <meta name="author" content="Tales of the Shire Guide Team" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="application-name" content="Tales of the Shire Guide" />
        <meta name="apple-mobile-web-app-title" content="Shire Guide" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#16a34a" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0RM4QWR5KJ"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0RM4QWR5KJ');
            `,
          }}
        />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Tales of the Shire Guide",
              "description": "Your ultimate companion for The Lord of the Rings: Tales of the Shire game. Discover authentic hobbit recipes, meet beloved characters, create perfect decorations, and join our community.",
              "url": "https://talesoftheshire.online",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://talesoftheshire.online/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Tales of the Shire Guide",
                "url": "https://talesoftheshire.online"
              },
              "sameAs": [
                "https://github.com/amosoni/tales-of-the-shire"
              ]
            })
          }}
        />
        
        {/* Additional Structured Data for AI */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GameGuide",
              "name": "Tales of the Shire Complete Guide",
              "description": "Comprehensive guide for The Lord of the Rings: Tales of the Shire game including recipes, NPCs, decorations, and community features.",
              "gameItem": {
                "@type": "VideoGame",
                "name": "The Lord of the Rings: Tales of the Shire",
                "genre": "Life Simulation",
                "platform": "PC, Console"
              },
              "about": [
                {
                  "@type": "Thing",
                  "name": "Hobbit Recipes",
                  "description": "Authentic Middle-earth cooking recipes"
                },
                {
                  "@type": "Thing", 
                  "name": "Shire Characters",
                  "description": "Detailed NPC guides and character information"
                },
                {
                  "@type": "Thing",
                  "name": "Hobbit Hole Decoration",
                  "description": "Decoration inspiration and crafting guides"
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
          <Header />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
