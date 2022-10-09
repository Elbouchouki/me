import { motion } from "framer-motion";
import React from "react";
import { IProject } from "../config/information";

type Props = {
  project: IProject;
  index: number;
  total: number;
};

const Project = ({ project, index, total }: Props) => {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center max-w-5xl p-20 md:p-44 h-screen">
      <motion.img
        initial={{
          y: -200,
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
        src={project.image}
        alt=""
      />
      <div className="space-y-10 px-0 md:px-10 max-w-3xl">
        <h4 className="text-xl font-semibold text-center">
          <span className="underline decoration-main-orange">
            Case Study {index} of {total} :{" "}
          </span>
          {project.title}
        </h4>
        <p className="text-lg texr-center md:text-left">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default Project;
