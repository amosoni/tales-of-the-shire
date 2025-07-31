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
    default: "Tales of the Shire Guide - Complete Hobbit Life Companion",
    template: "%s | Tales of the Shire Guide"
  },
  description: "Your complete companion for The Lord of the Rings: Tales of the Shire. Discover recipes, meet NPCs, explore decorations, and join our community. Master the art of hobbit life in Middle-earth.",
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
    "Community"
  ],
  authors: [{ name: "Tales of the Shire Guide Team" }],
  creator: "Tales of the Shire Guide",
  publisher: "Tales of the Shire Guide",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tales-of-the-shire-guide.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tales-of-the-shire-guide.vercel.app",
    title: "Tales of the Shire Guide - Complete Hobbit Life Companion",
    description: "Your complete companion for The Lord of the Rings: Tales of the Shire. Discover recipes, meet NPCs, explore decorations, and join our community.",
    siteName: "Tales of the Shire Guide",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tales of the Shire Guide - Hobbit Life Companion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tales of the Shire Guide - Complete Hobbit Life Companion",
    description: "Your complete companion for The Lord of the Rings: Tales of the Shire. Discover recipes, meet NPCs, explore decorations, and join our community.",
    images: ["/og-image.png"],
    creator: "@talesoftheshireguide",
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
    google: "your-google-verification-code",
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
