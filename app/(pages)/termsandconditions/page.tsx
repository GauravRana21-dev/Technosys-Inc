import React from 'react'
import { Metadata } from "next";
import PoliciesBlock from '@/components/policiesBlock';

export const metadata: Metadata = {
    title : "Terms and Conditions",
    description : "Terms and Conditions",
    keywords : ["terms and conditions", "Technosys Inc", "Technosys Inc terms and conditions"],
    openGraph : {
        title : "Terms and Conditions",
        description : "Terms and Conditions",
        images : [
            {
                url : "https://frisk.websolutionus.com/uploads/custom-images/team-1-1.webp",
                width : 1200,
                height : 630,
                alt : "Technosys Inc",
                type : "image/jpeg"
            }
        ]
    },
    twitter : {
        title : "Terms and Conditions",
        description : "Terms and Conditions",
        images : [
            {
                url : "https://frisk.websolutionus.com/uploads/custom-images/team-1-1.webp",
                width : 1200,
                height : 630,
                alt : "Technosys Inc",
                type : "image/jpeg"
            }
        ]
    },
    robots : {
        index : true,
        follow : true
    },
    alternates : {
        canonical : "https://www.technosysinc.com/termsandconditions"
    }
}

const termsAndConditions = [
    {
      title: "1. Acceptance of Terms",
      description:
        "By using our website or engaging with our services, you agree to these Terms and Conditions, as well as our Privacy Policy. If you do not agree, please do not use our website or services."
    },
    {
      title: "2. Services Provided",
      description:
        "Technosys Inc provides digital marketing services including but not limited to: Search Engine Optimization (SEO), Pay-Per-Click (PPC) Advertising, Social Media Marketing, Email Marketing, Content Marketing, Web Development & Design, and Online Reputation Management. We reserve the right to modify, suspend, or discontinue any service at any time without notice."
    },
    {
      title: "3. User Responsibilities",
      description:
        "By using our services, you agree to provide accurate and complete information when requested, not engage in any activity that could harm our website or interfere with other users, and not use our website or services for any unlawful or prohibited purposes."
    },
    {
      title: "4. Intellectual Property",
      description:
        "All content on our website, including text, graphics, logos, and images, is the property of Technosys Inc or its licensors and is protected by copyright and trademark laws. You may not copy, distribute, or use any content without prior written consent."
    },
    {
      title: "5. Payment and Refund Policy",
      description:
        "Payments for services must be made as per the agreed terms. All fees are non-refundable unless stated otherwise in a specific agreement. We reserve the right to suspend services for non-payment."
    },
    {
      title: "6. Limitation of Liability",
      description:
        "Technosys Inc will not be liable for any indirect, incidental, or consequential damages arising from your use of our website or services. Our total liability is limited to the amount you have paid for the services."
    },
    {
      title: "7. Third-Party Links",
      description:
        "Our website may contain links to third-party websites. We are not responsible for their content, policies, or practices."
    },
    {
      title: "8. Privacy Policy",
      description:
        "Your use of our website and services is also governed by our Privacy Policy."
    },
    {
      title: "9. Termination",
      description:
        "We reserve the right to terminate or suspend your access to our website or services at any time, without notice, for violating these terms."
    },
    {
      title: "10. Changes to These Terms",
      description:
        "Technosys Inc reserves the right to update or change these Terms and Conditions at any time. Changes will be posted on this page with the updated date."
    },
    {
      title: "11. Governing Law",
      description:
        "These Terms and Conditions shall be governed by the laws of [Your Country/State]."
    },
    {
      title: "12. Contact Us",
      description:
        "For any questions about these Terms and Conditions, please contact us at: Technosys Inc, Email: [Insert Email Address], Website: https://www.technosysinc.com",
      end: "true"
    }
  ];
  

const TermAndConditions = () => {
  return (
    <div className="px-3 my-10 md:w-4xl mx-auto md:my-20">
    <div className="mb-10">
      <h1 className="text-4xl font-bold">Terms and Conditions</h1>
      <span className="my-5!important">Effective Date: 2025-07-23</span>
    </div>
    <p>
    Welcome to Technosys Inc. By accessing or using our website and services, you agree to comply with the following Terms and Conditions. Please read them carefully before using our services.
    </p>

    <hr className="my-10" />

    {termsAndConditions.map((ele, idx)=>{
        return <PoliciesBlock key={idx} title={ele.title} description={ele.description} end={ele.end}/>
    })}


    </div>
  )
}

export default TermAndConditions
