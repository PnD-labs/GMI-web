import { Inter } from "next/font/google";
import Providers from "../providers/Providers";
import { Metadata } from "next";
import "@mysten/dapp-kit/dist/index.css";
import "@radix-ui/themes/styles.css";
import "./globals.css"; // CSS 파일을 임포트합니다.
const inter = Inter({ subsets: ["latin"] });
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "GMI",
  description: "GMI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gradient-custom`}>
        <Providers>
          <div className="w-full min-h-screen bg-gradient-custom">
            <Header />
            {children}
            <Toaster />
          </div>
        </Providers>
      </body>
    </html>
  );
}
