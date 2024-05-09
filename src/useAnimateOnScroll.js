import { useEffect, useRef } from "react";

const useAnimateOnScroll = (threshold = 0.5) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add("animate-fade-in-down");
          }
        });
      },
      { threshold }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, threshold]);

  return ref;
};

export default useAnimateOnScroll;
