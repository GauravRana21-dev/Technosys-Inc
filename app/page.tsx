import HeroSection from "@/components/HeroSection";
import backgroundImage from "../public/herobackground.webp";
import ShowService from "@/components/ShowService";
import OurProject from "@/components/OurProject";

import { TestimonialsShow } from "@/components/TestimonialShow";
import ClientLogoContainer from "@/components/blocks/clientLogoContainer";

export default function Home() {
  return (
    <>
      <div
        className="bg-cover bg-center  md:h-[100vh] lg:h-[100vh]"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
        }}
      >
        <HeroSection />
      </div>
      <ShowService />
      <OurProject />
      <ClientLogoContainer />
      <TestimonialsShow />
    </>
  );
}