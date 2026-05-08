import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Lumina Studio",
    category: "Brand Identity & Web",
    year: "2024",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=800&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Meridian Labs",
    category: "Product Design",
    year: "2024",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1200&h=800&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Cascade Health",
    category: "Digital Platform",
    year: "2023",
    image: "https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?w=1200&h=800&fit=crop&q=80",
  },
];

export function FeaturedWork() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="relative z-10 px-6 py-32" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <span
              className="text-sm tracking-widest uppercase"
              style={{ color: "#6F6F6F" }}
            >
              Selected Work
            </span>
            <h2
              className="font-display text-4xl sm:text-5xl md:text-6xl mt-4"
              style={{ color: "#000000", letterSpacing: "-1.5px" }}
            >
              Stories we&apos;ve <em style={{ color: "#6F6F6F", fontStyle: "italic" }}>told</em>
            </h2>
          </div>
          <a
            href="#"
            className="group flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
            style={{ color: "#000000" }}
          >
            View all projects
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="space-y-px" style={{ backgroundColor: "#E5E5E5" }}>
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden transition-all duration-500 cursor-pointer"
              style={{ backgroundColor: "#FFFFFF" }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between p-8 md:p-12 gap-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                  <span
                    className="text-sm tabular-nums"
                    style={{ color: "#ABABAB" }}
                  >
                    {project.year}
                  </span>
                  <h3
                    className="font-display text-3xl sm:text-4xl md:text-5xl transition-transform duration-500"
                    style={{
                      color: "#000000",
                      transform: hoveredId === project.id ? "translateX(12px)" : "translateX(0)",
                    }}
                  >
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center gap-6">
                  <span
                    className="text-sm"
                    style={{ color: "#6F6F6F" }}
                  >
                    {project.category}
                  </span>
                  <ArrowUpRight
                    className="w-5 h-5 transition-all duration-300"
                    style={{
                      color: "#000000",
                      opacity: hoveredId === project.id ? 1 : 0,
                      transform: hoveredId === project.id ? "translate(4px, -4px)" : "translate(0, 0)",
                    }}
                  />
                </div>
              </div>

              {/* Expanding image on hover */}
              <div
                className="overflow-hidden transition-all duration-500 ease-out"
                style={{
                  maxHeight: hoveredId === project.id ? "400px" : "0px",
                  opacity: hoveredId === project.id ? 1 : 0,
                }}
              >
                <div className="px-8 md:px-12 pb-8 md:pb-12">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover"
                    style={{ filter: "grayscale(100%)" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
