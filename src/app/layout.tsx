import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";
import { personSchema, websiteSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-cormorant", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-poppins", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Djinns et protection spirituelle | Hadj Ismael Bohlaly", template: "%s | Hadj Ismael Bohlaly" },
  description:
    "Comprendre les djinns, renforcer sa protection spirituelle et retrouver la sérénité avec Hadj Ismael Bohlaly, guide spirituel musulman et traditionaliste.",
  applicationName: site.name,
  authors: [{ name: site.name }],
  formatDetection: { telephone: false },
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } : undefined,
};

export const viewport: Viewport = { themeColor: "#15100D", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${poppins.variable}`}>
      <body>
        <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-or focus:px-4 focus:py-2 focus:text-ebene">
          Aller au contenu
        </a>
        <JsonLd data={[personSchema(), websiteSchema()]} />
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Analytics />
        <VercelAnalytics />
      </body>
    </html>
  );
}
