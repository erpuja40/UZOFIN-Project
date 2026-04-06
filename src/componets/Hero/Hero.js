import bannerL from "../../assets/images/Frame-L.svg";
import bannerR from "../../assets/images/Frame-R.svg";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative bg-black min-h-[500px] md:min-h-[700px] pt-16 overflow-hidden flex items-center justify-center text-center">

      {/* Left Image */}
      <img
        src={bannerL}
        alt=""
        className="absolute left-0 top-0 object-cover animate-left w-1/2 xl:w-auto"
        style={{ animationDelay: "0.2s", opacity: 0 }}
      />

      {/* Right Image */}
      <img
        src={bannerR}
        alt=""
        className="absolute right-0 top-0 object-cover animate-right w-1/2 xl:w-auto"
        style={{ animationDelay: "0.4s", opacity: 0 }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16 pt-4 md:pt-20 flex flex-col items-center">

        <div className="max-w-[92rem]">

          {/* Heading */}
          <h2
            className="text-white text-[20px] leading-[40px] md:text-[48px] md:leading-[56px] lg:text-[64px] lg:leading-[90px] animate-fadeUp"
            style={{ animationDelay: "0.6s", opacity: 0 }}
          >
            AI-powered{" "}
            <span className="bg-gradient-to-r from-[#00FFF3] to-[#AB5EFF] bg-clip-text text-transparent">
              Banking & Payment Solutions
            </span>{" "}
            built for Modern Businesses
          </h2>

          {/* Paragraph */}
          <p
            className="text-text-gray400 mt-4 p-4 text-base sm:text-lg md:text-xl lg:text-2xl xl:px-48"
            style={{
              animation: "fadeUp 0.8s ease forwards",
              animationDelay: "0.8s",
              opacity: 0,
            }}
          >
            UzOfin brings intelligent automation, real-time payments, and seamless
            financial operations together so you can scale without friction.
          </p>

          {/* Buttons */}
          <div
            className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center"
            style={{
              animation: "fadeUp 0.8s ease forwards",
              animationDelay: "1s",
              opacity: 0,
            }}
          >
            {/* Button 1 */}
            <button className="btn-primary">

              Start building
              <FaArrowRight className="btn-icon" />
            </button>

            {/* Button 2 */}
            <button className="btn-outline">

              Read Docs
              <FaArrowRight className="btn-icon" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
