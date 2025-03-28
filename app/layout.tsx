import type { Metadata } from "next";
import { Montserrat, Literata, Hurricane, Antic } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import AnalyticsProvider from "./components/providers/AnalyticsProvider";

const northWell = localFont({
  src: "./fonts/Northwell.ttf",
  variable: "--font-northwell",
  weight: "100 900",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const tenPearl = localFont({
  src: "./fonts/tanPearl.otf",
  variable: "--font-ten-pearl",
  weight: "100 900",
});
const montserrat = Montserrat({ weight: ["400", "600"], subsets: ["latin"] });
const literata = Literata({ weight: ["400", "700"], subsets: ["latin"] });
const hurricane = Hurricane({ weight: ["400"], subsets: ["latin"] });
const antic = Antic({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Grey Wall",
  description: "The Grey Wall - Best Residential & Commercial Interior Designer in Bangalore",
  icons: {
    icon: "/favicon2.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <AnalyticsProvider />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tenPearl.variable} antialiased ${montserrat.className} ${northWell.variable} ${literata.className} ${hurricane.className} ${antic.className}`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PTVJBN26"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}
        <Toaster />
      </body>
    </html>
  );
}
