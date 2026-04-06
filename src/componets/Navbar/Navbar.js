import { useState } from "react";
import { FaChevronDown, FaBars, FaTimes,FaArrowRight  } from "react-icons/fa";
import UzoFinLogo from "../../assets/images/UzoFinLogo.svg";
function Navbar() {
const [open, setOpen] = useState(false);
const [active, setActive] = useState("AI Banking");
const menu = ["AI Banking", "Payments", "Payouts", "Support"];
return (
<header className="absolute top-0 left-0 w-full py-4 z-50 bg-black/50 text-white">
   <div className="max-w-7xl mx-auto px-4 container">
      <div className="flex justify-between items-center h-16">
         {/* Logo */}
         <img src={UzoFinLogo} alt="logo" className="w-28" />
         {/* Desktop Menu */}
         <nav className="hidden md:flex space-x-6">
            {menu.map((item) => (
            <div
               key={item}
               onClick={() =>
               setActive(item)}
               className="flex items-center gap-1 cursor-pointer group"
               >
               {/* Text */}
               <span
               className={
               active === item
               ? "text-white"
               : "text-text-gray400 group-hover:text-white text-base"
               }
               >
               {item}
               </span>
               {/* Arrow */}
               {active !== item && (
               <FaChevronDown className="text-xs text-text-gray400 transition-transform duration-300 group-hover:rotate-180" />
               )}
            </div>
            ))}
         </nav>
         <button className="btn-primary">
            Start building
            <FaArrowRight className="btn-icon" />
         </button>
         {/* Mobile Icon */}
         <button
            className="md:hidden text-2xl"
            onClick={() =>
            setOpen(!open)}
            >
            {open ? 
            <FaTimes />
            : 
            <FaBars />
            }
         </button>
      </div>
      {/* Mobile Menu */}
      {open && (
      <div className="md:hidden bg-black/90 p-4 space-y-4">
         {menu.map((item) => (
         <p
            key={item}
            onClick={() => setActive(item)}
            className={
            active === item
            ? "text-white"
            : "text-text-gray400"
            }
            >
            {item}
         </p>
         ))}
      </div>
      )}
   </div>
</header>
);
}
export default Navbar;