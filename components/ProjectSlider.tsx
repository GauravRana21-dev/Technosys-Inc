"use client";
import { project } from "@/constant/projects";
import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Gallery4, Gallery4Item } from "./blocks/gallery4";

const ProjectSlider = () => {
  return <Gallery4 items={project as Gallery4Item[]} />;
};

export default ProjectSlider;
