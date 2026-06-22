import React from "react";
import { motion } from "framer-motion";

// Glowing energy-core centerpiece: concentric orbital rings spinning in
// opposite directions with particles riding them, plus a pulsing core.
const EnergyCore = () => {
  const rings = [
    { size: 260, dur: 28, dir: 1, color: "rgba(255,34,71,0.55)" },
    { size: 400, dur: 40, dir: -1, color: "rgba(0,212,255,0.45)" },
    { size: 560, dur: 55, dir: 1, color: "rgba(255,34,71,0.30)" },
    { size: 720, dur: 70, dir: -1, color: "rgba(0,212,255,0.22)" },
  ];

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden sm:block">
      {/* pulsing core glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,34,71,0.6), rgba(0,212,255,0.25) 50%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* orbital rings with particles */}
      {rings.map((r, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 rounded-full border"
          style={{
            width: r.size,
            height: r.size,
            marginLeft: -r.size / 2,
            marginTop: -r.size / 2,
            borderColor: r.color,
            boxShadow: `0 0 30px ${r.color}`,
          }}
          animate={{ rotate: r.dir * 360 }}
          transition={{ duration: r.dur, repeat: Infinity, ease: "linear" }}
        >
          {/* particle riding the ring */}
          <span
            className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full"
            style={{ background: r.color, boxShadow: `0 0 12px ${r.color}` }}
          />
          <span
            className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rounded-full"
            style={{ background: r.color, boxShadow: `0 0 10px ${r.color}` }}
          />
        </motion.div>
      ))}
    </div>
  );
};

// A premium, professional animated backdrop — drifting red/blue aurora blobs,
// a slow rotating energy ring, and a panning neon grid. GPU-only (transform +
// opacity), so it stays at 60fps with no WebGL context.
const AnimatedBackground = ({ className = "", showCore = false }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* base wash */}
      <div className="absolute inset-0 bg-primary" />

      {/* rotating conic energy field */}
      <div
        className="absolute left-1/2 top-1/2 w-[160vw] h-[160vw] -translate-x-1/2 -translate-y-1/2 animate-spin-slow opacity-[0.35]"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(255,34,71,0.18), transparent 25%, rgba(0,212,255,0.18) 50%, transparent 75%, rgba(255,34,71,0.18))",
        }}
      />

      {/* drifting aurora blobs */}
      <motion.div
        className="absolute w-[55vw] h-[55vw] rounded-full bg-accent/25 blur-[130px]"
        style={{ left: "-10%", top: "-10%" }}
        animate={{ x: [0, 120, -40, 0], y: [0, 80, 140, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[50vw] h-[50vw] rounded-full bg-neon/25 blur-[130px]"
        style={{ right: "-10%", top: "20%" }}
        animate={{ x: [0, -110, 50, 0], y: [0, 100, -60, 0], scale: [1, 0.9, 1.2, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[45vw] h-[45vw] rounded-full bg-accent-dark/25 blur-[140px]"
        style={{ left: "30%", bottom: "-20%" }}
        animate={{ x: [0, 60, -80, 0], y: [0, -70, 30, 0], scale: [1, 1.1, 0.9, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* panning neon grid */}
      <div className="absolute inset-0 grid-bg animate-grid-pan opacity-70" />

      {/* glowing energy-core centerpiece */}
      {showCore && <EnergyCore />}

      {/* cinematic vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(8,8,13,0.9)_100%)]" />
    </div>
  );
};

export default AnimatedBackground;
