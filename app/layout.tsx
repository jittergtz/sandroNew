import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";

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




export const metadata: Metadata = {
  title: "Sandro",
  description: "Sandro Gantze's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#000000]`}
      >
        {children}
        <div className="w-full mt-20">
      <Image
      src={"/sandro2.svg"}
      width={200}
      height={200}
      alt="sandro footer"
      className="w-full pointer-events-none"/>
      </div>
      </body>
    </html>
  );
}
