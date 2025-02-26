import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@mui/material';
import AboutHeader from '../components/AboutHeader';
import SplashCursor from '../components/SplashCursor';

const portfolioItems = [
  { title: "BMI-Interiors", description: "The Premier Interior Design & Fit-out Company in Dubai and UAE.", imageUrl: "./bmi.png", link: "https://www.bmiinterior.com/" },
  { title: "Personal Chat-Bot", description: "An AI assistant tailored to interact, assist, and personalize user experiences.", imageUrl: "./pc.png", link: "https://personal-chatbot-six.vercel.app/" },
  { title: "Coffee Shop", description: "A cozy place serving coffee, pastries, and a relaxing atmosphere.", imageUrl: "./coffee.png", link: "https://coffee-shop-orpin.vercel.app/" },
  { title: "Japanese Dream Tour", description: "A guided journey through Japan's culture, landmarks, cuisine, and traditions.", imageUrl: "./japanesedreamtour.png", link: "https://japanesedreamtour.vercel.app/" },
  { title: "Travel With Me", description: "Travel With Me simplifies booking flights, hotels, and unforgettable adventures.", imageUrl: "./travel.png", link: "https://online-booking-inky.vercel.app/" },
  { title: "Multi Vendor Ecommerce", description: "A platform allowing multiple sellers to list and sell products online.", imageUrl: "./ec.png", link: "https://multi-vendor-client-rho.vercel.app/" },
  { title: "School System", description: "An organized structure for education, managing curriculum, teachers, and students.", imageUrl: "./school.png", link: "https://school-website-rouge-theta.vercel.app/academics" },
  // { title: "Food Bomb", description: "Food Bomb delivers delicious, fast, and convenient meals for everyone.", imageUrl: "", link: "https://ashu191.github.io/FOOD-BOMB/" },
  { title: "Rooza", description: "Helping businesses grow with innovative online marketing strategies.", imageUrl: "./earlx.png", link: "" },
  { title: "The Lex", description: "Exclusive law magazine offering the latest updates in legal news.", imageUrl: "./rooza.png", link: "" },
];

export default function Portfolio() {
  const [visibleItems, setVisibleItems] = useState(6);
  const showAll = visibleItems >= portfolioItems.length;

  const handleViewMore = () => {
    setVisibleItems(showAll ? 6 : portfolioItems.length);
  };

  return (
    <>
      <AboutHeader title="Portfolio" backgroundImage="./heroimg.png" />
      <div className="min-h-screen bg-transparent">
        <header className="py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Explore Our Projects</h1>
          <p className="text-lg text-white mb-8">Discover the innovative solutions we've crafted for various industries.</p>
        </header>

        <main className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.slice(0, visibleItems).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white cursor-pointer rounded-xl overflow-hidden bg-gradient-to-r from-[#1e1e1e] via-[#0a1f2d] to-[#0a2d4f] hover:scale-105">
                  <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-300 transform hover:scale-110 hover:object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-white text-base mb-4">{item.description}</p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-white hover:text-blue-600 hover:underline transition-all duration-300"
                    >
                      Visit Site
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {portfolioItems.length > 6 && (
            <div className="text-center my-12">
              <Button
                onClick={handleViewMore}
                className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                {showAll ? 'Show Less' : 'View More'}
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </main>
      </div>
      <SplashCursor />
    </>
  );
}
