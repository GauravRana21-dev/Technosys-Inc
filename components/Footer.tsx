"use client";
import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import links, { Links } from "@/constant/links";
import { services } from "@/constant/service";
import { ServiceSectionProps } from "./ServiceSection";
import { motion } from "motion/react";

const PolicyLinks = [
  {
    title: "Privacy Policy",
    link: "/privacypolicy",
  },
  {
    title: "Terms & Conditions",
    link: "/termsandconditions",
  },
  {
    title: "Cookie Policy",
    link: "#",
  },
];

const Footer = () => {
  const [email, setEmail] = React.useState("");
  return (
    <footer style={{ boxShadow: "rgba(33, 35, 38, 0.1) 0px -10px 10px -10px" }}>
      {/* Email Subscription */}
      <div className="flex lg:flex-row flex-col p-[40px] justify-between py-[70px] lg:w-[1200px] m-auto lg:gap-[140px] gap-[40px]">
        <motion.div
          className="flex gap-3 flex-col"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="font-bold ">
            Get valuable strategy, culture and brand insights straight to your
            inbox{" "}
          </h2>
          <form className="border-b-1 border-black flex pb-3">
            <input
              className="w-full focus:outline-none"
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">
              <FaPaperPlane />
            </button>
          </form>
          <p>
            By signing up to receive emails from Motto, you agree to our Privacy
            Policy. We treat your info responsibly.
          </p>
        </motion.div>

        {/* links */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* heading */}
          <h2>Links</h2>
          <div className="flex flex-col gap-2 mt-3">
            {links.map((link: Links, index: number) => {
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  {link.name}
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Services */}
        <div>
          <h2>Services</h2>
          <div className="flex flex-col gap-2 mt-3">
            {services.map((service: ServiceSectionProps, index: number) => {
              return (
                <motion.a
                  initial={{
                    opacity: 0,
                    y: 100,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.1,
                  }}
                  key={service.id}
                  href={service.link}
                >
                  {service.title}
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-2">
          <h2>Contact</h2>
          <p>
            Office No 127, D MALL, KRISHNA APRA, Shakti Khand 2, Indirapuram,
            Ghaziabad, Uttar Pradesh 201014
          </p>
          <a href="tel:+919910011205">+91 99100 11205</a>
          <a href="mailto:KdJHk@example.com"></a>
        </div>
      </div>
      <hr className="w-ful" />
      <div className="flex justify-between items-center px-3">
        <p className="text-center py-4 text-sm text-gray-400">
          Copyright © 2025 Technosys Inc. All rights reserved.
        </p>

        <div>
          {PolicyLinks.map((link, index) => {
            return (
              <motion.a
                key={link.title}
                href={link.link}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="text-center py-4 text-sm px-2 gap-2 text-gray-400 hover:text-black"
              >
                {link.title}
              </motion.a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
