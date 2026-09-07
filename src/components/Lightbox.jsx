import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({ items, index, onClose, onNav }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, onNav]);

  if (index === null) return null;
  const item = items[index];

  return (
    <div
      className="fixed inset-0 z-[100] bg-graphite/95 flex flex-col items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white/80 hover:text-white p-2"
        aria-label="Close"
      >
        <X size={28} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNav(-1);
        }}
        className="absolute left-2 sm:left-6 text-white/80 hover:text-white p-2"
        aria-label="Previous image"
      >
        <ChevronLeft size={32} />
      </button>

      <img
        src={item.image}
        alt={item.caption || "Gallery image"}
        className="max-h-[78vh] max-w-full object-contain"
        onClick={(e) => e.stopPropagation()}
      />
      {item.caption && (
        <p className="text-metal text-sm mt-4 text-center max-w-lg">{item.caption}</p>
      )}

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNav(1);
        }}
        className="absolute right-2 sm:right-6 text-white/80 hover:text-white p-2"
        aria-label="Next image"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
}
