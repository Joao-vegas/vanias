import type { Metadata } from "next";
import { Poppins, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const siteUrl = "https://vaniaamaral.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vânia Amaral | Fisioterapia, Estética e Atendimento Domiciliar em SP",
    template: "%s | Vânia Amaral",
  },
  description:
    "Fisioterapia, estética e atendimento domiciliar em São Paulo. Reabilitação física, drenagem linfática, pós-operatório, limpeza de pele e revitalização facial com atendimento humanizado no conforto da sua casa. CREFITO 456836-F.",
  keywords: [
    "fisioterapia São Paulo",
    "fisioterapia domiciliar",
    "drenagem linfática",
    "pós-operatório",
    "limpeza de pele",
    "revitalização facial",
    "estética SP",
    "Vânia Amaral",
  ],
  authors: [{ name: "Vânia Amaral" }],
  openGraph: {
    title: "Vânia Amaral | Fisioterapia & Estética",
    description:
      "Cuidando da sua saúde, bem-estar e autoestima com atendimento humanizado e personalizado, no conforto da sua casa.",
    url: siteUrl,
    siteName: "Vânia Amaral",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/vania.jpg", width: 1080, height: 1440, alt: "Vânia Amaral" }],
  },
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${cormorant.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
