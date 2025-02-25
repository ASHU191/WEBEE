import React from 'react'
import SectionTitle from "../components/SectionTitle";
import SectionOpacity from "../components/SectionOpacity";
const Weoffer = () => {
  return (
    <div>
        <SectionOpacity classes="z-2">
        <SectionTitle title=" We Offer." classes="px-[0vw] md:px-[3vw] pt-[3vw] z-10  text-white" />
      </SectionOpacity>
        <div className="py-20 container mx-auto p-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="service-card bg-gradient-to-r from-[#1e1e1e] via-[#0a1f2d] to-[#0a2d4f] rounded-lg shadow-lg p-6 text-center transition-all transform duration-500 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r from-[#0a1f2d] to-[#0a2d4f] text-white">
        <div className="text-5xl mb-4 transition-transform duration-300 transform hover:scale-125">
          🌐
        </div>
        <h3 className="text-2xl font-semibold mb-2 transition-colors duration-300 hover:text-blue-500">
          Web Development
        </h3>
        <p className="text-gray-300 text-start">
          Web Elo offers comprehensive web development solutions designed to elevate your online presence. Our expert team crafts responsive, fast, and secure websites tailored to your business needs. From custom web applications to e-commerce platforms, we focus on delivering a seamless user experience, optimized performance, and a design that reflects your brand’s identity.
        </p>
      </div>

      {/* Card 2 */}
      <div className="service-card bg-gradient-to-r from-[#1e1e1e] via-[#0a1f2d] to-[#0a2d4f] rounded-lg shadow-lg p-6 text-center transition-all transform duration-500 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r from-[#0a1f2d] to-[#0a2d4f] text-white">
        <div className="text-5xl mb-4 transition-transform duration-300 transform hover:scale-125">
          💻
        </div>
        <h3 className="text-2xl font-semibold mb-2 transition-colors duration-300 hover:text-blue-500">
          App Development
        </h3>
        <p className="text-gray-300 text-start">
          At Web Elo, we specialize in creating customized mobile and web applications tailored to meet your business goals. Our experienced team of developers builds intuitive, secure, and scalable apps across iOS, Android, and cross-platform frameworks. From initial concept to deployment, we focus on delivering seamless user experiences and powerful functionalities that drive engagement and growth.
        </p>
      </div>

      {/* Card 3 */}
      <div className="service-card bg-gradient-to-r from-[#1e1e1e] via-[#0a1f2d] to-[#0a2d4f] rounded-lg shadow-lg p-6 text-center transition-all transform duration-500 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r from-[#0a1f2d] to-[#0a2d4f] text-white">
        <div className="text-5xl mb-4 transition-transform duration-300 transform hover:scale-125">
          🎨
        </div>
        <h3 className="text-2xl font-semibold mb-2 transition-colors duration-300 hover:text-blue-500">
          UI/UX Design
        </h3>
        <p className="text-gray-300 text-start">
          At Web Elo, we prioritize creating intuitive and visually engaging user experiences. Our UI/UX team combines research-driven insights with innovative design to build interfaces that captivate users and enhance functionality. From wireframes to high-fidelity prototypes, we ensure every detail aligns with your brand while delivering a seamless, user-centered experience.
        </p>
      </div>

      {/* Card 4 */}
      <div className="service-card bg-gradient-to-r from-[#1e1e1e] via-[#0a1f2d] to-[#0a2d4f] rounded-lg shadow-lg p-6 text-center transition-all transform duration-500 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r from-[#0a1f2d] to-[#0a2d4f] text-white">
        <div className="text-5xl mb-4 transition-transform duration-300 transform hover:scale-125">
          🔍
        </div>
        <h3 className="text-2xl font-semibold mb-2 transition-colors duration-300 hover:text-blue-500">
          SEO Optimization
        </h3>
        <p className="text-gray-300 text-start">
          Web Elo’s SEO Optimization services are designed to improve your website's search engine rankings and drive organic traffic. Our team uses advanced keyword research, on-page and off-page optimization, and technical SEO to enhance visibility and connect you with your target audience. We focus on sustainable, data-driven strategies to boost your online presence and deliver long-term results.
        </p>
      </div>

      {/* Card 5 */}
      <div className="service-card bg-gradient-to-r from-[#1e1e1e] via-[#0a1f2d] to-[#0a2d4f] rounded-lg shadow-lg p-6 text-center transition-all transform duration-500 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r from-[#0a1f2d] to-[#0a2d4f] text-white">
        <div className="text-5xl mb-4 transition-transform duration-300 transform hover:scale-125">
          📈
        </div>
        <h3 className="text-2xl font-semibold mb-2 transition-colors duration-300 hover:text-blue-500">
          Digital Marketing
        </h3>
        <p className="text-gray-300 text-start">
          Web Elo provides tailored digital marketing solutions that drive results. Our team specializes in SEO, social media management, PPC, content marketing, and more to enhance your online visibility and engagement. By leveraging data-driven strategies, we help your brand connect with the right audience, boost conversions, and achieve sustainable growth.
        </p>
      </div>

      {/* Card 6 */}
      <div className="service-card bg-gradient-to-r from-[#1e1e1e] via-[#0a1f2d] to-[#0a2d4f] rounded-lg shadow-lg p-6 text-center transition-all transform duration-500 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r from-[#0a1f2d] to-[#0a2d4f] text-white">
        <div className="text-5xl mb-4 transition-transform duration-300 transform hover:scale-125">
          📷
        </div>
        <h3 className="text-2xl font-semibold mb-2 transition-colors duration-300 hover:text-blue-500">
          Content Creation
        </h3>
        <p className="text-gray-300 text-start">
          At Web Elo, we craft high-quality, engaging content that aligns with your brand’s voice and goals. Our team produces a wide range of content, including blog posts, articles, social media content, and website copy to captivate audiences and boost engagement. With a focus on storytelling and SEO-friendly writing, we help you build a strong, relatable presence online.
        </p>
      </div>
    </div>
  </div></div>
  )
}

export default Weoffer