
import React from "react";
import LeadershipCarousel from "../components/LeadershipCarousel";
import Hero from "../components/Hero";
import TestimonialComponents from "../components/TestimonialComponent";
import MyChatbot from "../components/MyChatbot";
import PortfolioSlider from "../components/PortfolioSlider";
import SplashCursor from "../components/SplashCursor";
import Counter from "../components/Counter";
import Sect from "../pages/Sect"
import CircularGallery from "../components/CircularGallery";
import FlowingMenu from '../components/FlowingMenu'
import Weoffer from "../components/Weoffer";

const demoItems = [
  { text: 'Connect', image: 'https://picsum.photos/600/400?random=1' },
  { text: 'With', image: 'https://picsum.photos/600/400?random=2' },
  { text: 'Us', image: 'https://picsum.photos/600/400?random=3' },
];
export default function Home() {

  return (
    <>



      <div>
        <Hero />
        <div className="fixed bottom-5 right-2 z-50">
          <MyChatbot />
        </div>
        <div style={{ height: '400px', position: 'relative' }}>
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
        </div>
        <PortfolioSlider />
        <Sect />
        <Counter />
        <LeadershipCarousel />
        <TestimonialComponents />
        <Weoffer />
        <div style={{ height: '200px', position: 'relative' }}>
          <FlowingMenu items={demoItems} />
        </div>
        <SplashCursor />
        

      </div>
    </>
  );
}
