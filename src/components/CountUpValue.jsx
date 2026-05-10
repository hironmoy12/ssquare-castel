import { useEffect, useRef, useState } from "react";

export default function CountUpValue({ target }) {
  const [value, setValue] = useState(0);
  const valueRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const node = valueRef.current;
    if (!node) return undefined;

    const startAnimation = () => {
      const startTime = performance.now();
      const duration = 1600;

      const animate = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        setValue(Math.floor(target * easedProgress));

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(animate);
        } else {
          setValue(target);
        }
      };

      frameRef.current = requestAnimationFrame(animate);
    };

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            startAnimation();
            observer.disconnect();
          }
        },
        { threshold: 0.35 },
      );

      observer.observe(node);

      return () => {
        observer.disconnect();
        if (frameRef.current) cancelAnimationFrame(frameRef.current);
      };
    }

    startAnimation();

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [target]);

  return (
    <span ref={valueRef} className="counter-item__value">
      {value.toLocaleString("en-US")} +
    </span>
  );
}
