import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    template: "%s | CinephileX",
    default: "CinephileX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={inter.variable}>
      <body className="bg-zinc-50 dark:bg-zinc-950 dark:text-zinc-50 text-zinc-800 antialiased">
        {children}
      </body>
    </html>
  );
}
