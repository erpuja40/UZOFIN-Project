import { GoCheckCircle } from "react-icons/go";

const data = [
  {
    title: "Scalability & Integration",
    desc: "LLorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed. Know more",
  },
  {
    title: "Step-by-step guide",
    desc: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed. Know more",
  },
  {
    title: "SaaS based solution",
    desc: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed. Know more",
  },
  {
    title: "Modern & clean design",
    desc: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed. Know more",
  },
];

const IndustrySupport = () => {
  return (
    <section className="bg-gradient-custom text-white py-16 overflow-hidden">

      {/* Header */}
      <div className="flex flex-col items-center justify-center px-4 text-center mb-12">
        <p className="text-secondary text-3xl md:text-3xl">
          24/7 Support
        </p>
        <h1 className="text-3xl md:text-[80px] font-bold my-8">
          Industry{" "}
          <span className="bg-gradient-to-r from-[#714DFF] via-[#9C83FF] to-[#E151FF] bg-clip-text text-transparent">
            Standard
          </span>
        </h1>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden">
        <div className="animate-marquee gap-6 md:flex">

          {[...data, ...data].map((item, index) => (
            <div
              key={index}
              className={`
                group
                w-[500px]
                flex-shrink-0
                bg-card
                rounded-2xl
                flex flex-col justify-between
                transition-all duration-300
                hover:scale-105
                ${index % 2 === 0 ? "float-up" : "float-down"}
              `}
            >
              {/* Content */}
              <div className="text-center p-12">
                <h3 className="text-2xl md:text-3xl mb-2 text-white">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-base md:text-2xl">
                  {item.desc}
                </p>
              </div>

              {/* Icon (SHOW ON HOVER) */}
              <div className="flex justify-end pb-4 pr-4">
                <GoCheckCircle
                  className="
                    text-3xl text-primary-light
                    opacity-0 translate-y-4
                    transition-all duration-500 ease-out

                    group-hover:opacity-100
                    group-hover:translate-y-0
                  "
                />
              </div>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default IndustrySupport;
