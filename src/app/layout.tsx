import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/components/toast-container";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    template: "%s - CinephileX",
    default: "CinephileX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${inter.variable}`}>
      <body className=" bg-zinc-900 text-zinc-100  antialiased">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
