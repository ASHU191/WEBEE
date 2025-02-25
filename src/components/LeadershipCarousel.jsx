import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from "../components/SectionTitle";
import SectionOpacity from "../components/SectionOpacity";

const leadershipData = [
  { name: "Hamza", title: "FOUNDER", image: "./hamza2.png" },
  { name: "Arsalan", title: "MERN Stack Developer", image: "./arsalan1.jpg" },
  { name: "Huzaifa", title: "Frontend Developer", image: "./huzaifa2.jpg" },
  { name: "Najam", title: "Python Developer", image: "./najam.jpg" },
];

function LeadershipCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="p-8 mx-auto max-w-screen-xl bg-transparent">
      <SectionOpacity classes="z-2">
        <SectionTitle title=" Leading Vision." classes="px-[0vw] md:px-[3vw] pt-[3vw] z-10  text-white" />
      </SectionOpacity>
      <Slider {...settings}>
        {leadershipData.map((leader, index) => (
          <div key={index} className="p-4">
            <div className="bg-transparent rounded-lg shadow-xl overflow-hidden text-center p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out hover:scale-105">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-[300px] object-cover rounded-lg mb-4 mx-auto"
              />
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{leader.name}</h3>
                <p className="text-md text-gray-300">{leader.title}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default LeadershipCarousel;
