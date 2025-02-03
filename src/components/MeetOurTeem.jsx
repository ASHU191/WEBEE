import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const leadershipData = [
  {
    name: "Abdullah Shah",
    title: "Backend Developer",
    image: "./Abdullah.jpeg", // Replace with actual image path
  },
  {
    name: "Muhammad Owais Shaikh",
    title: "Backend Developer",
    image: "./Owa.jpeg", // Replace with actual image path
  },
  {
    name: "Muhammad Maaz Tahir",
    title: "Frontend Developer",
    image: "./MAZZZ.jpeg", // Replace with actual image path
  },
  {
    name: "Muhammad Arsalan Aftab",
    title: "MERN-STACK Developer",
    image: "./Arsalan.jpeg", // Replace with actual image path
  }, {
    name: "Taha Sheikh",
    title: "Frontend Developer",
    image: "./Taha.jpg", // Replace with actual image path
  },
  {
    name: "Saad Ahmed",
    title: "Flutter Developer",
    image: "./Saad.jpg", // Replace with actual image path
  },
  {
    name: "Muzammil Shamim",
    title: "UI/UX Designer",
    image: "./MUzamil.jpg", // Replace with actual image path
  }, {
    name: "Hafiz Sharjeel",
    title: "Frontend Developer",
    image: "./Sharjel.jpeg", // Replace with actual image path
  },
  {
    name: "Ziyan Ahmed",
    title: "Social Media Marketer",
    image: "./Zayanchapry.JPG" 
  },
  {
    name: "Muhammad Samee",
    title: "Frontend Developer",
    image: "./Samee.jpg", // Replace with actual image path
  },
  {
    name: "Ahmed Naseer Hussain",
    title: "Full Stack Developer",
    image: "./Nasir.jpg", // Replace with actual image path
  },
  {
    name: "Muhammad Jazil Siddiqi",
    title: "Frontend Developer",
    image: "./J.jpeg", // Replace with actual image path
  },
  {
    name: "Muhammad Talha Haider",
    title: "Frontend Developer",
    image: "./talha.jpeg", // Replace with actual image path
  },
  
  // Add more items as needed
];

function MeetOurTeam() { // Corrected component name
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
    <div className="p-8 mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-4">
        Meet Our Team
      </h2>
      <Slider {...settings}>
        {leadershipData.map((leader, index) => ( // Corrected array mapping
          <div key={index} className="p-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center p-4 h-[400px] flex flex-col justify-between">
              <img
                src={leader.image}
                alt={leader.name}
                className=" h-[300px] object-cover rounded-lg mb-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{leader.name}</h3>
                <p className="text-sm text-gray-500">{leader.title}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MeetOurTeam; // Corrected export name