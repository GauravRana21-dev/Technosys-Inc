"use client";
import Link from "next/link";
import React from "react";
import * as motion from "motion/react-client";
import { MoveUpRight } from "lucide-react";

export interface ServiceSectionProps {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const ServiceSection = ({
  id,
  title,
  description,
  image,
  link,
}: ServiceSectionProps) => {
  const [isHover, setIsHover] = React.useState<string | null>(null);
  const handleMouseEnter = (id: string) => {
    setIsHover(id);
  };

  return (
    <>
      <div
        key={id}
        onMouseEnter={() => handleMouseEnter(id)}
        onMouseLeave={() => handleMouseEnter("")}
        className="flex flex-col  md:flex-row md:h-[255px]  gap-5 md:gap-10 md:items-center justify-between py-8 px-8 md:py-0 md:px-8 border-b-1 overflow-x-hidden"
      >
        {/* id */}
        <div className=" text-4xl md:w-1/4 md:text-9xl font-bold">{id}.</div>
        {/* description */}
        <div className="max-w-full md:w-1/4  md:text-left">{description}</div>
        {/* image */}
        <div className="hidden md:block md:w-1/4">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{
              opacity: isHover === id ? 1 : 0,
              transition: {
                duration: 0.3,
                ease: "easeInOut",
                delay: 0.2,
              },
            }}
            className={isHover === id ? "block" : "hidden"}
            src={image as string}
            alt={title}
            width={300}
            height={250}
          />
        </div>
        {/* Title and Button */}
        <div className="flex flex-row md:flex-col gap-10 md:gap-4 items-center md:items-end md:w-1/4">
          <h2 className="text-2xl text-left md:text-3xl font-bold md:text-right">
            {title}
          </h2>
          <Link href={link}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 cursor-pointer font-unbounded font-extrabold"
            >
              VIEW MORE
              <div className="p-2 md:p-4 rounded-full bg-black text-white border-2 border-black">
                <MoveUpRight size={18} />
              </div>
            </motion.button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
