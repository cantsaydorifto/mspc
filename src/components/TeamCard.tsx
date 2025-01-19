import { motion, useScroll, useTransform } from "framer-motion";
import Airplane from "./Airplane";
import { useRef } from "react";

export default function TeamCard({
  name,
  role,
  attributes,
  image,
  reverse,
  bg,
  idx,
}: {
  name: string;
  role: string;
  image: string;
  attributes: string[];
  reverse: boolean;
  bg: string;
  idx: number;
}) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);
  return (
    <motion.div
      style={{ paddingTop: `calc(5% + ${idx * 25}px)` }}
      className="sticky top-0 pt-[10%] h-full min-h-screen w-full max-w-[500px] lg:max-w-[1200px]"
    >
      <motion.div
        ref={containerRef}
        className={
          "mb-12 relative overflow-hidden px-12 py-12 rounded-lg w-full flex items-center flex-col lg:flex-row gap-6" +
          (reverse ? " flex-row-reverse " : " ") +
          bg
        }
      >
        <div className="max-w-[300px] lg:max-w-full overflow-hidden border-4 border-white z-[1] drop-shadow-2xl rounded-lg flex-[1] bg-red-300 h-[500px] items-center flex">
          <motion.img
            style={{ scale }}
            src={image}
            alt=""
            className="aspect-square lg:aspect-auto w-full lg:h-full object-cover"
          />
        </div>
        <div className="relative flex-[1] text-white flex flex-col gap-8 justify-center">
          <Airplane
            className="pointer-none absolute bottom-[-200px] right-[-150px] opacity-70"
            size={900}
            color="#d3d3d3"
          />
          <div className="flex flex-col gap-8">
            <div
              style={{
                textShadow: "0px 3px 10px rgba(0, 0, 0)",
              }}
              className="z-10 text-3xl lg:text-6xl"
            >
              {name}
            </div>
            <div className="z-10 bg-indigo-500 w-fit text-xl lg:text-3xl rounded-lg p-3">
              {role}
            </div>
          </div>
          <ul
            style={{
              textShadow: "0px 2px 10px rgba(0, 0, 0)",
            }}
            className="z-10 text-base lg:text-2xl space-y-8"
          >
            {attributes.map((attr) => (
              <li key={name} className="flex items-center gap-3">
                <span className="font-bold text-2xl">&middot;</span>
                {attr}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}
