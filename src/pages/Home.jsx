// src/pages/Home.jsx
import React from "react";
import Methodology from "../components/Methodology";
import LeadershipSection from "../components/LeadershipSection";
import FAQ from "../components/FAQ";
import IndustryExperts from "../components/IndustryExperts";
import BusinessGrowthCard from "../components/BusinessGrowthCard";
import ServicesWithOffer from "../components/ServicesWithOffer";
import StatsOverview from "../components/StatsOverview";
import AfterHero from "../components/AfterHero";
import LeadershipCarousel from "../components/LeadershipCarousel";
import Hero from "../components/Hero";
import LogoSlider from "../components/LogoSlider";
import TestimonialComponents from "../components/TestimonialComponent";
import MyChatbot from "../components/MyChatbot";
import PortfolioSlider from "../components/PortfolioSlider";
// import MeetOurTeeml from "../components/MeetOurTeem";
// import Testimonialscomponent from "../components/TestimonialComponent";
export default function Home() {

  return (
    <>

      <div className="">

        <div>
          <Hero />
          <div className="fixed bottom-5 right-2 z-50">
            <MyChatbot />
          </div>
          <BusinessGrowthCard />
          <PortfolioSlider />
          {/* <AfterHero /> */}
          
          <StatsOverview />
          {/* <LogoSlider /> */}
          
          {/* <TestimonialsComponent /> */}
          <TestimonialComponents />
          <Methodology />
          {/* <IndustryExperts /> */}
          <LeadershipCarousel />
          <ServicesWithOffer />
          <FAQ />
          {/* <MeetOurTeeml /> */}
        </div>
      </div>
    </>
  );
}
