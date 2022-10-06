import Image from "next/image";
import React from "react";
import DonkeyIcon from "../public/donkey-dark.png";
import { SocialIcon } from "react-social-icons";
import { SOCIAL_MEDIA } from "../config/information";
import Link from "next/link";

import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="fixed w-full pq2 z-20 backdrop-blur-md">
      <nav className="flex items-center justify-between text-base mx-auto max-w-xl">
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
            <h2 className="flex font-extrabold items-center tracking-tighter p-2 font-mplus text-lg group">
              <div className="inline-block transition-transform group-hover:rotate-[-20deg]">
                <Image src={DonkeyIcon} width={30} height={30} />
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
          className="flex flex-row items-center gap-3 p-3"
        >
          {SOCIAL_MEDIA.map((social) => (
            <SocialIcon
              className="cursor-pointer"
              {...social}
              style={{ height: 25, width: 25 }}
            />
          ))}
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
