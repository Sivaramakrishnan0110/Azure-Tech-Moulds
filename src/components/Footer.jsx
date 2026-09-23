import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, FileText } from "lucide-react";
import logo from "../assets/brand/logo.jpg";
import { company } from "../data/company";
import { services } from "../data/services";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-graphite text-metal">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3 mb-5 group">
              <span className="bg-white p-1.5 shrink-0">
                <img
                  src={logo}
                  alt="Azure Tech Moulds logo"
                  className="h-12 w-auto max-w-[4.5rem] object-contain object-center"
                  draggable={false}
                />
              </span>
              <span className="font-display font-bold text-white text-[15px] tracking-tight leading-snug group-hover:text-maroon-bright transition-colors">
                AZURE TECH
                <br />
                MOULDS
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-metal/90 max-w-sm">
              {company.description}. Serving automotive, tooling and industrial
              manufacturers from Ranipet, Tamil Nadu.
            </p>
          </div>

          <div className="lg:col-span-2 lg:pt-1">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wide mb-4">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {s.shortName || s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 lg:pt-1">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wide mb-4">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/infrastructure" className="hover:text-white transition-colors">
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4 lg:pt-1">
            <h3 className="text-white text-sm font-semibold uppercase tracking-wide mb-4">
              Get In Touch
            </h3>
            <ul className="flex flex-col gap-3.5 text-sm">
              <li className="flex gap-2.5 items-start">
                <MapPin size={17} className="shrink-0 mt-0.5 text-maroon-bright" />
                <span className="leading-relaxed">{company.addressLines.join(", ")}</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone size={17} className="shrink-0 text-maroon-bright" />
                <span>{company.phones.join(" / ")}</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail size={17} className="shrink-0 text-maroon-bright" />
                <a
                  href={`mailto:${company.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {company.email}
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <FileText size={17} className="shrink-0 text-maroon-bright" />
                <span>
                  <span className="text-white/70">GST</span> {company.gst}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-5 flex flex-col sm:flex-row gap-2 items-center sm:items-center justify-between text-xs text-metal/70 text-center sm:text-left">
          <p>© {year} Azure Tech Moulds. All rights reserved.</p>
          <p>
            Developed by{" "}
            <a
              href="https://arctovion.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-metal hover:text-white transition-colors underline underline-offset-2"
            >
              Arctovion Tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
