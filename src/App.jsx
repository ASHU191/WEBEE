// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <Router>
        <Navbar />
      
      <main>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/services" element={<Services />} />
  <Route path="/about-us" element={<AboutUs />} />
  <Route path="/portfolio" element={<Portfolio />} />
  <Route path="/Contact" element={<Contact />} />
  <Route path="/careers" element={<Careers />} />
  <Route path="/privacy-policy" component={PrivacyPolicy} />


</Routes>

      </main>
      <Footer />
    </Router>
  );
}

export default App;
