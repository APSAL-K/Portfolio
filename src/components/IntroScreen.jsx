import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Cinematic premium loading screen — energy bar fills, glitch name, then
// the panels split open to reveal the site.
const IntroScreen = () => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 12 + 4;
      if (p >= 100) {
        p = 100;
        clearInterval(id);
        setTimeout(() => setDone(true), 500);
      }
      setProgress(Math.floor(p));
    }, 130);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-primary overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* energy grid backdrop */}
          <div className="absolute inset-0 grid-bg opacity-60" />

          {/* scanning line */}
          <motion.div
            className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent"
            animate={{ top: ["10%", "90%", "10%"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 flex flex-col items-center">
            <motion.h1
              initial={{ opacity: 0, letterSpacing: "0.6em" }}
              animate={{ opacity: 1, letterSpacing: "0.18em" }}
              transition={{ duration: 1 }}
              className="font-display text-5xl sm:text-7xl font-extrabold spider-gradient-text"
            >
              APSAL
            </motion.h1>
            <p className="mt-3 text-secondary font-display text-[11px] sm:text-sm tracking-[0.4em] uppercase">
              Full-Stack Developer
            </p>

            {/* energy bar */}
            <div className="mt-8 w-[220px] sm:w-[300px] h-[3px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-accent to-neon"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="mt-3 font-display text-neon text-sm neon-text">
              {progress}%
            </span>
          </div>

          {/* split-open panels on finish */}
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-black-200 z-20"
            initial={{ y: 0 }}
            animate={progress === 100 ? { y: "-100%" } : {}}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-full h-1/2 bg-black-200 z-20"
            initial={{ y: 0 }}
            animate={progress === 100 ? { y: "100%" } : {}}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroScreen;
