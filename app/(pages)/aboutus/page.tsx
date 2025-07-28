import React from "react";
import { Metadata } from "next";
import AboutBanner from "@/public/about_banner.jpg";
import { DynamicFrame } from "@/components/blocks/dynamicFrame";
import { GooeyText } from "@/components/gooey-text-morphing";
import TeamMemberContainer from "@/components/blocks/teamMemberContainer";

export const metadata: Metadata = {
  title: "About us",
  description:
    "We are a creative agency brands building insightful strategy, creating unique designs helping",
  keywords: [
    "technosys inc",
    "technosys inc about us",
    "technosys inc about us page",
    "technosys inc about us page design",
    "technosys inc about us page design",
  ],
  openGraph: {
    title: "About us",
    description:
      "We are a creative agency brands building insightful strategy, creating unique designs helping",
    images: [AboutBanner.src],
  },
  twitter: {
    title: "About us",
    description:
      "We are a creative agency brands building insightful strategy, creating unique designs helping",
    images: [AboutBanner.src],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.technosysinc.com/aboutus",
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  authors: [{ name: "Technosys Inc", url: "https://www.technosysinc.com" }],
  creator: "Technosys Inc",
  publisher: "Technosys Inc",
  category: "marketing",
};

const aboutus = () => {
  return (
    <div className="overflow-x-hidden">
      <div
        className="w-full h-[200px] md:h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${AboutBanner.src})`,
        }}
      >
        <h1 className="text-4xl md:text-8xl  font-bold text-center text-white">
          About us
        </h1>
      </div>

      <div className="container w-full mx-auto flex flex-col md:flex-row gap-10 py-20 md:py-40 items-center justify-center">
        <div className=" text-center md:text-left flex flex-col gap-4 md:w-1/2 md:border-r-2 border-black">
          <h3 className="text-4xl font-bold">26+</h3>
          <h4 className="text-2xl font-bold ">Years of Experience</h4>
          <p>
            We are a creative agency brands building insightful strategy,
            creating unique designs helping
          </p>
        </div>
        <div className="text-center md:text-left flex flex-col gap-4 md:w-1/2 md:border-r-2 border-black">
          <h3 className="text-4xl font-bold">347+</h3>
          <h4 className="text-2xl font-bold">Successful Projects</h4>
          <p>
            We are a creative agency brands building insightful strategy,
            creating unique designs helping
          </p>
        </div>
        <div className="text-center md:text-left flex flex-col gap-4 md:w-1/2">
          <h3 className="text-4xl font-bold">139+</h3>
          <h4 className="text-2xl font-bold">Satisfied Customers</h4>
          <p>
            We are a creative agency brands building insightful strategy,
            creating unique designs helping
          </p>
        </div>
      </div>
      <div className=" w-full mx-auto flex flex-col text-center">
        <div className="block py-20">
          <GooeyText
            texts={["Design", "Enginnering", "Build", "Deliver", "Market"]}
            morphTime={1.3}
            cooldownTime={0.25}
            className="font-bold"
          />
        </div>
        <div className="flex m-auto  border-t-2  border-black justify-center gap-10 py-20">
          <div className="w-1/4 md:w-1/3 flex flex-col gap-5">
            <h4 className="text-2xl font-bold">We Love What We Do</h4>
            <p>
              We are a creative agency working with brands building insightful
              strategy, creating unique designs and crafting value
            </p>
          </div>
          <div className="w-1/4 md:w-1/3 flex flex-col gap-5">
            <h4 className="text-2xl font-bold">We Love What We Do</h4>
            <p>
              We are a creative agency working with brands building insightful
              strategy, creating unique designs and crafting value
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <DynamicFrame />
      </div>
      <div className="container">
        <TeamMemberContainer />
      </div>
    </div>
  );
};

export default aboutus;
