// src/components/Navbar.jsx
const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#install" },
  { label: "Reviews", href: "#testimonials" },
];

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-slate-100">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="text-2xl font-semibold tracking-tight text-primary"
        >
          MyBindle
        </a>

        <div className="hidden items-center gap-10 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#download"
          className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-md shadow-primary/30 transition hover:bg-[#e04a44]"
        >
          Download App
        </a>
      </nav>
    </header>
  );
}
