import Img1 from "../../public/sectimg.jpg";
import SectionTitle from "../components/SectionTitle";
import SectionOpacity from "../components/SectionOpacity";


export default function Sect2() {
  return (
    <>
    
    <div className="w-full min-h-screen flex items-center">
        
      <div className="max-w-[1280px] mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between gap-0"> {/* Reduced gap to 0 */}
        {/* Left Section */}

        
        <div className="flex-1 text-white">
          {/* <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Empowering Your Business Through Innovative IT Solutions
          </h1> */}
          <SectionOpacity classes="z-2">
        <SectionTitle title=" our story." classes="px-[0vw] md:px-[0vw] pt-[0vw] z-10  text-white" />
      </SectionOpacity>
          <p className="text-gray-400 text-lg mb-8 max-w-[470px]">
          Webelo.net is an IT solutions company dedicated to delivering innovative and efficient technology services. We specialize in developing custom software applications, providing IT consulting, and offering comprehensive support to businesses seeking to enhance their technological infrastructure.
          </p>
          {/* <button className="bg-[#00F6FF] text-black font-semibold px-8 py-4 rounded-lg hover:bg-[#00D6DD] transition-colors">
            Get Started
          </button> */}
        </div>

        {/* Right Section - Image */}
        <div className="flex-1 relative">
          <img
            src={Img1}
            alt="Credit card analytics interface"
            className="w-full max-w-[600px] object-contain mx-auto"
          />
        </div>
      </div>
    </div>
    </>
  );
}
