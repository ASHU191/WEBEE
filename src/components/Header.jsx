// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/about-us">About Us</Link>
      <Link to="/industries">Industries</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/careers">Careers</Link>
    </nav>
  );
}
