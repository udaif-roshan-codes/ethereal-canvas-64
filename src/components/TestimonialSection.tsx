export function TestimonialSection() {
  return (
    <section
      className="relative z-10 px-6 py-32 md:py-40"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <blockquote
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
          style={{ color: "#FFFFFF", letterSpacing: "-1px" }}
        >
          &ldquo;Working with Aethera felt like finding a creative partner who 
          truly <em style={{ color: "#6F6F6F", fontStyle: "italic" }}>understood</em> our 
          vision. They didn&apos;t just build a website—they crafted an 
          <em style={{ color: "#6F6F6F", fontStyle: "italic" }}> experience.</em>&rdquo;
        </blockquote>

        <div className="mt-12 flex flex-col items-center gap-4">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium"
            style={{ backgroundColor: "#1A1A1A", color: "#FFFFFF" }}
          >
            SK
          </div>
          <div>
            <p className="text-sm" style={{ color: "#FFFFFF" }}>
              Sarah Kim
            </p>
            <p className="text-sm" style={{ color: "#6F6F6F" }}>
              Founder, Lumina Studio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
