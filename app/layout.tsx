import { Inter } from "next/font/google";
import Providers from "../providers/Providers";
import { Metadata } from "next";
import "@mysten/dapp-kit/dist/index.css";
import "@radix-ui/themes/styles.css";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster"
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
      <body className={inter.className}>
        <Providers>
          <div className="h-screen  w-full bg-slate-950">
            <Header />
            {children}
            <Toaster />
          </div>
        </Providers>
      </body>
    </html>
  );
}
