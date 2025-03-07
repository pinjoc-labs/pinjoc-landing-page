"use client";

import Image from "next/image";
import React, { Fragment } from "react";
import DevWeb3Jogja from "@/assets/images/dev-web3-jogja.png";
import { motion } from "motion/react";

const LOGOS = [
  {
    id: 1,
    name: "Dev Web3 Jogja",
    logo: DevWeb3Jogja,
  },
  {
    id: 2,
    name: "Dev Web3 Jogja",
    logo: DevWeb3Jogja,
  },
  {
    id: 3,
    name: "Dev Web3 Jogja",
    logo: DevWeb3Jogja,
  },
  {
    id: 4,
    name: "Dev Web3 Jogja",
    logo: DevWeb3Jogja,
  },
  {
    id: 5,
    name: "Dev Web3 Jogja",
    logo: DevWeb3Jogja,
  },
  {
    id: 6,
    name: "Dev Web3 Jogja",
    logo: DevWeb3Jogja,
  },
  {
    id: 7,
    name: "Dev Web3 Jogja",
    logo: DevWeb3Jogja,
  },
];

const LogoTicker = () => {
  return (
    <section className="overflow-x-clip">
      <div className="container mx-auto">
        <h3 className="text-center text-white/50 text-xl">
          Collaboration With 🤝
        </h3>
        <div className="overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{
              x: "-50%",
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 10,
            }}
            className="flex flex-none gap-24 pr-24"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <Fragment key={i}>
                {LOGOS.map((logo) => {
                  return (
                    <Image
                      key={logo.id}
                      src={logo.logo}
                      alt={String(logo.id)}
                      width={150}
                      height={150}
                      className="grayscale hover:grayscale-0 transition duration-300"
                    />
                  );
                })}
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
