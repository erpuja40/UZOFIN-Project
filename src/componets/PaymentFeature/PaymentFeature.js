import { useEffect, useRef } from "react";
import animationcircle from "../../assets/images/animation-circle.svg";
/* ================= DATA ================= */
const features = [
{
title: "AI Banking",
description:
"Smart, automated digital banking for businesses. Instant onboarding, intelligent insights, and real-time account operations.",
stats: "3,969 TRANSACTIONS PER SECOND",
},
{
title: "Payments",
description:
"Fast, secure, and scalable payment infrastructure. Send and receive money globally with ease.",
stats: "1,675 VALIDATOR NODES",
},
{
title: "Payouts",
description:
"Bulk, automated payouts built for high-volume businesses. Reliable, trackable, and lightning-fast disbursements.",
},
{
title: "Merchant Onboarding",
description:
"Frictionless onboarding for merchants at any scale. Automated KYC, verification, and risk assessments done in minutes.",
},
];
const PaymentFeature = () => {
const circleRef = useRef(null);
useEffect(() => {
const handleScroll = () => {
const scrollY = window.scrollY;
if (circleRef.current) {
circleRef.current.style.transform = `rotate(${scrollY * 0.2}deg)`;
}
};
window.addEventListener("scroll", handleScroll);
return () => window.removeEventListener("scroll", handleScroll);
}, []);
return (
<section id="PaymentFeature" className="hero-bg px-4 md:px:0 md:pt-44">
   <div className="flex flex-wrap gap-8 container m-auto">
      {/* LEFT */}
      <div className="w-full md:w-1/3 md:ml-auto text-white">
         <h4 className="lg:text-4xl md:ps-0">
            Your Business Pays Are Now Faster and Secure
         </h4>
         <img
            ref={circleRef}
            src={animationcircle}
            alt="animationcircle"
            className="mt-8 transition-transform duration-300 w-1/2 md:w-full"
            />
      </div>
      {/* MIDDLE STATS */}
      <div className="w-full md:w-1/3 md:mr-auto lg:ps-44 xl:ps-32 2xl:ps-28">
         <div className="text-white space-y-10">
            {/* 11.5M */}
            <div>
               <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-[101px] leading-none bg-gradient-to-r from-[#AB5EFF] to-[#00FFF3] bg-clip-text text-transparent">
                  11.5M+
               </h2>
               <p className="text-sm sm:text-base mt-2 text-text-gray400">
                  Transactions processed monthly
               </p>
            </div>
            {/* 99.9% */}
            <div>
               <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-[106px] leading-none bg-gradient-to-r from-[#0047FF] to-[#00BCD4] bg-clip-text text-transparent">
                  99.9%
               </h2>
               <p className="text-sm sm:text-base mt-2 text-text-gray400">
                  Platform uptime and reliability
               </p>
            </div>
            {/* 70% Faster */}
            <div>
               <h2 className="inline-flex items-end 
                  text-3xl sm:text-4xl md:text-6xl lg:text-[132px] 
                  leading-none bg-gradient-to-l from-[#00FFBD] to-[#025B8C] 
                  bg-clip-text text-transparent">
                  70%
                  <span className="text-sm sm:text-lg md:text-2xl lg:text-5xl ml-2">
                  Faster
                  </span>
               </h2>
               <p className="text-sm sm:text-base mt-2 text-text-gray400">
                  Merchant onboarding with AI automation
               </p>
            </div>
         </div>
      </div>
      {/* RIGHT SECTION */}
      <section class="text-white py-12 md:py-20 md:px-6 relative overflow-hidden">
         <div class="absolute inset-0 
            bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.15),transparent_40%),
            radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.15),transparent_40%)]">
         </div>
         <div class="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="md:ps-20">
               <h2 class="text-3xl md:text-5xl leading-tight mb-6">
                  Our Intelligent <br /> Financial Suite
               </h2>
               <p class="text-gray-400 text-sm md:text-base">
                  <span class="text-cyan-400 mr-2">•</span>
                  Tools That Accelerate Every Step Of Your Financial Workflow.
               </p>
            </div>
            <div class="grid sm:grid-cols-2 gap-6">
               <div class="bg-[#0a0a0a70] p-6 rounded-2xl relative mt-20">
                  <div class="flex items-center gap-3 mb-4">
                     <span class="w-[3px] h-6 bg-cyan-400"></span>
                     <h3 class="text-2xl">AI Banking</h3>
                  </div>
                  <p class="text-gray-400 text-lg mb-6">
                     Smart, automated digital banking for businesses. Instant onboarding,
                     intelligent insights, and real-time account operations.
                  </p>
                  <p class="text-xl"><span class="text-cyan-400 mr-2">•</span>3,969</p>
                  <span class="text-base text-gray-500 tracking-widest">
                  TRANSACTIONS PER SECOND
                  </span>
               </div>
               <div class="bg-[#0a0a0a70] p-6 rounded-2xl relative">
                  <div class="flex items-center gap-3 mb-4">
                     <span class="w-[3px] h-6 bg-yellow-400"></span>
                     <h3 class="text-2xl">Payments</h3>
                  </div>
                  <p class="text-gray-400 text-lg mb-6">
                     Fast, secure, and scalable payment infrastructure. Send and receive money globally.
                  </p>
                  <p class="text-2xl"><span class="text-cyan-400 mr-2">•</span>1,675</p>
                  <span class="text-base text-gray-500 tracking-widest">
                  VALIDATOR NODES
                  </span>
               </div>
               <div class="bg-[#0a0a0a70] p-6 rounded-2xl relative mt-8">
                  <div class="flex items-center gap-3 mb-4">
                     <span class="w-[3px] h-6 bg-purple-500"></span>
                     <h3 class="text-2xl">Payouts</h3>
                  </div>
                  <p class="text-gray-400  text-lg mb-6">
                     Bulk, automated payouts built for high-volume businesses. Reliable and lightning-fast disbursements.
                  </p>
                  <p class="text-2xl"><span class="text-cyan-400 mr-2">•</span>163,077,581,394</p>
                  <span class="text-base text-gray-500 tracking-widest">TRANSACTIONS PER SECOND</span>
               </div>
               <div class="bg-[#0a0a0a70] p-6 rounded-2xl relative">
                  <div class="flex items-center gap-3 mb-4">
                     <span class="w-[3px] h-6 bg-green-400"></span>
                     <h3 class="text-2xl">Merchant Onboarding</h3>
                  </div>
                  <p class="text-gray-400  text-lg mb-6">
                     Frictionless onboarding for merchants. Automated KYC and verification in minutes.
                  </p>
                  <p class="text-2xl">100%</p>
                  <span class="text-base text-gray-500 tracking-widest uppercase">On-time merchant Onboard</span>
               </div>
            </div>
         </div>
      </section>
   </div>
</section>
);
};
export default PaymentFeature;