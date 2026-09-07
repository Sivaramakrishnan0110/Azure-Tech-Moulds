import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import Logo from "./Logo";
import { company } from "../data/company";
import { services } from "../data/services";

const navLink =
  "text-[15px] font-medium tracking-tight transition-colors hover:text-maroon";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-paper/95 backdrop-blur border-b transition-shadow ${
        scrolled ? "border-steel-line shadow-[0_1px_0_0_rgba(0,0,0,0.04)]" : "border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Azure Tech Moulds home">
            <Logo alt="Azure Tech Moulds logo" className="h-11 w-14" />
            <span className="hidden sm:flex flex-col leading-none">
              <span className="font-display font-bold text-[17px] tracking-tight text-ink">
                AZURE TECH MOULDS
              </span>
              <span className="text-[11px] uppercase tracking-[0.14em] text-steel mt-1">
                {company.tagline}
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            <NavLink to="/" end className={navLink}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLink}>
              About
            </NavLink>

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`${navLink} flex items-center gap-1`}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                onClick={() => setServicesOpen((v) => !v)}
              >
                Services <ChevronDown size={14} strokeWidth={2.25} />
              </button>
              {servicesOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-72">
                  <div className="bg-white border border-steel-line shadow-lg">
                    <Link
                      to="/services"
                      className="block px-5 py-3 text-sm font-semibold text-ink border-b border-steel-line hover:bg-paper"
                    >
                      All Services
                    </Link>
                    {services.map((s) => (
                      <Link
                        key={s.id}
                        to={`/services/${s.slug}`}
                        className="block px-5 py-3 text-sm text-steel hover:bg-paper hover:text-maroon transition-colors"
                      >
                        {s.navLabel}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/infrastructure" className={navLink}>
              Infrastructure
            </NavLink>
            <NavLink to="/gallery" className={navLink}>
              Gallery
            </NavLink>
            <NavLink to="/contact" className={navLink}>
              Contact
            </NavLink>
          </nav>

          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <a
              href={`tel:+91${company.phones[0]}`}
              className="flex items-center gap-2 text-sm text-steel hover:text-maroon transition-colors"
            >
              <Phone size={16} />
              {company.phones[0]}
            </a>
            <Link
              to="/contact"
              className="bg-maroon text-white text-sm font-semibold px-5 py-2.5 hover:bg-maroon-deep transition-colors"
            >
              Request a Quote
            </Link>
          </div>

          <button
            className="lg:hidden p-2 -mr-2 text-ink"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="lg:hidden border-t border-steel-line bg-paper max-h-[calc(100vh-5rem)] overflow-y-auto"
          aria-label="Mobile"
        >
          <div className="px-5 py-4 flex flex-col gap-1">
            <MobileLink to="/">Home</MobileLink>
            <MobileLink to="/about">About</MobileLink>
            <MobileLink to="/services">Services</MobileLink>
            <div className="pl-4 flex flex-col border-l border-steel-line ml-1 mb-1">
              {services.map((s) => (
                <MobileLink key={s.id} to={`/services/${s.slug}`} small>
                  {s.navLabel}
                </MobileLink>
              ))}
            </div>
            <MobileLink to="/infrastructure">Infrastructure</MobileLink>
            <MobileLink to="/gallery">Gallery</MobileLink>
            <MobileLink to="/contact">Contact</MobileLink>
            <a
              href={`tel:+91${company.phones[0]}`}
              className="mt-3 flex items-center gap-2 text-sm text-steel"
            >
              <Phone size={16} /> {company.phones[0]}
            </a>
            <Link
              to="/contact"
              className="mt-3 bg-maroon text-white text-sm font-semibold px-5 py-3 text-center"
            >
              Request a Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

function MobileLink({ to, children, small }) {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      className={({ isActive }) =>
        `py-2.5 ${small ? "text-[13px] text-steel" : "text-[15px] font-medium text-ink"} ${
          isActive ? "text-maroon" : ""
        }`
      }
    >
      {children}
    </NavLink>
  );
}
