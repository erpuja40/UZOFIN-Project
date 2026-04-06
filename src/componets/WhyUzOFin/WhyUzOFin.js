import { GoArrowUpRight } from "react-icons/go";
const features = [
  {
    title: "Dashboard",
    desc: "Arrange banking, payments, and merchants in one place.",
  },
  {
    title: "Analytics",
    desc: "Get real-time insights and performance tracking.",
  },
  {
    title: "Automation",
    desc: "Automate workflows and reduce manual tasks.",
  },
  {
    title: "Security",
    desc: "Advanced encryption and fraud protection.",
  },
  {
    title: "Integration",
    desc: "Connect with multiple APIs and services easily.",
  },
];

const WhyUzOFin = () => {
  return (
    <section className="bg-black text-white py-0 md:py-20 overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col items-center justify-center px-4 text-center mb-12 container mx-auto">
        <h1 className="text-3xl md:text-[80px] mb-4">
          Why <span className="bg-gradient-to-r from-[#714DFF] via-[#9C83FF] to-[#E151FF] bg-clip-text text-transparent">UzOFin?</span>
        </h1>
        <p className="text-xl md:text- md:px-36 text-gray-400 py-2 md:py-8">
          Discover endless creativity with PromptVerse. Generate diverse content effortlessly using prompts.
          Stay updated with real-time trends, automate tasks, and extract insights from any document or URL.
        </p>
      </div>

      {/* Marquee Rows */}
      <div className="space-y-8">

        {/* Row 1 → Right to Left */}
        <div className="flex animate-scroll-left gap-6 w-max">
          {[...features, ...features].map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>

        {/* Row 2 → Left to Right */}
        <div className="flex animate-scroll-right gap-6 w-max">
          {[...features, ...features].map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>

        {/* Row 3 → Right to Left */}
        <div className="flex animate-scroll-left gap-6 w-max">
          {[...features, ...features].map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

/* Card Component */
const Card = ({ item }) => {
  return (
    <div className="min-w-[280px] p-5 rounded-xl transition">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl">{item.title}</h3>
        <GoArrowUpRight />
      </div>
      <p className="text-xl bg-gradient-to-r from-[#006BF1] to-[#00A9DB] bg-clip-text text-transparent">{item.desc}</p>
    </div>
  );
};

export default WhyUzOFin;

