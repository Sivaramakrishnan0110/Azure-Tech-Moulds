import { useMemo, useState } from "react";
import SEO from "../components/SEO";
import SectionTitle from "../components/SectionTitle";
import Lightbox from "../components/Lightbox";
import CTA from "../components/CTA";
import { galleryCategories } from "../data/gallery";

export default function Gallery() {
  const [active, setActive] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const allItems = useMemo(
    () =>
      galleryCategories.flatMap((cat) =>
        cat.items.map((item) => ({ ...item, category: cat.id }))
      ),
    []
  );

  const visibleItems =
    active === "all" ? allItems : allItems.filter((item) => item.category === active);

  const openAt = (item) => {
    const idx = visibleItems.findIndex((i) => i === item);
    setLightboxIndex(idx);
  };

  const navigate = (dir) => {
    setLightboxIndex((i) => {
      if (i === null) return i;
      const next = (i + dir + visibleItems.length) % visibleItems.length;
      return next;
    });
  };

  return (
    <>
      <SEO
        title="Gallery"
        description="Photos of the Azure Tech Moulds facility, vertical machining centres, CNC turning, EDM and infrastructure in Ranipet, Tamil Nadu."
      />

      <section className="pt-16 sm:pt-24 pb-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            size="lg"
            title="Inside the facility"
            description="A look at our building, office and machinery \u2013 all photographed on our own floor."
          />

          <div className="mt-10 flex flex-wrap gap-3">
            <FilterButton active={active === "all"} onClick={() => setActive("all")}>
              All
            </FilterButton>
            {galleryCategories.map((cat) => (
              <FilterButton
                key={cat.id}
                active={active === cat.id}
                onClick={() => setActive(cat.id)}
              >
                {cat.label}
              </FilterButton>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {visibleItems.map((item) => (
              <button
                key={item.image}
                onClick={() => openAt(item)}
                className="group relative overflow-hidden border border-steel-line text-left w-full"
              >
                <div className="image-frame aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.caption}
                    loading="lazy"
                    className="img-fit-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="absolute inset-x-0 bottom-0 bg-graphite/85 text-white text-[13px] px-4 py-2.5">
                  {item.caption}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        items={visibleItems}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNav={navigate}
      />

      <CTA
        title="Want to see the shop floor for yourself?"
        description="Share your drawings or schedule a visit — our team will walk you through the machines and capability that match your job."
      />
    </>
  );
}

function FilterButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2.5 text-sm font-medium border transition-colors ${
        active
          ? "bg-ink text-white border-ink"
          : "border-steel-line text-steel hover:border-ink hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}
