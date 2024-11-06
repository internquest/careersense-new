import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from '@/components/Sidebar'
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
const QuandoRegular = localFont({
  src: "./fonts/Quando-Regular.ttf",
  variable: "--font-QuandoRegular",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export const SchibstedGroteskMedium = localFont({
  src: "./fonts/SchibstedGrotesk-Medium.ttf",
  variable: "--font-SchibstedGroteskMedium",
});
export const SchibstedGroteskregular = localFont({
  src: "./fonts/SchibstedGrotesk-Regular.ttf",
  variable: "--font-SchibstedGroteskregular",
});
const DMSansReg = localFont({
  src: "./fonts/DMSans-Regular.ttf",
  variable: "--font-DMSansReg",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${QuandoRegular.variable} ${SchibstedGroteskregular.variable} ${SchibstedGroteskMedium.variable} ${DMSansReg.variable}`}>
      <body >

        <div className="flex   ">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
