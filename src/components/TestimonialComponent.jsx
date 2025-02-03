import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client1 from "/client1.webp"
import client2 from "/client2.webp"
import client3 from "/client3.webp"
import client4 from "/client4.webp"
import client5 from "/client5.webp"

// Star rating component
const StarRating = ({ rating }) => {
  const fullStar = "★";
  const emptyStar = "☆";
  
  return (
    <div className="flex justify-center mb-2">
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} className="text-yellow-400 text-lg">
          {index < rating ? fullStar : emptyStar}
        </span>
      ))}
    </div>
  );
};

const testimonials = [
  {
    name: "by-rishii",
    title: "India",
    feedback:
      "Choosing him as my developer was the really a great decision for me. At an honest level I feel his work was worth way more than what I paid him. He's is polite and took care of details what I asked for. I would be his repeat customer as well.",
    image: client1, // Replace with actual image URL
    rating: 5, // 5-star rating
  },
  {
    name: "lightsnow1",
    title: "HR Croatia",
    feedback:
      "Have been working with Tuba on the AI-powered browser extension. I'm not very technical, so I appreciate him process with emphasis on the business. I'm glad I didn't have to learn JavaScript to get my app live!",
    image: client2, // Replace with actual image URL
    rating: 4, // 4-star rating
  },
  {
    name: "sergargler",
    title: "United Kingdom",
    feedback:
      "Great communication, excellent disposition to help and beautiful product. I can't express how thrilled I am with the exceptional service provided by this seller! Tuba expertise in AI technology and SaaS development was evident from our very first interaction. She took the time to truly understand my vision and requirements, offering valuable insights. The quality of work delivered was outstanding. The AI SaaS tool it's user-friendly, efficient, and packed with innovative features that set it apart in the market. If you're looking for a skilled, reliable, and friendly professional to help bring your AI SaaS ideas to life, look no further.",
    image: client3, // Replace with actual image URL
    rating: 5, // 5-star rating
  },
  {
    name: "yogavillage",
    title: "Vietnam",
    feedback:
      "We are very happy with the application development. Quality of work and communication are very good. Highly recommended. Thank you",
    image: client4, // Replace with actual image URL
    rating: 4, // 4-star rating
  },
  {
    name: "leaderj",
    title: "United Kingdom",
    feedback:
      "I had a great experience working with Tuba. she is a professional, simple spoke and truly understood my needs. The final result was good, delivered on time and with great attention to detail. I hope are we progress to the next level, its get even better",
    image: client5, // Replace with actual image URL
    rating: 4, // 4-star rating
  },
  // Add more testimonials as needed
];

const TestimonialComponent = () => {
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
    <div className="py-10 flex justify-center px-6">
      <div className="w-full max-w-6xl px-4">
        <h2 className="text-center text-white text-3xl font-semibold text-gray-800 mb-8">
          Testimonials
        </h2>
        <Slider {...settings} className="mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4 flex justify-center">
              <div className="flex flex-col items-center h-full max-w-sm p-6 rounded-lg bg-[#0c1a3c] text-white shadow-lg text-center">
                <div className="flex items-center justify-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-bold">{testimonial.name}</h3>
                    <p className="text-sm">{testimonial.title}</p>
                  </div>
                </div>
                {/* Feedback with 4 lines and ellipsis */}
                <p className="text-sm leading-relaxed mb-4 overflow-hidden text-ellipsis line-clamp-4">
                  {testimonial.feedback}
                </p>
                <div className="flex-1" /> {/* Fills remaining space */}
                <StarRating rating={testimonial.rating} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialComponent;