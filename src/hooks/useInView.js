import { useEffect, useRef, useState } from "react";

export function useInView(options = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        // Unobserve after triggering once for smooth fade-in
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isInView];
}
