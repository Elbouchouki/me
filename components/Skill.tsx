import { motion } from "framer-motion";
import React from "react";
import { ISkill } from "../config/information";

type Props = {
  skill: ISkill;
};

const Skill = ({ skill }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: Math.random() < 0.4 ? -200 : 200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        src={skill.icon}
        className="p-2 w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 rounded-full border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out group-hover:bg-white 
      w-16 h-16  md:w-20 md:h-20  xl:w-24 xl:h-24 rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-xl font-bold text-black opacity-100">
            {skill.percentage}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
