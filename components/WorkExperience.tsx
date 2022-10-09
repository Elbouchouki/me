import { motion } from "framer-motion";
import React from "react";
import { EXPERIENCES } from "../config/information";
import ExperienceCard from "./ExperienceCard";
import Title from "./Title";

type Props = {};

const WorkExperience = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-2xl px-10 justify-evenly mx-auto items-center"
    >
      <Title text="experience" />
      <div className="w-full flex space-x-5 overflow-x-scroll p-5 snap-x snap-mandatory">
        {EXPERIENCES.map((experience, key) => (
          <ExperienceCard experience={experience} key={key} />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
