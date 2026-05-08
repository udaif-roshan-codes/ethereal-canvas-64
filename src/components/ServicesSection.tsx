import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Digital Platforms",
    description:
      "Crafting immersive web experiences that captivate and convert. From concept to deployment, we build digital foundations that endure.",
  },
  {
    number: "02",
    title: "Brand Identity",
    description:
      "Distilling your essence into visual language that resonates. We create identities that speak volumes in their simplicity.",
  },
  {
    number: "03",
    title: "Creative Direction",
    description:
      "Guiding vision into reality with intentional strategy. Every pixel, every word, every interaction considered.",
  },
  {
    number: "04",
    title: "Product Design",
    description:
      "Designing tools that feel like extensions of thought. Intuitive interfaces that disappear into pure experience.",
  },
];

export function ServicesSection() {
  return (
    <section className="relative z-10 px-6 py-32" style={{ backgroundColor: "#FAFAFA" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <span
              className="text-sm tracking-widest uppercase"
              style={{ color: "#6F6F6F" }}
            >
              What We Do
            </span>
            <h2
              className="font-display text-4xl sm:text-5xl md:text-6xl mt-4"
              style={{ color: "#000000", letterSpacing: "-1.5px" }}
            >
              Crafted with <em style={{ color: "#6F6F6F", fontStyle: "italic" }}>intention</em>
            </h2>
          </div>
          <p
            className="text-base max-w-md leading-relaxed"
            style={{ color: "#6F6F6F" }}
          >
            We partner with visionaries who refuse to settle. Every project is a 
            collaboration in pursuit of excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: "#E5E5E5" }}>
          {services.map((service) => (
            <div
              key={service.number}
              className="group p-8 md:p-12 transition-colors cursor-pointer"
              style={{ backgroundColor: "#FAFAFA" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#FAFAFA";
              }}
            >
              <div className="flex items-start justify-between mb-6">
                <span
                  className="text-sm"
                  style={{ color: "#ABABAB" }}
                >
                  {service.number}
                </span>
                <ArrowUpRight
                  className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  style={{ color: "#000000" }}
                />
              </div>
              <h3
                className="font-display text-2xl sm:text-3xl mb-4"
                style={{ color: "#000000" }}
              >
                {service.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#6F6F6F" }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
