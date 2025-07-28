import { useEffect, useState } from "react";

export const useClientBoundary = () => {
  const [boundary, setBoundary] = useState({
    height: 0,
    width: 0,
    centerX: 0,
    centerY: 0,
    quarterX: 0,
    quarterY: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setBoundary({
        height: window.innerHeight,
        width: window.innerWidth,
        centerX: window.innerWidth / 2,
        centerY: window.innerHeight / 2,
        quarterX: window.innerWidth / 4,
        quarterY: window.innerHeight / 4,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (typeof window === "undefined") {
    return "No window object found";
  }

  return {
    boundary,
  };
};

export default useClientBoundary;
