import { useEffect } from "react";

function setMeta(name, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

export default function SEO({ title, description }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | Azure Tech Moulds`
      : "Azure Tech Moulds | Precision Die, Mould & CNC Machining";
    document.title = fullTitle;
    setMeta("description", description);
  }, [title, description]);

  return null;
}
