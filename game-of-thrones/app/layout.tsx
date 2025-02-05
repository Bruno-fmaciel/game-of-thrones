import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { ThemeProviderWrapper } from "./context/ThemeContext";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GoT - Fanpage",
  description: "Game of thrones page made by a fan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  types: string;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProviderWrapper>
          <Header />

          <main>
            {children}
          </main>

          <Footer/>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
