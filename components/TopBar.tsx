import { MoveRight } from "lucide-react";
import React from "react";

const TopBar = () => {
  return (
    <div className="bg-black text-white w-full py-1 px-1">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a className="text-sm md:text-normal" href="tel:+919910011205">
            Call Us: +91 99100 11205
          </a>
        </div>
        <div className="items-center gap-4 hidden md:flex">
          <a
            className="flex items-center gap-2"
            href="mailto:info@technosysinc.com"
          >
            Get a Free Seo Consultation <MoveRight className="w-4 h-4" />
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            className="text-sm md:text-normal"
            href="mailto:info@technosysinc.com"
          >
            info@technosysinc.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
