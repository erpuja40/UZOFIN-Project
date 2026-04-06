import StartBuilding from "../../assets/images/StartBuilding.png";
import { FaArrowRight  } from "react-icons/fa";
const PowerApi = () => {
  return (
    <>
<div className="relative w-full h-[300px] md:h-[400px] bg-black">
  
  {/* Background Image */}
    <img
        src={StartBuilding}
        alt=""
        className="absolute top-0 left-0 w-full object-cover"
      />
  {/* Text Content */}
  <div className="absolute container mx-auto md:inset-0 leading-tight flex flex-col justify-center items-center text-center text-white px-4">
    <h1 className="text-3xl  md:text-[80px] mb-4">
      Build Faster with Our <span className="bg-gradient-to-r from-[#714DFF] via-[#9C83FF] to-[#E151FF] bg-clip-text text-transparent">Powerful API’s</span>
    </h1>
    <p className="text-sm md:text-xl max-w-2xl py-6">
     Plug into secure, developer-friendly financial API’s and launch in days, not months
    </p>
     <button className="btn-primary mt-5">
            Start building
             <FaArrowRight className="btn-icon" />
           </button>
  </div>

</div>

    </>
  );
};

export default PowerApi;
