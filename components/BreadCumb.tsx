"use client";

import { ChevronRight, Home } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

const BreadCrumb = () => {
  const pathname = usePathname();
  const pathArray = pathname.split("/").filter((item) => item !== "");
  console.log( "I am the patharray",pathArray)

  // Function to capitalize and format path segments
  const formatPathSegment = (segment : string) => {
    console.log( "I am the segment",segment)
    return (segment
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
    );
      
  };
  

  // Function to build the full path for each breadcrumb
  const buildPath = (index : number) => {
    console.log( "I am the buildPath",index)
    return "/" + pathArray.slice(0, index + 1).join("/");
  };
  console.log( "I am the buildPath",buildPath)

  return (
    <div className="w-full h-full bg-[#F6F5F3] border-b border-[#E5E5E5]">
      <div className="container mx-auto px-4">
        <div className="flex items-center py-3">
          {/* Home Link */}
          <Link 
            href="/" 
            className="flex items-center text-sm font-medium text-[#6B7280] hover:text-[#374151] transition-colors duration-200"
          >
            <Home className="w-4 h-4 mr-1" />
            Home
          </Link>

          {/* Path Segments */}
          {pathArray.length > 0 && (
            <>
              <ChevronRight className="w-4 h-4 mx-2 text-[#9CA3AF]" />
              {pathArray.map((segment, index) => {
                const isLast = index === pathArray.length - 1;
                const href = buildPath(index);
                const displayName = formatPathSegment(segment);

                return (
                  <div key={index} className="flex items-center">
                    {isLast ? (
                      // Last item - no link, different styling
                      <span className="text-sm font-semibold text-[#374151] truncate max-w-[200px]">
                        {displayName}
                      </span>
                    ) : (
                      // Intermediate items - clickable links
                      <>
                        <Link
                          href={href}
                          className="text-sm font-medium text-[#6B7280] hover:text-[#374151] transition-colors duration-200 truncate max-w-[150px]"
                        >
                          {displayName}
                        </Link>
                        <ChevronRight className="w-4 h-4 mx-2 text-[#9CA3AF] flex-shrink-0" />
                      </>
                    )}
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;