import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Lines of the "developer profile" code that gets typed out
const LINES = [
  { t: "const developer = {", c: "#ff2247" },
  { t: "  name: 'Apsal K',", c: "#00d4ff" },
  { t: "  role: 'Full-Stack Developer',", c: "#00d4ff" },
  { t: "  stack: ['React', '.NET Core', 'Laravel'],", c: "#e2e8f0" },
  { t: "  db: ['PostgreSQL', 'MongoDB', 'MySQL'],", c: "#e2e8f0" },
  { t: "  experience: '2+ years',", c: "#ff6a3d" },
  { t: "  shipped: 'global clients · 17 countries',", c: "#ff6a3d" },
  { t: "  open_to_work: true,", c: "#00d4ff" },
  { t: "};", c: "#ff2247" },
];

const FULL = LINES.map((l) => l.t).join("\n");

const CodeWindow = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= FULL.length) {
      // pause, then restart the typing loop
      const restart = setTimeout(() => setCount(0), 2600);
      return () => clearTimeout(restart);
    }
    const id = setTimeout(() => setCount((c) => c + 1), 38);
    return () => clearTimeout(id);
  }, [count]);

  const typed = FULL.slice(0, count);
  const typedLines = typed.split("\n");

  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -18, y: 40 }}
      animate={{ opacity: 1, rotateY: 0, y: 0 }}
      transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
      whileHover={{ rotateX: 4, rotateY: -6, scale: 1.02 }}
      style={{ transformPerspective: 1000 }}
      className="w-full max-w-[440px] rounded-xl overflow-hidden shadow-2xl shadow-accent/30 border border-accent/30 bg-black-200/70 backdrop-blur-md"
    >
      {/* title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 text-[12px] text-secondary font-mono">
          apsal.dev.js
        </span>
      </div>

      {/* code body */}
      <div className="px-4 py-4 font-mono text-[13px] sm:text-[14px] leading-6 min-h-[230px]">
        {LINES.map((line, i) => (
          <div key={i} className="flex">
            <span className="select-none text-white/20 w-6 shrink-0">
              {i + 1}
            </span>
            <span style={{ color: line.c }} className="whitespace-pre-wrap">
              {typedLines[i] || ""}
              {i === typedLines.length - 1 && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                  className="inline-block w-[8px] h-[15px] -mb-[2px] bg-accent"
                />
              )}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CodeWindow;
