import React from "react";
import { Metadata } from "next";
import Banner from "@/public/socialMedia/Banner.jpeg";
import Link from "next/link";
import SocialMediaServices from "@/public/socialMedia/socialservices.jpeg";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Social Media Strategy",
  description:
    "Technosys Inc is a creative agency that helps brands build insightful strategy, creating unique designs helping",
  keywords: [
    "technosys inc",
    "technosys inc social media strategy",
    "technosys inc social media strategy page",
    "technosys inc social media strategy page design",
  ],
  openGraph: {
    title: "Social Media Strategy | Technosys Inc",
    description:
      "Technosys Inc is a creative agency that helps brands build insightful strategy, creating unique designs helping",
    images: [],
  },
  twitter: {
    title: "Social Media Strategy | Technosys Inc",
    description:
      "Technosys Inc is a creative agency that helps brands build insightful strategy, creating unique designs helping",
    images: [],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.technosysinc.com/services/social-media-strategy",
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest",
  authors: [{ name: "Technosys Inc", url: "https://www.technosysinc.com" }],
  creator: "Technosys Inc",
  publisher: "Technosys Inc",
};

const SocialMediaStrategy = () => {
  return (
    <div className="overflow-x-hidden">
      <div
        className="h-[70vh] w-full md:h-screen bg-position-x bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(${Banner.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="p-10 pt-30 md:p-40 md:w-2/3">
          <h3 className="text-white text-4xl md:text-8xl font-bold">
            Social Media Strategy
          </h3>
          <p className="text-white text-lg md:text-2xl py-10">
            Technosys Inc is a creative agency that helps brands build
            insightful strategy, creating unique designs helping
          </p>
          <div>
            <button className="hover:underline hover:pb-1">
              <Link
                className="text-white font-semibold text-3xl flex items-center gap-6"
                href="#"
              >
                Let&apos;s Talk
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-10"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-10 px-5 md:px-20 md:py-20">
        <h3>
          Social Media Marketing Services That Amplify Your Brand Presence
        </h3>
        <p className="mt-10">
          Are you searching for the{" "}
          <span className="font-bold">
            best social media marketing services{" "}
          </span>
          to boost brand awareness, engage your audience, and drive sales? Stop
          letting your competitors steal the spotlight! At Technosys Inc, we
          create powerful, engaging social media strategies that build
          meaningful connections with your audience and turn followers into
          customers. Leveraging proven techniques and conversion-focused
          content, we ensure your brand stands out across all social platforms.
          We expertly manage platforms including Facebook, Instagram, LinkedIn,
          Twitter, YouTube, Pinterest, Snapchat, TikTok, and emerging platforms
          tailored to your business needs.
        </p>
        <p className="mt-10">
          We serve diverse industries including e-commerce, healthcare, real
          estate, education, hospitality, technology, and local small
          businesses, crafting customised social media strategies that speak
          directly to your target audience.
        </p>
      </div>

      <div className="container mx-auto py-10 px-5 md:px-20 md:py-20 flex flex-col md:flex-row justify-between items-center">
        <div>
          <Image
            src={SocialMediaServices.src}
            alt="Social Media Services"
            width={500}
            height={500}
          ></Image>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <h4>Why Our Social Media Marketing Leads the Industry:</h4>
          <ul className="list-disc gap-3 pl-6 mt-10 md:mt-0 ">
            <li className="my-10">
              Strategic Keyword Integration: We skillfully utilize key phrases
              like &quot;best social media marketing,&quot; &quot;social media
              agency Delhi NCR,&quot; &quot;affordable social media
              packages,&quot; &quot;Instagram marketing Delhi,&quot; and
              &quot;social media expert Ghaziabad&quot; to maximize your
              visibility.
            </li>
            <li className="mb-10">
              Custom Social Strategies: Each campaign is uniquely designed to
              align with your business goals, audience preferences, and budget.
            </li>
            <li className="mb-10">
              Creative Content Development: Engage your audience with visually
              appealing, high-quality, and share-worthy content optimized to
              boost interaction.
            </li>
            <li className="mb-10">
              Advanced Audience Targeting: Precise targeting methods to reach
              the exact audience segment likely to convert and engage.
            </li>
            <li className="mb-10">
              Consistent Brand Voice: Establish a powerful, unified brand voice
              across platforms to strengthen customer loyalty and brand
              recognition.
            </li>
          </ul>
          <button className="hover:underline pl-6 ">
            <Link
              className="text-black font-semibold text-3xl flex items-center gap-6"
              href="#"
            >
              Let&apos;s Talk
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-10"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </button>
        </div>
      </div>

      <div className="container mx-auto py-10 px-5 md:px-20 md:py-20">
        <h3>Our Proven Social Media Marketing Process: </h3>
        <div className="flex flex-col md:flex-row justify-between items-center"></div>
      </div>
    </div>
  );
};

export default SocialMediaStrategy;
