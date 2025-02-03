import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo2.png';

const NavItem = ({ to, children }) => (
  <motion.li
    className="relative px-6 py-2"
    whileHover={{ scale: 1.1, rotateY: 10, textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)" }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.3 }}
  >
    <Link to={to} className="text-white font-semibold text-lg">
      {children}
    </Link>
    <motion.div
      className="absolute bottom-0 left-0 w-full h-0.5 bg-[#9b4dca] transform origin-left scale-x-0"
      initial={{ scaleX: 0 }}
      whileHover={{ scaleX: 1 }}
      transition={{ duration: 0.3 }}
    />
  </motion.li>
);

const UniqueNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute w-full z-10 p-4">
      <div className="container mx-auto pe-10 flex justify-between items-center pt-4">
        <Link to="/" className="text-white text-2xl font-bold w-44">
          <img src={Logo} alt="Web Elo Logo" className="w-48 h-auto rounded-lg" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-white">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about-us">About Us</NavItem>
          <NavItem to="/portfolio">Portfolio</NavItem>
          <NavItem to="/services">Services</NavItem>
          <NavItem to="/Contact">Contact US</NavItem>
        </ul>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
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

      {/* Mobile Drawer */}
      <motion.div
        className="fixed inset-y-0 bg-white right-0 w-64 shadow-lg md:hidden"
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="p-4">
          <button
            className="text-gray-800 focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="mt-8 space-y-6">
            <motion.li whileHover={{ x: 10 }} whileTap={{ scale: 0.95 }}>
              <Link to="/" className="text-gray-800 font-semibold text-lg">Home</Link>
            </motion.li>
            <motion.li whileHover={{ x: 10 }} whileTap={{ scale: 0.95 }}>
              <Link to="/about-us" className="text-gray-800 font-semibold text-lg">About Us</Link>
            </motion.li>
            <motion.li whileHover={{ x: 10 }} whileTap={{ scale: 0.95 }}>
              <Link to="/portfolio" className="text-gray-800 font-semibold text-lg">Portfolio</Link>
            </motion.li>
            <motion.li whileHover={{ x: 10 }} whileTap={{ scale: 0.95 }}>
              <Link to="/services" className="text-gray-800 font-semibold text-lg">Services</Link>
            </motion.li>
            <motion.li whileHover={{ x: 10 }} whileTap={{ scale: 0.95 }}>
              <Link to="/Contact" className="text-gray-800 font-semibold text-lg">Contact</Link>
            </motion.li>
          </ul>
        </div>
      </motion.div>
    </nav>
  );
}

export default UniqueNavbar;
