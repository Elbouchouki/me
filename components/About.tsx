import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { IUser } from "../pages/api/github";
import { MY_BACKGROUND } from "../config/information";

type Props = {
  user: IUser;
};

const About = ({ user }: Props) => {
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
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl font-semibold">
        about
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src={user.avatar_url}
        className="-mb-20 md:m-10 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:w-56 md:h-56 xl:w-[300px] xl:h-[400px]"
      />
      <div className="space-y-10 px-0 md-px-10">
        <h4 className="text-2xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-main-orange/50">little</span>{" "}
          background
        </h4>
        <p>{MY_BACKGROUND}</p>
      </div>
    </motion.div>
  );
};

export default About;
