import { useState, useEffect } from "react";

export const useIsMobile = () => {
  const getIsMobile = () => window.innerWidth <= 699;

  const [isMobile, setIsMobile] = useState(getIsMobile());

  useEffect(() => {
    const handleResize = () => setIsMobile(getIsMobile());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};
