import React, { useEffect, useRef } from "react";

// A premium custom cursor: an instant neon dot + a lagging electric ring that
// expands when hovering interactive elements. Desktop only.
const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let hovering = false;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;

      const t = e.target;
      const interactive =
        t.closest("a, button, .cursor-grow, input, textarea, [role='button']");
      hovering = !!interactive;
    };

    const onDown = () => ring.classList.add("cursor-click");
    const onUp = () => ring.classList.remove("cursor-click");

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    let raf;
    const loop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      const scale = hovering ? 1.8 : 1;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%) scale(${scale})`;
      ring.style.borderColor = hovering ? "#00d4ff" : "#ff2247";
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  return (
    <div className="hidden md:block">
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none w-2 h-2 -ml-1 -mt-1 rounded-full bg-neon shadow-[0_0_10px_#00d4ff]"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none w-9 h-9 rounded-full border-2 border-accent transition-[width,height] duration-200"
        style={{ boxShadow: "0 0 18px rgba(255,34,71,0.5)" }}
      />
    </div>
  );
};

export default CustomCursor;
