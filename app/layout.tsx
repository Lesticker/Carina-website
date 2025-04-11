import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CallBar from "@/components/call-bar"
import ScrollToTop from "@/components/scroll-to-top"
import CookieConsent from "@/components/cookie-consent"
import Script from 'next/script';

const inter = Inter({ subsets: ["latin", "latin-ext"] })

export const metadata: Metadata = {
  title: {
    default: "Carina - Producent Rynien i Systemów Rynnowych",
    template: "%s | Carina - Systemy Rynnowe",
  },
  description:
    "Producent wysokiej jakości systemów rynnowych, parapetów i sztachetek metalowych. Oferujemy produkty z miedzi, tytan-cynku i stali ocynkowanej. Działamy od 1986 roku.",
  keywords: [
    "systemy rynnowe",
    "rynny",
    "parapety",
    "sztachetki metalowe",
    "obróbki blacharskie",
    "Częstochowa",
    "producent rynien",
    "miedź",
    "tytan-cynk",
    "stal ocynkowana",
  ],
  authors: [{ name: "Carina" }],
  creator: "Carina",
  publisher: "Carina",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://www.carina.czest.pl"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  icons: [
    { rel: "icon", url: "/favicon.ico", sizes: "any" },
    { rel: "icon", url: "/favicon.png", type: "image/png" },
    { rel: "apple-touch-icon", url: "/apple-icon.png" },
  ],
  openGraph: {
    title: "Carina - Producent Rynien i Systemów Rynnowych",
    description:
      "Producent wysokiej jakości systemów rynnowych, parapetów i sztachetek metalowych. Oferujemy produkty z miedzi, tytan-cynku i stali ocynkowanej.",
    url: "https://www.carina.czest.pl",
    siteName: "Carina - Systemy Rynnowe",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Carina - Systemy Rynnowe",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Carina - Producent Rynien i Systemów Rynnowych",
    description: "Producent wysokiej jakości systemów rynnowych, parapetów i sztachetek metalowych.",
    images: ["/favicon.png"],
  },
  verification: {
    google: "verification_token",
  },
  category: "business",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MCZRXR5QP3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MCZRXR5QP3');
          `}
        </Script>
        
        {/* Organization Structured Data for Google */}
        <Script type="application/ld+json" id="organization-schema" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Carina",
            "url": "https://www.carina.czest.pl",
            "logo": "https://www.carina.czest.pl/favicon.png"
    })}
  </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
          storageKey="carina-theme"
        >
          <div className="flex min-h-screen flex-col">
            <ScrollToTop />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <CallBar />
            <CookieConsent />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
