import React from 'react';

const BusinessGrowthCard = () => {
  return (
    <div className="bg-[#0A1B3D] w-full container rounded-2xl mx-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Empowering Businesses with IT Innovation
            </h1>
            <p className="text-gray-300 text-lg">
              At WebElo, we provide expert IT consulting and tailored technology solutions to help businesses of all sizes thrive. Our team delivers customized strategies in areas like cybersecurity, cloud solutions, and system integration, ensuring improved efficiency and long-term success. We combine advanced technology with industry expertise to drive measurable business growth and digital transformation.
            </p>
            <button className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity">
              Connect With US
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Right Content - Mockup */}
          <div className="relative mt-8 lg:mt-0">
            <img src="./R.jpg" alt="Business Growth Mockup" className="rounded-lg shadow-lg" />
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-300 rounded-full animate-bounce" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessGrowthCard;
