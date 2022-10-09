import { motion } from "framer-motion";
import React from "react";
import { SKILLS } from "../config/information";
import Skill from "./Skill";
import Title from "./Title";

type Props = {};

const Skills = (props: Props) => {
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
      <Title text="skills" />
      <h3 className="absolute top-32 uppercase tracking-[3px] text-gray-500 text-xs">
        hover over a skill for currency profieciency
      </h3>
      <div className="grid grid-cols-3 mt-7 sm:mt-0 sm:grid-cols-4 gap-8 sm:gap-5">
        {SKILLS.map((skill, key) => (
          <Skill key={key} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
