import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail, HiPhone } from "react-icons/hi";

import { styles } from "../styles";
import CodeWindow from "./CodeWindow";
import Magnetic from "./Magnetic";
import AnimatedBackground from "./AnimatedBackground";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto overflow-hidden">
      {/* professional animated aurora + energy-core background */}
      <AnimatedBackground className="z-0" showCore />

      {/* readability overlays */}
      <div className="absolute inset-0 z-[5] pointer-events-none bg-gradient-to-r from-primary/90 via-primary/40 to-transparent" />
      <div className="absolute inset-0 z-[5] pointer-events-none bg-gradient-to-t from-primary via-transparent to-transparent" />

      {/* Fixed social bar — left side (desktop) */}
      <div className="hidden sm:flex fixed left-5 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-6">
        <Magnetic>
          <a
            href="https://github.com/APSAL-K"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-white hover:text-accent transition-colors duration-300"
          >
            <FaGithub className="w-7 h-7" />
          </a>
        </Magnetic>
        <Magnetic>
          <a
            href="https://www.linkedin.com/in/apsal-k-330841302/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-white hover:text-neon transition-colors duration-300"
          >
            <FaLinkedin className="w-7 h-7" />
          </a>
        </Magnetic>
        <div className="w-[2px] h-24 bg-gradient-to-b from-accent to-transparent" />
      </div>

      {/* Foreground content */}
      <div
        className={`relative z-10 max-w-7xl mx-auto ${styles.paddingX} min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 pt-28 pb-24`}
      >
        {/* Left: intro text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="flex flex-row gap-4 lg:gap-5 w-full lg:w-auto"
        >
          <div className="hidden sm:flex flex-col justify-start items-center mt-2">
            <div className="w-5 h-5 rounded-full bg-accent shadow-glow-red" />
            <div className="w-1 sm:h-64 lg:h-72 violet-gradient" />
          </div>

          <div className="flex-1">
            <span className="font-display text-neon text-[12px] sm:text-sm tracking-[0.35em] uppercase neon-text">
              // Full-Stack Developer
            </span>
            <h1 className={`${styles.heroHeadText} font-display text-white mt-2`}>
              Hi, I'm <span className="spider-gradient-text">Apsal</span>
            </h1>
            <p className={`${styles.heroSubText} mt-3 text-white-100 max-w-xl`}>
              React &amp; .NET developer crafting{" "}
              <span className="text-accent font-semibold">enterprise web apps</span>.
              <br className="sm:block hidden" />
              2+ years shipping production systems for global clients.
            </p>

            {/* contact details */}
            <div className="mt-6 flex flex-col gap-2">
              <a
                href="mailto:apsal.k2004@gmail.com"
                className="flex items-center gap-2 text-secondary hover:text-white transition-colors w-fit"
              >
                <HiMail className="w-5 h-5 text-accent" />
                <span className="text-[15px]">apsal.k2004@gmail.com</span>
              </a>
              <a
                href="tel:+917550336250"
                className="flex items-center gap-2 text-secondary hover:text-white transition-colors w-fit"
              >
                <HiPhone className="w-5 h-5 text-neon" />
                <span className="text-[15px]">+91 75503 36250</span>
              </a>
            </div>

            <div className="mt-7 flex items-center gap-6 flex-wrap">
              <Magnetic strength={0.5}>
                <a
                  href="https://drive.google.com/file/d/10Q-c5zkge6pFU0YOvsbmCHT2lNw0CWrR/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    className="relative group py-3 px-8 rounded-xl font-display font-bold text-white overflow-hidden border border-accent/50 glass-red"
                  >
                    <span className="relative z-10">Download Resume</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-accent to-neon opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </a>
              </Magnetic>

              {/* social icons — mobile only */}
              <div className="flex sm:hidden gap-4">
                <a
                  href="https://github.com/APSAL-K"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-8 h-8 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/apsal-k-330841302/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="w-8 h-8 text-white" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: animated coding editor window */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          className="w-full max-w-[440px] lg:flex-shrink-0"
        >
          <CodeWindow />
        </motion.div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-6 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-accent/60 flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-neon"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
