import React from "react";
import ContactBanner from "@/public/contact.jpg";
import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact",
  keywords: ["contact", "Technosys Inc", "Technosys Inc contact"],
  openGraph: {
    title: "Contact",
    description: "Contact",
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
    title: "Contact",
    description: "Contact",
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
    canonical: "https://www.technosysinc.com/contact",
  },
};

const Contact = () => {
  return (
    <div>
      <div
        className="w-full h-[200px] md:h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${ContactBanner.src})`,
        }}
      >
        <h1 className="text-4xl md:text-8xl  font-bold text-center text-white">
          Contact
        </h1>
      </div>

      {/* grid */}
      <div className="px-5 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-10 py-20 md:py-40 items-center justify-center container mx-auto">
        {/* first */}
        <div className="flex flex-col gap-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>

          <h3 className="text-4xl font-bold">Headquarters</h3>
          <div>
            <div className="flex flex-col">
              <p>
                Office No 127, D MALL, KRISHNA APRA, Shakti Khand 2,
                Indirapuram, Ghaziabad, Uttar Pradesh 201014
              </p>
            </div>
          </div>

          <a className="underline font-bold flex items-center gap-2" href="#">
            Get Direction{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
        </div>

        {/* second */}
        <div className="flex flex-col gap-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>

          <h3 className="text-4xl font-bold">Email Address</h3>
          <div>
            <div className="flex flex-col">
              <a className="" href="mailto:info@technosysinc.com">
                info@technosysinc.com
              </a>
              <a className="" href="mailto:contact@technosysinc.com">
                contact@technosysinc.com
              </a>
            </div>
          </div>
          <a className="underline font-bold flex items-center gap-2" href="#">
            Send Message{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
        </div>

        {/* third */}
        <div className="flex flex-col gap-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>

          <h3 className="text-4xl font-bold">Phone Number</h3>
          <div className="flex flex-col">
            <a className="" href="mailto:info@technosysinc.com">
              info@technosysinc.com
            </a>
            <a className="" href="mailto:contact@technosysinc.com">
              contact@technosysinc.com
            </a>
          </div>
          <a className="underline font-bold flex items-center gap-2" href="#">
            Call Anytime{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div className="flex flex-col md:flex-row bg-[#E3FF04] w-full items-center justify-between py-10 md:py-20 container mx-auto rounded-xl md:px-10 shadow">
        {/* Map  */}
        <div className="md:w-1/2 flex items-center gap-10 hover:underline cursor-pointer">
          <h1 className="text-3xl md:text-6xl font-bold">Get Direction</h1>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
        </div>
        {/* Contact Form */}
        <div className="md:w-1/2 rounded-xl p-10 flex flex-col gap-10">
          <div className="flex flex-col gap-10">
          <h1 className="md:text-6xl font-bold">Have Any Project on Your Mind? </h1>
          <p className="">Great! We&apos;re excited to hear from you and let&apos;s start something</p>
          </div>
          <div>
          <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
