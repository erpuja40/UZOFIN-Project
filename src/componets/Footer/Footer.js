import UzoFinLogo from "../../assets/images/UzoFinLogo.svg";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import cross from "../../assets/images/cross.svg";
const Footer = () => {
return (
<footer className="bg-black text-white pt-12 pb-8 px-4">
   <div className="border-gray-800 border-t container flex flex-col justify-between lg:flex-row mx-auto overflow-hidden pt-12 px-4">
      {/* Logo */}
      <div className="block mr-4 w-1/3">
         <a href="/">
            <img src={UzoFinLogo} alt="logo" className="w-40 ml-4 lg:ml-0" />
            <p class="max-w-md mx-auto mt-5 leading-relaxed text-center text-gray-400 sm:max-w-xs sm:mx-0 sm:text-left">
               Experience the new age of payments with UzOFin and explore new growth opportunities to reach greater heights
            </p>
         </a>
      </div>
      {/* Links */}
      <div className="w-2/3 block sm:flex text-sm mt-6 lg:mt-0">
         {/* Product */}
         <ul className="text-gray-400 list-none p-0 font-thin flex flex-col text-left w-full">
            <li className="py-2 px-3  text-sm bg-gradient-to-b from-[#37CCF7] to-[#39105E] bg-clip-text text-transparent uppercase font-medium tracking-wide">
               Product
            </li>
            <li><a href="#" className="py-2 px-3 hover:text-white text-base">AI Banking</a></li>
            <li><a href="#" className="py-2 px-3 hover:text-white  text-base">Payment</a></li>
            <li><a href="#" className="py-2 px-3 hover:text-white  text-base">Payout</a></li>
            <li><a href="#" className="py-2 px-3 hover:text-white  text-base">Merchant Onboarding</a></li>
            <li><a href="#" className="py-2 px-3 hover:text-white  text-base">FRM</a></li>
         </ul>
         {/* Company */}
         <ul className="text-gray-400 list-none p-0 font-thin flex flex-col text-left w-full">
            <li className="py-2 px-3  text-sm bg-gradient-to-b from-[#37CCF7] to-[#39105E] bg-clip-text text-transparent uppercase font-medium tracking-wide">
               Company
            </li>
            <li><a href="#" className="py-2 px-3 hover:text-white  text-base">About Us</a></li>
            <li><a href="#" className="py-2 px-3 hover:text-white  text-base">Help Center</a></li>
            <li><a href="#" className="py-2 px-3 hover:text-white  text-base">Contact</a></li>
         </ul>
         {/* Legal */}
         <ul className="text-gray-400 list-none p-0 font-thin flex flex-col text-left w-full">
            <li className="py-2 px-3 text-sm bg-gradient-to-b from-[#37CCF7] to-[#39105E] bg-clip-text text-transparent uppercase font-medium tracking-wide">
               Legal
            </li>
            <li><a href="#" className="py-2 px-3 hover:text-white  text-base">Cookie Policy</a></li>
            <li><a href="#" className="py-2 px-3 hover:text-white  text-base">Privacy Policy</a></li>
            <li><a href="#" className="py-2 px-3 hover:text-white  text-base">Terms of Service</a></li>
         </ul>
         {/* Social */}
         <div className="text-gray-400 flex flex-col w-full">
            <div className="py-2 px-3  text-sm bg-gradient-to-b from-[#37CCF7] to-[#39105E] bg-clip-text text-transparent uppercase font-medium tracking-wide">
               Social
            </div>
            <div className="pl-4 mt-2">
               {/* LinkedIn */}
               <a href="#" className="flex items-center text-gray-300 hover:text-white mr-6">
                  <span className="icon-circle">
                     <FaLinkedin />
                  </span>
                  <span class="py-2 px-3 hover:text-white  text-base">
                  /uzofin
                  </span>
               </a>
               {/* cross social */}
               <a href="#" className="flex items-center text-gray-300 hover:text-white mr-6">
               <span className="icon-circle"> <img src={cross} alt="logo" /></span>
               <span class="py-2 px-3 hover:text-white  text-base">
               /uzofin
               </span>
               </a>
               {/* FaInstagram */}
               <a href="#" className="flex items-center text-gray-300 hover:text-white mr-6">
                  <span className="icon-circle">
                     <FaInstagram />
                  </span>
                  <span class="py-2 px-3 hover:text-white  text-base">
                  /uzofin
                  </span>
               </a>
               {/* FaFacebook */}
               <a href="#" className="flex items-center text-gray-300 hover:text-white mr-6">
                  <span className="icon-circle">
                     <FaFacebook />
                  </span>
                  <span class="py-2 px-3 hover:text-white">
                  /uzofin
                  </span>
               </a>
            </div>
         </div>
      </div>
   </div>
   {/* Bottom Bar */}
   <div class="pt-6 mt-12 border-t border-gray-800 container mx-auto">
      <div class="text-center sm:flex sm:justify-between sm:text-left">
         <p class="text-sm text-gray-400">
            <span class="block sm:inline">India (EN)</span>
         </p>
         <p class="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
            Copyright © 2025 UzOFin. All rights reserved
         </p>
      </div>
   </div>
</footer>
);
};
export default Footer;