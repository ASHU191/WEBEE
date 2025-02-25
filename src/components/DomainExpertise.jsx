import React from 'react';
import img1 from "../assets/CardimgAbout1.png";
import img2 from "../assets/CardimgAbout2.png";
import img3 from "../assets/CardimgAbout3.png";
import img4 from "../assets/CardimgAbout4.png";

const DomainExpertise = () => {
  const stats = [
    { value: '70+', label: 'Successful projects delivered' },
    { value: '2+', label: 'Years of industry experience' },
    { value: 'End-to-End', label: 'Web & App Development Solutions' },
  ];

  const highlights = [
    {
      title: 'Committed to quality excellence',
      description:
        'Webelo is committed to providing secure, scalable, and high-quality solutions that adhere to industry best practices. We integrate latest technologies, AI-driven automation, and data security protocols to ensure reliability and compliance. Our dedicated support ensures seamless performance at every stage.',
      bgImage: img1,
    },
    {
      title: 'Pioneers in Web & AI-Driven Solutions',
      description:
        'At Webelo, we take pride in pushing the boundaries of web development, AI-powered automation, and digital transformation. From pioneering next-gen web applications to delivering high-performance SEO and cloud solutions, our expertise empowers businesses to thrive in the ever-evolving digital world.',
      bgImage: img2,
    },
    {
      title: 'Excellence in Service & Performance',
      description:
        'Our commitment to quality has earned us recognition for delivering scalable, secure, and high-performing web solutions. With a focus on speed, UX, and SEO optimization, we ensure that every project exceeds industry standards.',
      bgImage: img3,
    },
    {
      title: 'Harnessing AI for Business Growth',
      description:
        'In 2023, Webelo expanded its vision by integrating AI-driven technologies to revolutionize digital experiences. From automation and predictive analytics to AI-powered marketing and business intelligence, we help companies navigate the complexities of the modern market. Our AI solutions are tailored to drive efficiency, engagement, and innovation across diverse industries.',
      bgImage: img4,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-10 bg-transparent">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-white mb-4 text-shadow">
        Empowering Businesses with <span className="text-blue-600">Cutting-Edge Digital Solutions</span>
        </h2>
        <p className="text-white text-lg max-w-2xl mx-auto">
          TAt Webelo, we specialize in delivering innovative, high-performance web solutions tailored to businesses worldwide. From custom MERN stack development to SEO-driven growth strategies, our expertise ensures that your digital presence stands out in today’s competitive market.
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
        {/* <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-3xl md:text-4xl text-white mb-4 leading-tight">
            A WEB APP DEVELOPMENT<br />
            COMPANY WITH THE<br />
            <span className="text-3xl md:text-4xl text-white font-bold">
              INDUSTRY EXPERTISE TO<br />
              INNOVATE
            </span>
          </h2>
        </div> */}
        {/* Right Side - Paragraph */}
        {/* <div className="md:w-1/2">
          <p className="text-white text-lg leading-relaxed">
            Transforming Technology into Meaningful Impact
          </p>
          <p className="text-white text-lg leading-relaxed mt-10">
            Our approach empowers us to create remarkable experiences that fuel growth and success for all involved. Together, let’s elevate your potential through the strength of digital transformation.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default DomainExpertise;
