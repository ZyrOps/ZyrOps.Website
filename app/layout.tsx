import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zyrops.com"),
  title: "ZyrOps | Zero to Operations",
  description:
    "ZyrOps builds AI-powered SaaS tools, web platforms, Rust, GoLang and Python backends, Flutter mobile apps, desktop apps, and OS-level support.",
  keywords: [
    "ZyrOps",
    "SaaS development",
    "AI agents",
    "Rust development",
    "GoLang development",
    "Python development",
    "React development",
    "Next.js development",
    "Angular development",
    "Django development",
    "Flask development",
    "Flutter development",
    "Android app development",
    "iOS app development",
    "desktop application development",
    "mobile app development",
    "ZyroHR",
    "ZyroCRM",
    "ZyroPoS",
    "ZyroSupport",
    "ZyroBooks",
    "CipherTrak",
  ],
  openGraph: {
    title: "ZyrOps | Zero to Operations",
    description:
      "Agentic product engineering, infrastructure, and support from zero to operations.",
    type: "website",
    images: ["/logo.png"],
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
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
