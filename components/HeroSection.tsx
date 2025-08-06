"use client";
import React from "react";
import TextRotator from "./TextRouter";
import ButtonCTA from "./ButtonCTA";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <div className="text-white text-start flex flex-col items-start justify-center gap-5 h-full py-10 md:py-20 bg-cover bg-center px-10 md:px-35 ">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
        className="text-3xl md:text-5xl font-unbounded font-extrabold leading-10 md:leading-14 "
      >
       Struggling for Customers?<br /> We Drive Traffic <br/> Leads & Sales.
      </motion.h1>
      <h3 className="text-2xl md:3xl flex flex-col md:flex-row items-start md:items-center md:text-center gap-1">
        <span className=" md:mr-2">FOR YOUR BUSINESS</span>
        <span>
          <TextRotator />
        </span>
      </h3>

      <div className="md:w-1/2 mt-5 ">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
        >
          Your business deserves more than likes and clicks—it deserves real growth. At Technosys Inc, we turn your website and ads into a sales engine. From SEO and PPC to GTM strategies and web development, we create custom plans that actually deliver results, not just reports.
        </motion.p>
      </div>
      <div className="flex gap-3.5">
        <ButtonCTA className="border-white" text="Book Now" />
        <ButtonCTA className="border-white" text="Ask Expert" href="/contact" />
      </div>
    </div>
  );
};

export default HeroSection;