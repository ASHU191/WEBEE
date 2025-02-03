import React from "react";
import ParticlesContainer from "./ParticlesContainer";

const HomeHero = () => {
  return (
    <div className=" bg-[#132554] duration-300 z-0 relative">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0 relative z-10">
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default HomeHero;
