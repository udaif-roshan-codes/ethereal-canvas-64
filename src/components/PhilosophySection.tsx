const principles = [
  {
    title: "Intentional Design",
    description: "Every element serves a purpose. We strip away the unnecessary to reveal what truly matters.",
  },
  {
    title: "Timeless Craft",
    description: "Trends fade, but good design endures. We create work that ages gracefully.",
  },
  {
    title: "Deep Collaboration",
    description: "The best work emerges from genuine partnership. We listen before we create.",
  },
];

export function PhilosophySection() {
  return (
    <section className="relative z-10 px-6 py-32" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <span
              className="text-sm tracking-widest uppercase"
              style={{ color: "#6F6F6F" }}
            >
              Our Philosophy
            </span>
            <h2
              className="font-display text-4xl sm:text-5xl md:text-6xl mt-4"
              style={{ color: "#000000", letterSpacing: "-1.5px" }}
            >
              Less noise, <br />
              more <em style={{ color: "#6F6F6F", fontStyle: "italic" }}>meaning</em>
            </h2>
            <p
              className="text-base leading-relaxed mt-8 max-w-md"
              style={{ color: "#6F6F6F" }}
            >
              In a world of constant distraction, we believe in the power of 
              restraint. Our approach is rooted in clarity, intention, and an 
              unwavering commitment to craft.
            </p>
            <button
              className="rounded-full px-8 py-3.5 text-sm mt-10 transition-transform hover:scale-[1.03]"
              style={{ backgroundColor: "#000000", color: "#FFFFFF" }}
            >
              About Our Studio
            </button>
          </div>

          <div className="space-y-0">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className="py-8 border-t"
                style={{ borderColor: "#E5E5E5" }}
              >
                <div className="flex items-start gap-6">
                  <span
                    className="text-sm tabular-nums pt-1"
                    style={{ color: "#ABABAB" }}
                  >
                    0{index + 1}
                  </span>
                  <div>
                    <h3
                      className="font-display text-xl sm:text-2xl mb-3"
                      style={{ color: "#000000" }}
                    >
                      {principle.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#6F6F6F" }}
                    >
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
