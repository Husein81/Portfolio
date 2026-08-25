import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently crossing the middle of the viewport.
 * `ids` must be a stable reference — define it outside the component.
 */
export const useActiveSection = (ids: readonly string[]) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.add(entry.target.id);
          } else {
            visible.delete(entry.target.id);
          }
        }
        // Keep document order rather than intersection order.
        setActiveId(ids.find((id) => visible.has(id)) ?? "");
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
};
