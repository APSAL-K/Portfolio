import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { education, certifications, languages } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const EducationCard = ({ index, degree, institution, date, location }) => (
  <Tilt
    options={{ max: 25, scale: 1.02, speed: 400 }}
    className="xs:w-[320px] w-full"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.4, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-6 px-8 min-h-[180px] flex flex-col justify-center">
        <h3 className="text-white text-[22px] font-bold">{degree}</h3>
        <p className="text-secondary text-[16px] font-medium mt-1">
          {institution}
        </p>
        <p className="text-white-100 text-[14px] mt-3">{date}</p>
        <p className="text-secondary text-[14px]">{location}</p>
      </div>
    </motion.div>
  </Tilt>
);

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I bring</p>
        <h2 className={styles.sectionHeadText}>Education & Certifications.</h2>
      </motion.div>

      <div className="mt-12 flex flex-wrap gap-10">
        {education.map((edu, index) => (
          <EducationCard key={edu.degree} index={index} {...edu} />
        ))}

        <Tilt
          options={{ max: 25, scale: 1.02, speed: 400 }}
          className="flex-1 min-w-[300px]"
        >
          <motion.div
            variants={fadeIn("left", "spring", 0.3, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          >
            <div className="bg-tertiary rounded-[20px] py-6 px-8 min-h-[180px]">
              <h3 className="text-white text-[20px] font-bold mb-3">
                Certifications & Languages
              </h3>
              <ul className="list-disc ml-5 space-y-1">
                {certifications.map((cert) => (
                  <li
                    key={cert}
                    className="text-white-100 text-[14px] tracking-wide"
                  >
                    {cert}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="text-[13px] text-secondary border border-secondary rounded-full px-3 py-1"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </Tilt>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
