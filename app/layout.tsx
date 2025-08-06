import type { Metadata } from "next";
import { Poppins, Unbounded } from "next/font/google";
import "./globals.css";
import SmoothFollower from "@/components/SmoothFollower";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"



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
    <html suppressHydrationWarning className="scroll-smooth" lang="en">
      <body
        className={`${unBounded.variable} ${poppins.variable} antialiased`}
      >
        <SmoothFollower />
        <Header />
        {children}
        <SpeedInsights/>
        <Analytics/>
        <Footer />
      </body>
    </html>
  );
}
