import React from "react";
import { Metadata } from "next";
import ServiceBanner from "@/public/service_banner.jpg";
import Link from "next/link";
import services from "@/constant/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "We at Technosys Inc are a creative agency brands building insightful strategy, creating unique designs helping",
  keywords: [
    "technosys inc",
    "technosys inc services",
    "technosys inc services page",
    "technosys inc services page design",
    "technosys inc services page design",
  ],
  openGraph: {
    title: "Services | Technosys Inc",
    description:
      "We at Technosys Inc are a creative agency brands building insightful strategy, creating unique designs helping",
    images: [],
    emails : "contact@technosysinc.com",
    phoneNumbers : "+91 9910011205",
    siteName : "Technosys Inc",
    url : "https://www.technosysinc.com/services",
    countryName : "India",
  },
  twitter: {
    title: "Services | Technosys Inc",
    description:
      "We at Technosys Inc are a creative agency brands building insightful strategy, creating unique designs helping",
    images: [],
    site: "@TechnosysInc",
    card: "summary",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.technosysinc.com/services",
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json",
  authors: [{ name: "Technosys Inc", url: "https://www.technosysinc.com" }],
  creator: "Technosys Inc",
  publisher: "Technosys Inc",
  category: "marketing",
  generator: "Technosys Inc",
};

const Services = () => {
  return (
    <div className="overflow-x-hidden">
      <div
        className="w-full h-[200px] md:h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${ServiceBanner.src})`,
        }}
      >
        <h1 className="text-4xl md:text-8xl  font-bold text-center text-white">
          Services
        </h1>
      </div>

      <div className="py-10 px-5 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-10 container mx-auto">
        {services.map((service, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-col gap-5 p-10 border-2 border-black rounded-lg hover:shadow-md "
            >
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className="">
               {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.slice(0, 3).map((tag, idx) => {
                  return (
                    <span
                      key={idx}
                      className="text-sm text-black p-2  border-2 border-black rounded-lg"
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
              <Link href={service.link}>
                <div className="flex items-center gap-2 hover:underline cursor-pointer">
                  <h4>View Details</h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="py-10">
        <h2 className="text-4xl font-bold text-center">See What Our Found Say</h2>
        
      </div>
    </div>
  );
};

export default Services;
