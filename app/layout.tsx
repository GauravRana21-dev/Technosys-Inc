import type { Metadata } from "next";
import { Poppins, Unbounded } from "next/font/google";
import "./globals.css";
import SmoothFollower from "@/components/SmoothFollower";
import Header from "@/components/header";
import Footer from "@/components/Footer";

const unBounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Internet Marketing Agency",
    template: "%s | Technosys Inc",
  },
  description:
    "We at Technosys Inc help you to grow your business with internet marketing services",
    manifest: "/manifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        suppressHydrationWarning
        className={`${unBounded.variable} ${poppins.variable} antialiased bg-[#f6f5f1]`}
      >
        <SmoothFollower />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
