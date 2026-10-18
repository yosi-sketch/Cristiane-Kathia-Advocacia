import type { Metadata, Viewport } from "next";
import { Libre_Caslon_Text, Montserrat } from "next/font/google";
import { brand } from "./lib/brand";
import "./globals.css";

const displayFont = Libre_Caslon_Text({
  variable: "--font-display-face",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const bodyFont = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const metadataBase = siteUrl ? new URL(siteUrl) : undefined;
const shareImage = brand.logo;
const title = "Rodrigues de Carvalho Advogados | Manhumirim, MG";
const description = "Orientação jurídica com atenção, clareza e responsabilidade em Manhumirim, Minas Gerais. Conheça a Rodrigues de Carvalho Advogados. Agendamentos: (33) 99998-8635.";

export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title,
  description,
  keywords: [brand.businessName, brand.name, "advogados em Manhumirim", "escritório de advocacia em Manhumirim", "orientação jurídica", "Manhumirim MG"],
  icons: { icon: [{ url: "/icon.svg", type: "image/svg+xml" }] },
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
            width: 1774,
            height: 887,
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
  themeColor: "#0b1a2f",
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
