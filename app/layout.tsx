import type { Metadata, Viewport } from "next";
import { absoluteUrl, brand, jsonLdScript, organizationSchema, seoKeywords, siteUrl } from "./lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ZyrOps | AI SaaS, Web, Mobile & Operations Engineering",
    template: "%s | ZyrOps",
  },
  description:
    "ZyrOps LLP builds AI-powered SaaS tools, custom web applications, Rust, GoLang and Python backends, Flutter mobile apps, desktop apps, and operations support from Kozhikode and Wayanad, Kerala.",
  keywords: seoKeywords,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  authors: [{ name: brand.legalName, url: siteUrl }],
  creator: brand.legalName,
  publisher: brand.legalName,
  category: "Software development and SaaS products",
  openGraph: {
    title: "ZyrOps | AI SaaS, Web, Mobile & Operations Engineering",
    description:
      "AI-powered SaaS products, custom software engineering, mobile apps, backend systems, and support from Kozhikode and Wayanad, Kerala.",
    url: siteUrl,
    siteName: brand.name,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "ZyrOps logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "ZyrOps | AI SaaS, Web, Mobile & Operations Engineering",
    description:
      "AI-powered SaaS products and custom software engineering from Kozhikode and Wayanad, Kerala.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0B14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(organizationSchema()) }}
        />
        {children}
      </body>
    </html>
  );
}
