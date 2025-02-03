import React from 'react';

const AdvantagesAbout = () => {
  const advantages = [
    {
      title: 'Cultural alignment',
      description: 'Having a common language and culture makes collaboration easier and helps build relationships.',
      icon: '📄', // Replace with an appropriate icon if available
    },
    {
      title: 'Cost-efficiency',
      description: 'Access expertise, optimize resources, and increase return on investment by leveraging skilled talent at a lower cost.',
      icon: '💵', // Replace with an appropriate icon if available
    },
    {
      title: 'Collaborative development',
      description: 'Our English-speaking web app developers use the latest tools for seamless communication with your team.',
      icon: '🤝', // Replace with an appropriate icon if available
    },
    {
      title: 'Compatible time zones',
      description: 'Reduce delays and ensure work productivity with the agility needed to meet deadlines.',
      icon: '⏰', // Replace with an appropriate icon if available
    },
    {
      title: 'Geographical proximity',
      description: 'Proximal to provide meetings, foster relationships, and collaborate within similar time zones.',
      icon: '🌐', // Replace with an appropriate icon if available
    },
    {
      title: 'Quality of talent',
      description: 'With our skilled workforce and curated hiring process, our engineers are in the top 1% of tech talent.',
      icon: '🌟', // Replace with an appropriate icon if available
    },
  ];

  return (
    <div className=" text-white p-8 rounded-3xl max-w-7xl mx-auto my-10 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Advantages of Web App Development with Web Elo</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 rounded-lg shadow-lg bg-gradient-to-r from-[#1e1e1e] via-[#0a1f2d] to-[#0a2d4f] hover:scale-105 transition-all duration-300 ease-in-out transform hover:shadow-xl hover:bg-gradient-to-r from-[#0a1f2d] to-[#0a2d4f]"
          >
            {/* Icon */}
            <div className="text-4xl mb-4">{advantage.icon}</div>
            {/* Title */}
            <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
            {/* Description */}
            <p className="text-sm text-gray-300">{advantage.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvantagesAbout;
