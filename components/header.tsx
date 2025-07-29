"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import TopBar from "./TopBar";

interface MenuItem {
  title: string;
  link: string;
  active: boolean;
}

const itemsMenu: MenuItem[] = [
  { title: "Home", link: "/", active: true },
  { title: "Services", link: "/services", active: false },
  { title: "Portfolio", link: "#", active: false },
  { title: "Blog", link: "#", active: false },
  { title: "About", link: "/aboutus", active: false },
  { title: "Contact", link: "/contact", active: false },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  const hamburgerVariants = {
    open: { rotate: 45, y: 5 },
    closed: { rotate: 0, y: 0 },
  };

  const middleLineVariants = {
    open: { opacity: 0 },
    closed: { opacity: 1 },
  };

  const bottomLineVariants = {
    open: { rotate: -45, y: -5 },
    closed: { rotate: 0, y: 0 },
  };

  const mobileMenuVariants = {
    open: {
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    closed: {
      x: "100%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  const closeButtonVariants = {
    hover: { scale: 1.1, rotate: 90 },
    tap: { scale: 0.9 },
  };



  return (
    <>
      <TopBar />
      <div className="bg-transparent shadow-sm">
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-between py-6 px-6  md:px-10 text-black relative "
        >
          {/* Logo */}
          <div className="text-xl font-bold">Technosys Inc</div>

          {/* Desktop Menu */}
          <motion.div
            className="hidden md:flex gap-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {itemsMenu.map((item) => (
              <motion.a
                key={item.title}
                href={item.link}
                variants={itemVariants}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`${item.active ? "font-semibold" : ""}`}
              >
                {item.title}
              </motion.a>
            ))}
          </motion.div>

          {/* Mobile Hamburger Button */}
          <motion.button
            className="md:hidden flex flex-col w-6 h-6 justify-center items-center gap-1 z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <motion.span
              className="w-full h-0.5 bg-black"
              variants={hamburgerVariants}
              animate={isOpen ? "open" : "closed"}
            />
            <motion.span
              className="w-full h-0.5 bg-black"
              variants={middleLineVariants}
              animate={isOpen ? "open" : "closed"}
            />
            <motion.span
              className="w-full h-0.5 bg-black"
              variants={bottomLineVariants}
              animate={isOpen ? "open" : "closed"}
            />
          </motion.button>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsOpen(false)}
                  className="fixed inset-0 bg-black z-40 md:hidden"
                />

                <motion.div
                  variants={mobileMenuVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="fixed top-0 right-0 h-full w-64 bg-black shadow-xl z-50 p-6"
                >
                  {/* Close Button */}
                  <motion.button
                    className="absolute top-6 right-6 text-2xl"
                    onClick={() => setIsOpen(false)}
                    variants={closeButtonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    aria-label="Close menu"
                  >
                    ✕
                  </motion.button>

                  <motion.div
                    className="flex flex-col gap-6 mt-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {itemsMenu.map((item) => (
                      <motion.a
                        key={item.title}
                        href={item.link}
                        variants={itemVariants}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`text-lg py-2 text-white font-semibold ${
                          item.active ? "font-semibold" : ""
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </motion.a>
                    ))}
                  </motion.div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>
    </>
  );
};

export default Header;
