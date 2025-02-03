import React from 'react';
import img1 from "../assets/CardimgAbout1.png";
import img2 from "../assets/CardimgAbout2.png";
import img3 from "../assets/CardimgAbout3.png";
import img4 from "../assets/CardimgAbout4.png";

const DomainExpertise = () => {
  const stats = [
    { value: '200+', label: 'Customers worldwide' },
    { value: '25+', label: 'Years on NASDAQ: NTWK' },
    { value: '350+', label: 'Successful implementations' },
  ];

  const highlights = [
    {
      title: 'Committed to quality excellence',
      description:
        'To ensure its offerings are compliant with various international quality standards, Web Elo meticulously adheres to various quality stipulations issued by quality ensuring authorities. The highest internationally recognized quality assurance standard for enhancing software development processes. In addition, the company successfully achieved both SOC 2 Type 1 and SOC 2 Type 2 compliance, demonstrating the company’s continued dedication to safeguarding the data of its clients and their customers.',
      bgImage: img1,
    },
    {
      title: 'Pioneers in the industry',
      description:
        'We are proud to be the first to introduce a full suite of mobile-enabled digital transformation solutions for the global asset finance and leasing industry (formerly NFS Digital). Web Elo also pioneered the world’s first marketplace of AI-driven products for the global credit, finance, and leasing industry (formerly Appex Now).',
      bgImage: img2,
    },
    {
      title: 'Ensured service levels',
      description:
        'We have received various awards and recognition for the quality of our solutions and services over the years.',
      bgImage: img3,
    },
    {
      title: 'Harnessing the power of AI',
      description:
        'In 2023, Web Elo embarked on a groundbreaking journey, establishing its AI division with the vision to utilize the power of AI to revolutionize how institutions navigate the complexities of the modern market. Today, as a trusted industry leader in its realm of AI-powered innovation, Web Elo transforms the software landscape. From risk assessment to customer engagement, AI solutions empower our partners to stay ahead in an ever-evolving industry. We now cater to the diverse range of other sectors as well.',
      bgImage: img4,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-10 bg-transparent">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-white mb-4 text-shadow">
          Domain <span className="text-blue-600">expertise</span>
        </h2>
        <p className="text-white text-lg max-w-2xl mx-auto">
          The company’s core focus since its inception has been the provision of cutting-edge technology solutions for the financial services industry and specifically the global asset finance and leasing sector.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mt-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <h3 className="text-4xl font-semibold text-white">{stat.value}</h3>
            <p className="text-white text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Highlights Section with white text */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-10">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className={`p-6 py-10 rounded-lg shadow-lg relative ${index % 3 === 0 ? 'md:col-span-8 col-span-1' : 'md:col-span-4 col-span-1'}`}
            style={{
              backgroundImage: `url(${highlight.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

            <h4 className="text-2xl font-bold text-white mb-4 relative z-10">{highlight.title}</h4>
            <p className="text-white text-sm relative z-10">{highlight.description}</p>
          </div>
        ))}
      </div>

      {/* Text Section */}
      <div className="max-w-7xl mx-auto p-8 flex flex-col md:flex-row items-center">
        {/* Left Side - Heading */}
        <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-3xl md:text-4xl text-white mb-4 leading-tight">
            A WEB APP DEVELOPMENT<br />
            COMPANY WITH THE<br />
            <span className="text-3xl md:text-4xl text-white font-bold">
              INDUSTRY EXPERTISE TO<br />
              INNOVATE
            </span>
          </h2>
        </div>
        {/* Right Side - Paragraph */}
        <div className="md:w-1/2">
          <p className="text-white text-lg leading-relaxed">
            Transforming Technology into Meaningful Impact
          </p>
          <p className="text-white text-lg leading-relaxed mt-10">
            Our approach empowers us to create remarkable experiences that fuel growth and success for all involved. Together, let’s elevate your potential through the strength of digital transformation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DomainExpertise;
