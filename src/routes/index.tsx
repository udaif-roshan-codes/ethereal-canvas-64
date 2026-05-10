import { createFileRoute } from "@tanstack/react-router";
import { HeroVideo } from "@/components/HeroVideo";
import { ServicesSection } from "@/components/ServicesSection";
import { FeaturedWork } from "@/components/FeaturedWork";
import { TestimonialSection } from "@/components/TestimonialSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import "@/styles/fonts.css";
import "@/styles/theme.css";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Aethera — Beyond silence, we build the eternal" },
      {
        name: "description",
        content:
          "Building platforms for brilliant minds, fearless makers, and thoughtful souls.",
      },
    ],
  }),
});

function Index() {
  const navItems = [
    { label: "Home", color: "#000000" },
    { label: "Studio", color: "#6F6F6F" },
    { label: "About", color: "#6F6F6F" },
    { label: "Journal", color: "#6F6F6F" },
    { label: "Reach Us", color: "#6F6F6F" },
  ];

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden font-body"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="relative min-h-screen flex flex-col">
        <HeroVideo />

        <nav className="relative z-10">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-6">
            <a
              href="/"
              className="font-display text-3xl tracking-tight"
              style={{ color: "#000000" }}
            >
              Aethera<sup className="text-xs align-super">®</sup>
            </a>
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className="text-sm transition-colors hover:opacity-70"
                  style={{ color: item.color }}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <button
              className="rounded-full px-6 py-2.5 text-sm transition-transform hover:scale-[1.03]"
              style={{ backgroundColor: "#000000", color: "#FFFFFF" }}
            >
              Begin Journey
            </button>
          </div>
        </nav>

        <section
          className="relative z-10 flex flex-col items-center justify-start text-center px-6 flex-1"
          style={{ paddingTop: "calc(8rem - 75px)" }}
        >
          <h1
            className="font-display font-normal text-5xl sm:text-7xl md:text-8xl max-w-7xl animate-fade-rise"
            style={{
              color: "#000000",
              lineHeight: 0.95,
              letterSpacing: "-2.46px",
            }}
          >
            Beyond{" "}
            <em style={{ color: "#6F6F6F", fontStyle: "italic" }}>silence,</em> we
            build <em style={{ color: "#6F6F6F", fontStyle: "italic" }}>the eternal.</em>
          </h1>

          <p
            className="text-base sm:text-lg max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay"
            style={{ color: "#6F6F6F" }}
          >
            Building platforms for brilliant minds, fearless makers, and thoughtful
            souls. Through the noise, we craft digital havens for deep work and
            pure flows.
          </p>

          <button
            className="rounded-full px-14 py-5 text-base mt-12 transition-transform hover:scale-[1.03] animate-fade-rise-delay-2"
            style={{ backgroundColor: "#000000", color: "#FFFFFF" }}
          >
            Begin Journey
          </button>
        </section>
      </div>

      <ServicesSection />
      <FeaturedWork />
      <TestimonialSection />
      <PhilosophySection />
      <CTASection />
      <Footer />
    </div>
  );
}
