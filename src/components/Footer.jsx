import React from "react";
import { Link as RouterLink } from 'react-router-dom';
import { Facebook, LinkedIn, Instagram, YouTube, LocationOn, Phone, Email } from "@mui/icons-material";
import logo from "../assets/logo2.png"; // Adjust path if necessary

export default function Footer() {
  return (
    <footer className="bg-[#040c1c] text-white w-full py-10">
      <div className="container mx-auto px-4 py-10 md:py-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-center md:justify-between gap-8">
          {/* Logo and Social Links */}
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <RouterLink to="/" className="flex items-center text-white mb-4">
              <img src={logo} alt="Web Elo Logo" className="w-56 h-auto rounded-lg" />
            </RouterLink>
            <div className="flex gap-2">
              <a href="https://www.facebook.com/" className="text-white"><Facebook /></a>
              <a href="https://www.linkedin.com/" className="text-white"><LinkedIn /></a>
              <a href="https://www.instagram.com/" className="text-white"><Instagram /></a>
              <a href="https://www.youtube.com/" className="text-white"><YouTube /></a>
            </div>
          </div>

          {/* Services List */}
          <div className="flex flex-col mb-6 md:mb-0 text-center md:text-left">
            <h6 className="mb-2 text-lg font-semibold">Services</h6>
            <ul className="space-y-1">
              {[
                "Android App Development",
                "API Integration",
                "Web App Development",
                "Data Analytics",
                "Chat GPT integration",
                "Machine learning"
              ].map((service) => (
                <li key={service} className="text-white text-sm">{service}</li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="flex flex-col items-center mb-6 md:mb-0 text-center">
            <h6 className="mb-2 text-lg font-semibold">Get In Touch</h6>
            <div className="flex flex-col gap-3">
              <p className="flex items-center gap-2 text-sm">
                <Phone fontSize="small" />
                <a href="tel:03010209887" className="hover:underline text-inherit">03010209887</a>
              </p>
              <p className="flex items-center gap-2 text-sm">
                <Email fontSize="small" />
                <a href="mailto:arsalanaftab191@gmail.com" className="hover:underline text-inherit">arsalanaftab191@gmail.com</a>
              </p>
              <p className="flex items-center gap-2 text-sm">
                <LocationOn fontSize="small" /> Karachi, Pakistan
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 pt-4 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-white/60 text-xs">
          <p>2025 © <RouterLink to="/" className="text-[#9b4dca] hover:text-[#9b4dca]">Web Elo</RouterLink>. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            {/* <RouterLink to="/careers" className="text-white hover:text-[#9b4dca]">Career</RouterLink> */}
            <RouterLink to="/PrivacyPolicy" className="text-white hover:text-[#9b4dca]">Privacy Policy</RouterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
