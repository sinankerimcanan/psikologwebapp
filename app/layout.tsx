import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteTitle = "Özde Rehberlik - Psikolojik Danışmanlık Merkezi";
const siteDescription =
  "Özde Rehberlik, bireylerin psikolojik sağlığını desteklemek ve yaşam kalitesini artırmak amacıyla profesyonel danışmanlık hizmetleri sunan bir merkezdir. Uzman kadromuzla, kişisel gelişim, stres yönetimi, ilişki sorunları ve daha birçok konuda bireylere rehberlik ediyoruz.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    images: ["/assets/logo-icon.png"],
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
