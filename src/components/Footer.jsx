import React from "react";

const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#install" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Download", href: "#download" },
];

const Footer = () => {
  return (
    <footer className="bg-neutralSoft text-neutralText">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-6 py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <h5 className="font-display text-lg font-semibold">MyBindle</h5>
            <p className="max-w-sm text-[0.75rem] text-neutralText/70">
              Stay close to the people who light up your world. We help moments
              turn into memories.
            </p>
          </div>
          <nav className="flex flex-wrap gap-5 text-[0.75rem] text-neutralText/70">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            {[0, 1, 2].map((item) => (
              <span
                key={item}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white"
              ></span>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#E8E8EA] py-4 text-center text-[0.65rem] text-neutralText/60">
        © {new Date().getFullYear()} MyBindle. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
