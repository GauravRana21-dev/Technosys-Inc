"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

const TextRotator = () => {
  const texts = useMemo(
    () => ["Marketing", "Development", "Branding", "Social Media"],
    []
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentText = texts[currentIndex];

    if (isTyping) {
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 100); // Typing speed
      } else {
        timeout = setTimeout(() => setIsTyping(false), 1000); // Pause after typing
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50); // Deleting speed
      } else {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, displayText, isTyping, texts]);

  return (
    <motion.span
      className="inline-block text-3xl font-bold "
      key={texts[currentIndex]}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
    >
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="ml-1"
      >
        |
      </motion.span>
    </motion.span>
  );
};

export default TextRotator;
