// src/pages/Home.jsx
import React from "react";
import AboutHeader from "../components/AboutHeader";
import OpenVacancies from "../components/OpenVacancies";
import AboutSection from "../components/AboutSection";
export default function Careers() {
  return <>
   <AboutHeader 
        title="Careers"
        backgroundImage="../assets/afterHero.png" // Use your desired header image
      />
            {/* <AboutSection
    heading="Careers at Web Elo" para="Lorem ipsum is simply dummy text of the printing and typesetting industry."/> */}

  <OpenVacancies/>
  
  </>;
}
