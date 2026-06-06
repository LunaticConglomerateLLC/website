import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wearelunatic.com"),
  title: {
    default: "Lunatic Conglomerate LLC – Acquire Your Sanity",
    template: "%s | Lunatic Conglomerate LLC",
  },
  description:
    "We acquire your sanity. No refunds. No pull requests. Lunatic Conglomerate LLC – where venture capital meets controlled chaos.",
  keywords: [
    "venture capital",
    "startups",
    "chaos",
    "sanity",
    "lunatic congress",
    "law firm",
    "legal services",
  ],
  authors: [{ name: "Lunatic Conglomerate LLC" }],
  category: "Business",
  openGraph: {
    type: "website",
    url: "https://wearelunatic.com",
    siteName: "Lunatic Conglomerate LLC",
    title: "Lunatic Conglomerate LLC – Acquire Your Sanity",
    description: "We acquire your sanity. No refunds. No pull requests.",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Lunatic Conglomerate LLC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lunaticcong",
    creator: "@lunaticcong",
    title: "Lunatic Conglomerate LLC – Acquire Your Sanity",
    description: "We acquire your sanity. No refunds. No pull requests.",
    images: ["/hero.png"],
  },
  alternates: {
    canonical: "https://wearelunatic.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/128x128.png", sizes: "128x128", type: "image/png" },
    ],
    shortcut: "/128x128.png",
    apple: [
      {
        url: "/apple-touch-icon-ipad-76x76.png",
        sizes: "76x76",
        type: "image/png",
      },
      {
        url: "/apple-touch-icon-ipad-retina-152x152.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        url: "/apple-touch-icon-iphone-60x60.png",
        sizes: "60x60",
        type: "image/png",
      },
      {
        url: "/apple-touch-icon-iphone-retina-120x120.png",
        sizes: "120x120",
        type: "image/png",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0B0F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} min-h-screen bg-background font-sans`}
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Lunatic Conglomerate LLC",
              url: "https://wearelunatic.com",
              logo: "https://wearelunatic.com/128x128.png",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
