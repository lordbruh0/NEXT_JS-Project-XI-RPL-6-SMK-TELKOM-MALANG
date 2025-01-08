import type { Metadata } from "next";

import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "My Porfile",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        {/* Tambahkan Bagian berikut pada Layout*/}
        <div className="bg-home bg-no-repeat bg-cover">
        <div className="bg-brown w-screen">
          {children}
        </div>
        </div>
      </body>
    </html>
  )
}
