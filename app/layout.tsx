import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZyrOps | Zero to Operations",
  description:
    "ZyrOps builds SaaS, PaaS, mobile apps, OS-level support, and agentic AI operations for companies moving from idea to production.",
  keywords: [
    "ZyrOps",
    "SaaS development",
    "PaaS",
    "AI agents",
    "mobile app development",
    "Cipher POS",
    "Zyro HR",
  ],
  openGraph: {
    title: "ZyrOps | Zero to Operations",
    description:
      "Agentic product engineering, infrastructure, and support from zero to operations.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
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
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
