import { Phone, Mail, MapPin, Clock } from "lucide-react";
import SEO from "../components/SEO";
import SectionTitle from "../components/SectionTitle";
import ContactForm from "../components/ContactForm";
import { company, businessHours } from "../data/company";

export default function Contact() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    company.mapQuery
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Azure Tech Moulds in Ranipet, Tamil Nadu for die, mould and CNC machining enquiries. We respond within 48 hours."
      />

      <section className="pt-16 sm:pt-24 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            size="lg"
            title="Let's talk about your component"
            description="Share your drawing, quantity and timeline and we'll respond within 48 hours."
          />

          <div className="mt-14 grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 flex flex-col gap-8">
              <InfoRow icon={MapPin} label="Address">
                {company.addressLines.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </InfoRow>
              <InfoRow icon={Phone} label="Phone">
                {company.phones.map((p) => (
                  <a key={p} href={`tel:+91${p}`} className="block hover:text-maroon transition-colors">
                    {p}
                  </a>
                ))}
              </InfoRow>
              <InfoRow icon={Mail} label="Email">
                <a href={`mailto:${company.email}`} className="hover:text-maroon transition-colors">
                  {company.email}
                </a>
              </InfoRow>
              <InfoRow icon={Clock} label="Business Hours">
                {businessHours.map((b) => (
                  <span key={b.day} className="block">
                    {b.day}: {b.hours}
                  </span>
                ))}
              </InfoRow>

              <div className="border border-steel-line overflow-hidden h-64 mt-2">
                <iframe
                  title="Azure Tech Moulds location"
                  src={mapSrc}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="lg:col-span-3 border border-steel-line bg-white p-7 sm:p-10">
              <h2 className="font-display font-bold text-xl text-ink mb-6">
                Send an enquiry
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoRow({ icon: Icon, label, children }) {
  return (
    <div className="flex gap-4">
      <div className="h-11 w-11 shrink-0 flex items-center justify-center bg-graphite text-white">
        <Icon size={19} />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-steel">{label}</p>
        <div className="text-[15px] text-ink mt-1 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
