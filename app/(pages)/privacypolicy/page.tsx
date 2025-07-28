import React from "react";
import { Metadata } from "next";
import PoliciesBlock from "@/components/policiesBlock";


export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy",
  keywords: ["privacy policy", "Technosys Inc", "Technosys Inc privacy policy"],
  openGraph: {
    title: "Privacy Policy",
    description: "Privacy Policy",
    images: [
      {
        url: "https://frisk.websolutionus.com/uploads/custom-images/team-1-1.webp",
        width: 1200,
        height: 630,
        alt: "Technosys Inc",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    title: "Privacy Policy",
    description: "Privacy Policy",
    images: [
      {
        url: "https://frisk.websolutionus.com/uploads/custom-images/team-1-1.webp",
        width: 1200,
        height: 630,
        alt: "Technosys Inc",
        type: "image/jpeg",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.technosysinc.com/privacypolicy",
  },
};

const policyData = [
  {
    title: "1. Who We Are",
    description:
      "Technosys Inc is a digital marketing firm providing services such as Search Engine Optimization (SEO), Pay-Per-Click Advertising (PPC), Social Media Marketing, Email Marketing, Content Marketing, Web Development, and other online marketing solutions.",
  },
  {
    title : "Information We Collect",
    description : "When you interact with our website or services, we may collect the following information: Personal Information: Name Email Address Phone Number Website URL Automatically Collected Data: IP Address Browser Type Device Information Usage Data through cookies and tracking technologies (Google Analytics, Facebook Pixel)"
  },
  {
    title : "3. How We Collect Information",
    description : "We collect your information through the following methods: Contact Forms: When you submit an inquiry or request a quote. Cookies & Tracking Technologies: To analyze website performance, improve user experience, and optimize ads."
  },
  {
    title : "4. How We Use Your Information",
    description : "We use the collected information for purposes such as: Responding to your inquiries and providing services. Improving our website and services. Analyzing user behavior using analytics tools (Google Analytics, Facebook Pixel). Marketing and advertising purposes, including retargeting campaigns."
  },
  {
    title : "5. Cookies and Tracking Technologies",
    description : "We use cookies and similar tracking tools to enhance your experience and analyze website performance. These tools include: Google Analytics: To understand website traffic and user behavior. Facebook Pixel: To optimize ads and track conversions. You can control or disable cookies in your browser settings."
  }, 
  {
    title : "6. Data Sharing and Disclosure",
    description : "We do not sell, rent, or trade your personal information. We may share data only with trusted service providers for analytics or advertising purposes, under strict confidentiality agreements."
  }, 
  {
    title : "7. Data Security",
    description : "We implement appropriate security measures to protect your information. However, no transmission over the internet can be guaranteed as 100% secure."
  }, 
  {
    title : "8. Your Privacy Rights",
    description : "You may request access to the personal data we hold about you. You may request corrections or deletion of your data. To exercise your rights, contact us at contact@technosysinc.com."
  }, 
  {
    title : "9. Third-Party Links",
    description : "Our website may contain links to third-party sites. We are not responsible for their privacy practices."
  },
  {
    title : "10. Changes to this Policy",
    description : "We may update this policy from time to time. We encourage you to review this page for any changes."
  },
  {
    title : "11. Contact Us",
    description : "If you have any questions or concerns about this policy, please contact us at contact@technosysinc.com.",
    end : "true"
  }
];

const privacyPolicy = () => {
  return (
    <div className="px-3 my-10 md:w-4xl mx-auto md:my-20">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <span className="my-2">Effective Date: 2025-07-23</span>
      </div>
      <p>
        Technosys Inc (“we,” “our,” “us”) respects your privacy and is committed
        to protecting your personal information. This Privacy Policy explains
        how we collect, use, and safeguard your information when you interact
        with our website or services.
      </p>

      <hr className="my-10" />

        {policyData.map((ele, idx)=>{
            return <PoliciesBlock key={idx} title={ele.title} description={ele.description} end={ele.end}/>
        })}
      

      
    </div>
  );
};

export default privacyPolicy;
