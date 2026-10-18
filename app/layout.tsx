import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import { brand } from "./lib/brand";
import "./globals.css";

const displayFont = Bodoni_Moda({
  variable: "--font-display-face",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
const title = "Micaela Alves Advocacia | Família e Criminal em Igarapé, MG";
const description = "Advocacia de Família e Criminal em Igarapé, MG, com ênfase em Violência Doméstica. Escuta, estratégia e atenção aos seus direitos. Micaela Alves — OAB/MG 220.712.";

export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title,
  description,
  keywords: [brand.businessName, brand.name, "advogada em Igarapé", "Direito de Família", "Direito Criminal", "Violência Doméstica", "Igarapé MG"],
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
            width: 2171,
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
  themeColor: "#09182f",
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
