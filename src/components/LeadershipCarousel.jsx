import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const leadershipData = [
  {
    name: "Hamza",
    title: "FOUNDER",
    image: "./hamza2.png", // Replace with actual image path
  },
  {
    name: "Arsalan",
    title: "MERN Stack Developer",
    image: "./arsalan1.jpg", // Replace with actual image path
  },
  {
    name: "Huzaifa",
    title: "Frontend Developer",
    image: "./huzaifa2.jpg", // Replace with actual image path
  },
  {
    name: "Najam",
    title: "Python Developer",
    image: "./najam.jpg", // Replace with actual image path
  },
  
  // Add more items as needed
];

function LeadershipCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false, // Disable autoplay
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="p-8 mx-auto max-w-screen-xl bg-transparent">
      <h2 className="text-4xl font-semibold text-center text-white mb-8">Leading with Vision</h2>
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
