import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="relative">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Apsal</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a React front-end developer. including user interfaces
            <br className="sm:block hidden" />
            and web functionalities.
          </p>
          <a
            href="https://drive.google.com/file/d/1JiyZ742YEeHOzteNxNC5sET_Yi8T5ytb/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary mt-3 cursor-pointer absolute bottom-[-60px] z-20"
            >
              Download Resume
            </button>
          </a>
        </div>
      </div>

      <ComputersCanvas />
      <div className="absolute left-5 top-1/2 transform -translate-y-1/2 flex flex-col gap-8">
        <a
          href="https://github.com/k-Afsal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="w-10 h-10 text-white" />
        </a>
        <a
          href="https://www.linkedin.com/in/k-apsal-330841302/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="w-10 h-10 text-white" />
        </a>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
