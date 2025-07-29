"use client";
import React from "react";
import TextRotator from "./TextRouter";
import ButtonCTA from "./ButtonCTA";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <div className=" text-start flex flex-col items-start gap-5 h-full py-10 md:py-20 bg-cover bg-center px-10 md:px-35 relative ">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
        className="text-4xl text-center md:text-6xl lg:text-8xl font-unbounded font-extrabold uppercase tracking-wide w-7xl mx-auto "
      >
       The  trusted growth partner for startups
      </motion.h1>
      <h3 className="text-center text-2xl md:3xl flex flex-col md:flex-row items-start md:items-center justify-center md:text-center gap-1 mx-auto">
        <span className=" md:mr-2">FOR YOUR BUSINESS</span>
        <span>
          <TextRotator />
        </span>
      </h3>

      <div className="md:w-1/2 mx-auto mt-5  ">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
          className="text-sm text-center"
        >
          We specialize in SEO, website development, and paid advertising to
          help e-commerce businesses to maximize their online presence and
          generate more revenue. Whether you need a one-time SEO setup, a
          website built from scratch, or ongoing digital marketing solutions, we
          provide result-driven strategies tailored to your needs.
        </motion.p>
      </div>
      <div className="flex gap-3.5 items-center justify-center mx-auto">
        <ButtonCTA className="" text="Read More" />
        <ButtonCTA text="Contact Us" href="#contact" />
      </div>
    </div>
  );
};

export default HeroSection;



