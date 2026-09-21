import { useEffect } from "react";

export default function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");

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
        threshold: 0.16,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    items.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);
}