import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "../assets/brand/logo.jpg";
import { company } from "../data/company";
import { services } from "../data/services";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-graphite text-metal">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Azure Tech Moulds logo" className="h-10 w-auto bg-white p-1" />
            <span className="font-display font-bold text-white tracking-tight">
              AZURE TECH MOULDS
            </span>
          </div>
          <p className="text-sm leading-relaxed text-metal/90">
            {company.description}. Serving automotive, tooling and industrial
            manufacturers from Ranipet, Tamil Nadu.
          </p>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wide mb-4">
            Services
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            {services.map((s) => (
              <li key={s.id}>
                <Link to={`/services/${s.slug}`} className="hover:text-white transition-colors">
                  {s.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wide mb-4">
            Company
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/infrastructure" className="hover:text-white transition-colors">Infrastructure</Link></li>
            <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold uppercase tracking-wide mb-4">
            Get In Touch
          </h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex gap-2.5">
              <MapPin size={17} className="shrink-0 mt-0.5 text-maroon-bright" />
              <span>{company.addressLines.join(" ")}</span>
            </li>
            <li className="flex gap-2.5">
              <Phone size={17} className="shrink-0 text-maroon-bright" />
              <span>{company.phones.join(" / ")}</span>
            </li>
            <li className="flex gap-2.5">
              <Mail size={17} className="shrink-0 text-maroon-bright" />
              <a href={`mailto:${company.email}`} className="hover:text-white transition-colors">
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-5 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs text-metal/70">
          <p>© {year} Azure Tech Moulds. All rights reserved.</p>
          <p>GST {company.gst}</p>
        </div>
      </div>
    </footer>
  );
}
