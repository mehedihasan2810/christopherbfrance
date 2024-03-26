import Footer from "@/components/footer";
import type { Metadata } from "next";
import { Spectral } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import { siteConfig } from "@/config";

const spectral = Spectral({
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.siteTitle,
    template: `%s | ${siteConfig.siteTitle}`,
  },
  description: siteConfig.siteDescription,
  keywords: ["Christopher B. France", "Christopher", "portfolio"],
  authors: [
    {
      name: siteConfig.author,
    },
  ],
  creator: "Christopher",
  metadataBase: new URL(siteConfig.siteUrl),
  openGraph: {
    type: "website",
    locale: siteConfig.ogLanguage,
    url: siteConfig.siteUrl,
    title: siteConfig.siteTitle,
    description: siteConfig.siteDescription,
    siteName: siteConfig.siteTitle,
    images: [
      {
        url: siteConfig.siteBanner,
        alt: siteConfig.siteDescription,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.siteTitle,
    description: siteConfig.siteDescription,
    images: [
      {
        url: siteConfig.siteBanner,
        alt: siteConfig.siteDescription,
      },
    ],
    creator: "@christopher",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.siteUrl}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spectral.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="grow">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
