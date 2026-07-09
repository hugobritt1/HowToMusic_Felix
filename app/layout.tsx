import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HowToMusic — Learn it. Practice. Play it.",
  description:
    "Real lessons, no pretence. HowToMusic teaches guitar, piano, and whatever's next — built for anyone who wants to actually learn, not just watch a tutorial and forget it.",
  metadataBase: new URL("https://howtomusic.vercel.app"),
  openGraph: {
    title: "HowToMusic — Learn it. Practice. Play it.",
    description:
      "Guitar and piano lessons that actually stick. Try a free sample lesson and join the waitlist.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
