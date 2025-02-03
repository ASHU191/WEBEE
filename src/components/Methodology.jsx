import React from "react";
import { FaProjectDiagram, FaRegClipboard, FaDrawPolygon, FaLaptopCode, FaRocket } from "react-icons/fa";

const steps = [
  {
    icon: <FaProjectDiagram size={40} />,
    title: "Discovery and Consultation",
    description:
      "We begin by understanding your specific goals, challenges, and requirements through in-depth consultations. This step ensures we align our strategies with your vision and objectives.",
    step: "Step 1",
  },
  {
    icon: <FaRegClipboard size={40} />,
    title: "Strategic Planning",
    description:
      "Our team develops a comprehensive plan that outlines the project scope, timelines, and resources needed. This strategic framework serves as a roadmap for the entire development process.",
    step: "Step 2",
  },
  {
    icon: <FaDrawPolygon size={40} />,
    title: "Development and Implementation",
    description:
      "We utilize agile methodologies to develop and implement your solution, ensuring flexibility and adaptability. Regular updates and feedback loops keep you informed and involved throughout the process.",
    step: "Step 3",
  },
  {
    icon: <FaLaptopCode size={40} />,
    title: "Testing and Quality Assurance",
    description:
      "Rigorous testing is conducted to ensure the solution meets the highest standards of quality and performance. We address any issues before launch, ensuring a seamless user experience.",
    step: "Step 4",
  },
  {
    icon: <FaRocket size={40} />,
    title: "Post-Launch Support and Optimization",
    description:
      "After deployment, we provide ongoing support and optimization services to ensure your solution remains effective and up-to-date, helping you achieve long-term success and growth.",
    step: "Step 5",
  },
];

const Methodology = () => {
  return (
    <div className="px-8 py-16 bg-transparent">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white mb-4">
          Our Proven Approach to Achieve Your Objectives
        </h2>
        <p className="text-lg text-gray-300">
          At Web Elo, we believe that a structured approach is key to achieving your business objectives effectively. Our proven five-step process ensures that we understand your needs, deliver high-quality solutions, and provide ongoing support for long-term success.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
        {steps.map((step, index) => (
         <div
         key={index}
         className="flex flex-col items-center p-6 rounded-lg shadow-lg bg-gradient-to-r from-[#1e1e1e] via-[#0a1f2d] to-[#0a2d4f] hover:scale-105 transition-all duration-300 ease-in-out transform hover:shadow-xl hover:bg-gradient-to-r from-[#0a1f2d] to-[#0a2d4f]"
       >
            <div className="text-white mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{step.step}</h3>
            <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
            <p className="text-sm text-white opacity-90">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Methodology;
