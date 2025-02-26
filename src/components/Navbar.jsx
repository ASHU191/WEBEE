import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from '../assets/MainLogo.png';

const UniqueNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Disable body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup when component unmounts
    };
  }, [isOpen]);

  return (
    <nav className="absolute w-full z-10 p-4">
      <div className="container mx-auto pe-10 flex justify-between items-center pt-4">
        <Link to="/" className="text-white text-2xl font-bold w-44">
          <img src={Logo} alt="Web Elo Logo" className="w-48 h-auto rounded-lg" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-white">
          <li><Link to="/" className="text-white font-semibold text-lg">Home</Link></li>
          <li><Link to="/about-us" className="text-white font-semibold text-lg">About Us</Link></li>
          <li><Link to="/portfolio" className="text-white font-semibold text-lg">Portfolio</Link></li>
          <li><Link to="/services" className="text-white font-semibold text-lg">Services</Link></li>
          <li><Link to="/Contact" className="text-white font-semibold text-lg">Contact US</Link></li>
        </ul>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              variants={{
                closed: { d: "M4 6h16M4 12h16M4 18h16" },
                open: { d: "M6 18L18 6M6 6l12 12" },
              }}
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              transition={{ duration: 0.3 }}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <motion.div
        className="fixed inset-y-0 right-0 w-64 shadow-lg md:hidden z-50 
             bg-gradient-to-r from-[#1e1e1e] via-[#0a1f2d] to-[#0a2d4f]"
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <div className="p-4">
          {/* Close Button */}
          <button
            className="text-white focus:outline-none" // Changed color to white
            onClick={() => setIsOpen(false)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Sidebar Navigation */}
          <ul className="mt-8 space-y-6">
            <li><Link to="/" className="text-white font-semibold text-lg">Home</Link></li>
            <li><Link to="/about-us" className="text-white font-semibold text-lg">About Us</Link></li>
            <li><Link to="/portfolio" className="text-white font-semibold text-lg">Portfolio</Link></li>
            <li><Link to="/services" className="text-white font-semibold text-lg">Services</Link></li>
            <li><Link to="/Contact" className="text-white font-semibold text-lg">Contact</Link></li>
          </ul>
        </div>
      </motion.div>
    </nav>
  );
}

export default UniqueNavbar;
