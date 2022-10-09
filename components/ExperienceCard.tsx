import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { IExperience } from "../config/information";

type Props = {
  experience: IExperience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[350px] md:w-[400px] xl:w-[500px] snap-center bg-main-lightergray text-left p-5 mt-20 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src={experience.logo}
        className="pt-5 w-32 h-32 xl:w-[200px] xl:h-[200px] object-center object-cover rounded-full"
      />
      <div>
        <h4 className="text-xl font-light">{experience.title}</h4>
        <p className="text-xl font-bold mt-1">{experience.company}</p>
        <div className="flex space-y-2 my-2">
          {experience.technologies.map((tech, key) => (
            <Image
              key={key}
              src={tech}
              height={25}
              width={30}
              className="rounded-full"
            />
          ))}
        </div>
        <p className="uppercase text-gray-300 mb-3">
          {experience.start} - {experience.end}
        </p>
        <ul className="list-disc space-y-1 ml-2 text-sm">
          {experience.summary.map((sum, key) => (
            <li key={key}>{sum}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
