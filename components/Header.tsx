import Image from "next/image";
import React from "react";
import DonkeyIcon from "../public/donkey.png";
import { SocialIcon } from "react-social-icons";
import { SOCIAL_MEDIA } from "../config/information";
import Link from "next/link";

import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 p-2 flex items-center justify-between max-w-xl mx-auto z-20">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 100,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center"
      >
        <Link href="/" className="group">
          <h2 className="flex font-semibold items-center tracking-tighter font-mplus text-lg group">
            <div className="inline-block transition-transform group-hover:rotate-[-20deg]">
              <Image priority src={DonkeyIcon} width={30} height={30} />
            </div>
            Elbouchouki Ahmed
          </h2>
        </Link>
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 100,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {SOCIAL_MEDIA.map((social, key) => (
          <SocialIcon
            key={key}
            className="hover:scale-110 transition-transform"
            {...social}
            style={{ width: "35px", height: "35px" }}
          />
        ))}
      </motion.div>
    </header>
  );
};

export default Header;
