const footerLinks = {
  studio: [
    { label: "Home", href: "#" },
    { label: "Studio", href: "#" },
    { label: "About", href: "#" },
    { label: "Journal", href: "#" },
  ],
  services: [
    { label: "Digital Platforms", href: "#" },
    { label: "Brand Identity", href: "#" },
    { label: "Creative Direction", href: "#" },
    { label: "Product Design", href: "#" },
  ],
  connect: [
    { label: "Twitter", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Dribbble", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer
      className="relative z-10 px-6 py-16 md:py-20"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-1">
            <a
              href="/"
              className="font-display text-2xl tracking-tight"
              style={{ color: "#FFFFFF" }}
            >
              Aethera<sup className="text-xs align-super">®</sup>
            </a>
            <p
              className="text-sm leading-relaxed mt-4 max-w-xs"
              style={{ color: "#6F6F6F" }}
            >
              Beyond silence, we build the eternal. A creative studio for 
              brilliant minds and thoughtful souls.
            </p>
          </div>

          <div>
            <h4
              className="text-xs tracking-widest uppercase mb-6"
              style={{ color: "#6F6F6F" }}
            >
              Studio
            </h4>
            <ul className="space-y-3">
              {footerLinks.studio.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-opacity hover:opacity-70"
                    style={{ color: "#FFFFFF" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-xs tracking-widest uppercase mb-6"
              style={{ color: "#6F6F6F" }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-opacity hover:opacity-70"
                    style={{ color: "#FFFFFF" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-xs tracking-widest uppercase mb-6"
              style={{ color: "#6F6F6F" }}
            >
              Connect
            </h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-opacity hover:opacity-70"
                    style={{ color: "#FFFFFF" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: "#1A1A1A" }}
        >
          <p className="text-xs" style={{ color: "#6F6F6F" }}>
            © 2024 Aethera Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs transition-opacity hover:opacity-70"
              style={{ color: "#6F6F6F" }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs transition-opacity hover:opacity-70"
              style={{ color: "#6F6F6F" }}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
