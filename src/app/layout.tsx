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
  title: "Hobbit Life Guide - The Lord of the Rings: Tales of the Shire",
  description: "Complete guide for The Lord of the Rings: Tales of the Shire players, including recipes, NPC guides, decoration inspiration and more.",
  keywords: "Lord of the Rings, Tales of the Shire, Hobbit, Guide, Recipes, NPC, Decoration",
  authors: [{ name: "Hobbit Life Guide" }],
  openGraph: {
    title: "Hobbit Life Guide",
    description: "Complete guide for The Lord of the Rings: Tales of the Shire",
    type: "website",
  },
  other: {
    'language': 'en-US',
    'content-language': 'en-US',
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
