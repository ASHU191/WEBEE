import { useState, useEffect } from "react";
import CountUp from "react-countup";

export default function Counter() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is in view
      }
    );

    const counterElement = document.getElementById("counter");
    if (counterElement) {
      observer.observe(counterElement);
    }

    return () => {
      if (counterElement) {
        observer.unobserve(counterElement);
      }
    };
  }, []);

  return (
    <div id="counter" className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* User Active */}
      <div className="text-center transform hover:scale-105 transition-transform duration-500">
        <h2 className="text-[#00E6F6] text-4xl md:text-5xl font-bold mb-2">
          {inView && <CountUp start={0} end={70} duration={2} separator="," />}+
        </h2>
        <p className="text-white text-sm md:text-base uppercase tracking-wider">Successful projects delivered</p>
      </div>

      {/* Trusted by Company */}
      <div className="text-center transform hover:scale-105 transition-transform duration-500">
        <h2 className="text-[#00E6F6] text-4xl md:text-5xl font-bold mb-2">
          {inView && <CountUp start={0} end={2} duration={2} separator="," />}+
        </h2>
        <p className="text-white text-sm md:text-base uppercase tracking-wider">Years of industry experience</p>
      </div>

      {/* Transaction */}
      <div className="text-center transform hover:scale-105 transition-transform duration-500">
        <h2 className="text-[#00E6F6] text-4xl md:text-5xl font-bold mb-2">
          {inView && <CountUp start={0} end={50} duration={2} prefix="$" separator="," />}+
        </h2>
        <p className="text-white text-sm md:text-base uppercase tracking-wider">Happy Clients</p>
      </div>
    </div>
  );
}
