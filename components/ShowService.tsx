import React from "react";
import { services } from "@/constant/service";
import ServiceSection, { ServiceSectionProps } from "./ServiceSection";

const ShowService = () => {
  return (
    <div>
      {services.map((service: ServiceSectionProps) => (
        <ServiceSection
          key={service.id}
          id={service.id}
          title={service.title}
          description={service.description}
          image={service.image}
          link={service.link}
        />
      ))}
    </div>
  );
};

export default ShowService;
