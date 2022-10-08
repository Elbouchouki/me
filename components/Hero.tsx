import Image from "next/image";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { TYPE_WRITING } from "../config/information";
import BackgroundCircles from "./BackgroundCircles";
import { IGithub, IUser } from "../pages/api/github";
type Props = {
  user: IUser;
};

const Hero = ({ user }: Props) => {
  const [text, count] = useTypewriter({
    words: TYPE_WRITING,
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative mx-auto rounded-full"
        objectFit="cover"
        src={user.avatar_url}
        width={128}
        height={128}
        alt={user.name}
      />
      <div>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px]">
          software engineering
        </h2>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[5px]">
          student
        </h2>
        <h1 className="text-3xl lg:text-4xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#F7ABBA" />
        </h1>
      </div>
    </div>
  );
};

export default Hero;
