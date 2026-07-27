import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  {
    label: "Academics",
    children: [
      { to: "/academics", label: "Programs" },
      { to: "/activities", label: "Student Activities" },
    ],
  },
  {
    label: "Admissions",
    children: [
      { to: "/admissions", label: "Apply" },
      { to: "/faq", label: "FAQs" },
    ],
  },
  {
    label: "School Life",
    children: [
      { to: "/school-life", label: "Daily Life" },
      { to: "/gallery", label: "Gallery" },
      { to: "/transport", label: "Transport & Facilities" },
    ],
  },
  { to: "/news", label: "News" },
  { to: "/staff", label: "Staff" },
  { to: "/policies", label: "Policies" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open ? "glass-dark text-soft shadow-soft" : "bg-transparent text-soft"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="Vision School logo" className="h-9 w-9 lg:h-11 lg:w-11" />
          <div className="leading-tight">
            <div className="font-display font-bold text-base lg:text-lg">Vision School</div>
            <div className="text-[10px] lg:text-[11px] uppercase tracking-widest opacity-80">
              Kindergarten & Primary
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium hover:text-cyan-accent transition-colors">
                  {item.label} <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="glass-dark rounded-xl p-2 min-w-[200px] shadow-glow">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className="block px-3 py-2 rounded-lg text-sm hover:bg-white/10 transition-colors"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-cyan-accent" }}
                className="px-3 py-2 text-sm font-medium hover:text-cyan-accent transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/admissions"
            className="btn-gradient px-5 py-2.5 rounded-full text-sm font-semibold inline-flex items-center"
          >
            Apply Now
          </Link>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass-dark border-t border-white/10 animate-fade-in">
          <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
            {nav.map((item) =>
              item.children ? (
                <details key={item.label} className="group">
                  <summary className="flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer hover:bg-white/10 text-sm font-medium">
                    {item.label}
                    <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="pl-4 mt-1 space-y-1">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        onClick={() => setOpen(false)}
                        className="block px-3 py-2 rounded-lg text-sm hover:bg-white/10"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-white/10"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              to="/admissions"
              onClick={() => setOpen(false)}
              className="btn-gradient block text-center px-5 py-3 rounded-full text-sm font-semibold mt-3"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
