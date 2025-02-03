import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import Navbar from "./Navbar"; // Ensure the path is correct
import MyChatbot from "./MyChatbot";

const Hero = () => {
  return (
    <div className="relative z-0 h-screen w-full overflow-hidden">
      {/* Background Image with 3D Zoom-Out Effect */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('./background.jpg')", // Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ scale: 1.5, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 80,
          duration: 3,
          damping: 25,
        }}
      ></motion.div>

      {/* Overlay for color effect */}
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        {/* Animated Heading with Zoom-Out and 3D Effect */}
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 transform"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 80,
            duration: 2,
            damping: 20,
          }}
          style={{
            textShadow: "4px 4px 12px rgba(0, 0, 0, 0.4)",
            transform: "perspective(600px) rotateX(5deg) rotateY(5deg)",
          }}
        >
          Welcome to Web Elo Solutions
        </motion.h1>

        {/* Animated Subtitle with Zoom-Out */}
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl mb-6"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 80,
            duration: 1.5,
            damping: 20,
          }}
          style={{
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.4)",
          }}
        >
          Lighting Up Your Digital World
        </motion.p>

        {/* Get a Quote Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50, duration: 1 }}
        >
          <a
            href="/Contact"
            className="inline-block py-3 px-8 mt-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-lg rounded-full hover:opacity-80 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Get a Quote
          </a>
        </motion.div>
      </div>

      {/* Optional: Chatbot */}
      <MyChatbot />
    </div>
  );
};

export default Hero;
