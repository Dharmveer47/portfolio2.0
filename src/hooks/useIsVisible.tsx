import { useState, useEffect } from "react";

const useIsVisible = (elementId: string): boolean => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 } // Adjust this value to control sensitivity
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [elementId]);

  return isVisible;
};

export default useIsVisible;
