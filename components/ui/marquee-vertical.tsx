"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const LOGOS = [
  {
    id: 1,
    name: "Jack",
    username: "@jack",
    text: "I've never seen anything like this before. It's amazing. I love it.",
    color: "bg-gradient-to-br from-green-400 to-yellow-500",
  },
  {
    id: 2,
    name: "John",
    username: "@john",
    text: "I'm at a loss for words. This is amazing. I love it.",
    color: "bg-gradient-to-br from-green-400 to-yellow-500",
  },
  {
    id: 3,
    name: "Jill",
    username: "@jill",
    text: "I don't know what to say. I'm speechless. This is amazing.",
    color: "bg-gradient-to-br from-blue-500 to-pink-500",
  },
];

const MarqueeVertical = ({
  data,
  direction = "top",
}: {
  data: any[];
  direction?: "top" | "bottom";
}) => {
  return (
    <section className="overflow-hidden flex flex-col items-center h-[500px] relative">
      <div className="overflow-hidden [mask-image:linear-gradient(to_top,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          animate={{
            y:
              direction === "top" ? ["0%", "-30%", "0%"] : ["0%", "-20%", "0%"],
          }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="flex flex-col gap-6"
        >
          {Array.from({ length: 2 }).map((_, i) => (
            <React.Fragment key={i}>
              {data.map((item) => (
                <div
                  key={item.title}
                  className="bg-[#181818] border border-[#363636] rounded-2xl p-4 w-96 shadow-lg text-white flex flex-col"
                >
                  <div className="flex items-center gap-3">
                    <div>
                      <h4 className="font-bold">{item.title}</h4>
                    </div>
                  </div>
                  <p className="mt-4 text-sm">{item.description}</p>
                </div>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarqueeVertical;
