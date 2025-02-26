// src/pages/Home.jsx
import React from "react";
import AboutHeader from "../components/AboutHeader";
import DomainExpertise from "../components/DomainExpertise";
import AdvantagesAbout from "../components/AdvantagesAbout";
import AboutSection from "../components/AboutSection";
import SplashCursor from "../components/SplashCursor";
export default function AboutUs() {
  return <>
   <AboutHeader 
        title="About Us"
        backgroundImage="./heroimg.png" // Use your desired header image
      />
      {/* <AboutSection
    heading="About Web Elo" para="Lorem ipsum is simply dummy text of the printing and typesetting industry."/> */}

<DomainExpertise/>
<AdvantagesAbout/>
<SplashCursor />
  </>;
}
