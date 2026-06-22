import React, { useEffect, useRef, useState } from "react";

// Mounts its (WebGL) children only while near the viewport, and unmounts them
// when scrolled away. This frees the GPU/WebGL context so the page never
// exceeds the browser's ~16 simultaneous-context limit (which causes hangs).
const VisibilityGate = ({ children, rootMargin = "250px" }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setShow(entry.isIntersecting),
      { rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className="w-full h-full">
      {show ? children : null}
    </div>
  );
};

export default VisibilityGate;
