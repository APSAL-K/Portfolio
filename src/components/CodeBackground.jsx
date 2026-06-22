import React, { useMemo } from "react";
import { motion } from "framer-motion";

// Coding-themed tokens that float in the background
const TOKENS = [
  "</>", "{ }", "()", "=>", "const", "npm i", "git push", "<div>", "useState",
  "async", "await", "React", ".NET", "API", "JSON", "[ ]", "===", "return",
  "import", "props", "hook", "fetch()", "map()", "JWT", "SQL", "Docker",
  "200 OK", "POST", "GET", "ssh", "build", "deploy", "ts", "jsx",
];

// Deterministic pseudo-random so layout is stable between renders
const seeded = (i) => {
  const x = Math.sin(i * 99.13) * 10000;
  return x - Math.floor(x);
};

const FloatingToken = ({ token, index }) => {
  const left = `${seeded(index) * 96 + 1}%`;
  const top = `${seeded(index + 7) * 92 + 2}%`;
  const size = 12 + Math.floor(seeded(index + 3) * 22);
  const duration = 6 + seeded(index + 5) * 10;
  const drift = 30 + seeded(index + 9) * 60;
  const delay = seeded(index + 11) * 5;
  const isAccent = index % 3 === 0;

  return (
    <motion.span
      className="absolute font-mono select-none"
      style={{
        left,
        top,
        fontSize: size,
        color: isAccent ? "#ff2247" : "#00d4ff",
        opacity: 0.16,
        textShadow: isAccent
          ? "0 0 14px rgba(255,34,71,0.5)"
          : "0 0 14px rgba(0,212,255,0.45)",
      }}
      animate={{
        y: [0, -drift, 0],
        rotate: [0, index % 2 ? 12 : -12, 0],
        opacity: [0.08, 0.28, 0.08],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {token}
    </motion.span>
  );
};

const CodeBackground = () => {
  const tokens = useMemo(
    () => Array.from({ length: 14 }, (_, i) => TOKENS[i % TOKENS.length]),
    []
  );

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {tokens.map((token, i) => (
        <FloatingToken key={i} token={token} index={i} />
      ))}
    </div>
  );
};

export default CodeBackground;
