import { motion } from "framer-motion";
import React from "react";
import { PROJECTS } from "../config/information";
import Project from "./Project";
import Title from "./Title";

type Props = {};

const Projects = (props: Props) => {
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
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <Title text="projects" />

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {PROJECTS.map((project, key) => (
          <Project
            index={key + 1}
            key={key}
            project={project}
            total={PROJECTS.length}
          />
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-main-orange/10 left-0 h-[300px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
