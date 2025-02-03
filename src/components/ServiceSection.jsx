import React from 'react';

const ServiceSection = () => {
  const sectionData = [
    {
      title: "App Development",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      backgroundImage: "https://cdn.pixabay.com/photo/2024/01/29/22/47/ai-generated-8540921_640.jpg",
      position: "absolute -bottom-4 -left-6",
      borderStyles: "border-b-4 border-l-4 border-blue-800"
    },
    {
      title: "App Development",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      backgroundImage: "https://cdn.pixabay.com/photo/2024/02/26/09/17/synthetic-8597464_640.jpg",
      position: "absolute -bottom-4 -right-10",
      borderStyles: "border-b-4 border-l-4 border-blue-800"
    },
    {
      title: "Web Development",
      description: "Web development is a broad term for the work involved in developing a website for the Internet or an intranet.",
      backgroundImage: "https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_640.jpg",
      position: "absolute -bottom-4 -left-6",
      borderStyles: "border-t-4 border-r-4 border-blue-800"
    },
    {
      title: "Web Development",
      description: "Web development is a broad term for the work involved in developing a website for the Internet or an intranet.",
      backgroundImage: "https://cdn.pixabay.com/photo/2023/09/28/07/25/technology-8280863_640.jpg",
      position: "absolute -bottom-4 -right-10",
      borderStyles: "border-t-4 border-r-4 border-blue-800"
    },
    {
      title: "Web Development",
      description: "Web development is a broad term for the work involved in developing a website for the Internet or an intranet.",
      backgroundImage: "https://cdn.pixabay.com/photo/2023/09/28/07/25/technology-8280863_640.jpg",
      position: "absolute -bottom-4 -left-10",
      borderStyles: "border-t-4 border-r-4 border-blue-800"
    }
  ];

  return (
    <div className="relative w-full space-y-12 sm:space-y-10">
      {sectionData.map((section, index) => (
        <div
          key={index}
          className="absolute w-full h-48 sm:h-64 md:h-72 lg:h-80 bg-cover bg-center rounded-lg shadow-md"
          style={{
            backgroundImage: `url(${section.backgroundImage})`,
          }}
        >
          <div className={`bg-white p-2 sm:p-3 rounded-lg shadow-lg max-w-xs sm:max-w-md md:max-w-lg w-[calc(100%-50px)] ${section.position} ${section.borderStyles}`}>
            <h2 className="text-xs sm:text-sm md:text-lg font-bold mb-1 sm:mb-2">{section.title}</h2>
            <p className="text-gray-700 text-xs sm:text-sm md:text-base">{section.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceSection;