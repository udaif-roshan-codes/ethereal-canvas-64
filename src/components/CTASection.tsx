import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section
      className="relative z-10 px-6 py-32 md:py-40"
      style={{ backgroundColor: "#FAFAFA" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <span
          className="text-sm tracking-widest uppercase"
          style={{ color: "#6F6F6F" }}
        >
          Start a Project
        </span>
        <h2
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-6"
          style={{ color: "#000000", letterSpacing: "-2px" }}
        >
          Ready to build something <em style={{ color: "#6F6F6F", fontStyle: "italic" }}>eternal?</em>
        </h2>
        <p
          className="text-base sm:text-lg max-w-xl mx-auto mt-8 leading-relaxed"
          style={{ color: "#6F6F6F" }}
        >
          We take on a limited number of projects each year to ensure every 
          partnership receives our full attention and care.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <button
            className="group rounded-full px-10 py-4 text-base flex items-center gap-3 transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: "#000000", color: "#FFFFFF" }}
          >
            Begin Journey
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href="mailto:hello@aethera.studio"
            className="text-sm transition-opacity hover:opacity-70 py-4 px-6"
            style={{ color: "#6F6F6F" }}
          >
            or email us directly
          </a>
        </div>
      </div>
    </section>
  );
}
