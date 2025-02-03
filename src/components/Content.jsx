// File: ArrowComponent.jsx
import React from "react";

function Content() {
  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      <div className="flex flex-col md:flex-row bg-blue-800 rounded-xl p-6 md:p-8 max-w-5xl shadow-lg space-y-6 md:space-y-0 md:space-x-8">

        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2 text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 md:mb-6 leading-tight">
            Content That Powers Business Growth
          </h2>
          <p className="text-base md:text-lg text-gray-200 mb-6 md:mb-8 leading-relaxed">
            Done-for-you content marketing plans for start-ups, B2B, and technology companies. 
            Arrow is the ONLY platform that combines the best of AI and world-class content experts 
            all in one solution.
          </p>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 md:py-3 px-6 md:px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Learn More ↗
          </button>
        </div>

        {/* Image / Mockup Section */}
        <div className="flex items-center justify-center md:w-1/2">
          <img
            src="/src/assets/image 4.png" // replace with the actual image URL
            alt="Mockup or Relevant Visual"
            className="rounded-lg shadow-lg w-3/4 md:w-full max-w-xs md:max-w-full"
          />
        </div>

      </div>
    </div>
  );
}

export default Content;