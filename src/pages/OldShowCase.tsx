import React, { useEffect } from "react";

const OldShowCase: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    // when this view is appeared then scroll to the bottom
    //  use intersection observer
    if (ref.current) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          ref.current.scrollIntoView({ behavior: "smooth" });
        }
      });
      observer.observe(ref.current);
    }
  }, []);
  return (
    <div ref={ref} className="h-screen relative">
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap 
      md:left-1/4 ">
        <div className="text-2xl mt-8 text-white">Old Showcase(2020)</div>
      </div>

      <div className="w-full h-full">
        <iframe
          src="https://dharmveer-singh.netlify.app/"
          title="Dharmveer Singh"
          width={"100%"}
          height={"100%"}
        ></iframe>
      </div>
    </div>
  );
};

export default OldShowCase;
