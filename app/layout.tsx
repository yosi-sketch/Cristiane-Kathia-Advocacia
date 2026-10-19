import type { Metadata, Viewport } from "next";
import { Libre_Caslon_Display, Manrope } from "next/font/google";
import { brand } from "./lib/brand";
import "./globals.css";

const displayFont = Libre_Caslon_Display({
  variable: "--font-display-face",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const metadataBase = siteUrl ? new URL(siteUrl) : undefined;
const shareImage = brand.logo;
const title = "Cristiane & Kathia | Advocacia Previdenciária em Brasília de Minas";
const description = "Orientação em aposentadorias, BPC/LOAS, direitos de pessoas com TEA, benefícios por incapacidade e Direito Cível. Cristiane & Kathia, em Brasília de Minas, MG.";

export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title,
  description,
  keywords: [brand.businessName, brand.name, "advogadas em Brasília de Minas", "Direito Previdenciário", "BPC LOAS", "TEA", "aposentadorias", "benefícios por incapacidade"],
  icons: { icon: [{ url: brand.logo, type: "image/png" }] },
  openGraph: {
    title,
    description,
    locale: "pt_BR",
    siteName: brand.businessName,
    type: "website",
    images: metadataBase
      ? [
          {
            url: shareImage,
            width: 2172,
            height: 724,
            alt: brand.businessName,
          },
        ]
      : undefined,
  },
  twitter: {
    card: metadataBase ? "summary_large_image" : "summary",
    title,
    description,
    ...(metadataBase ? { images: [shareImage] } : {}),
  },
};

export const viewport: Viewport = {
  themeColor: "#211b14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={bodyFont.variable + " " + displayFont.variable}>
      <body className="min-h-screen bg-ivory font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
