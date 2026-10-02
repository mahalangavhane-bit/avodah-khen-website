import { useEffect } from "react";

export default function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal, .reveal-stagger");

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          } else {
            entry.target.classList.remove("in");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    items.forEach((item) => io.observe(item));

    return () => io.disconnect();
  }, []);
}