import IndustryFuturebanner from "../../assets/images/IndustryFuturebanner.png";
import { FaArrowRight } from "react-icons/fa";

const IndustryFuture = () => {
  return (
    <div className="relative w-full  h-[200px] md:h-[500px] bg-black overflow-hidden">

      {/* Background Image */}
      <img
        src={IndustryFuturebanner}
        alt="banner"
        className="absolute inset-0 object-cover object-center mx-auto"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="absolute md:inset-0 flex flex-col items-center justify-center container mx-auto px-4 text-center text-white">
        
        <h1 className="text-3xl md:text-[73px] mb-4 leading-tight">
          The future of your <br />
          industry{" "}
          <span className="bg-gradient-to-r from-[#714DFF] via-[#9C83FF] to-[#E151FF] bg-clip-text text-transparent">
            starts here
          </span>
        </h1>
        <div className="mt-6 md:mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          
          <button className="btn-primary">

            Book a Demo

            <FaArrowRight className="btn-icon" />
          </button>

          <button className="btn-outline ">

            Build AI

            <FaArrowRight className="btn-icon" />
          </button>

        </div>

      </div>
    </div>
  );
};

export default IndustryFuture;
