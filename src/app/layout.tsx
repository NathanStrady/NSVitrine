import type { Metadata } from "next";
import "@/app/assets/styles/globals.css";
import {Navbar} from "@/app/components/navbar/navbar";
import MainProvider from "@/contexts/MainProvider"
import {Inter} from "next/font/google"

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Strady Nathan",
  description: "Portfolio de Strady Nathan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased dark h-screen`}
      >
      <MainProvider>
        <Navbar />
            {children}
      </MainProvider>
      </body>
    </html>
  );
}
