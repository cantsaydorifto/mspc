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
  const { scrollYProgress: scrollYCenterProgress } = useScroll({
    target: containerRef,
    offset: ["center end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);
  const rotateLeft = useTransform(scrollYCenterProgress, [0, 1], [0, -5]);
  const rotateRight = useTransform(scrollYCenterProgress, [0, 1], [0, 5]);
  return (
    <motion.div
      style={{ paddingTop: `calc(10% + ${idx * 25}px)` }}
      className="sticky top-0 pt-[10%] h-screen"
    >
      <motion.div
        style={{ rotate: reverse ? rotateRight : rotateLeft }}
        ref={containerRef}
        className={
          "mb-12 relative overflow-hidden px-12 py-12 rounded-lg w-full max-w-[1400px] flex gap-6" +
          (reverse ? " flex-row-reverse " : " ") +
          bg
        }
      >
        <Airplane
          className="pointer-none absolute bottom-[-200px] right-[-100px]  opacity-70"
          size={900}
          color="#d3d3d3"
        />
        <div className="overflow-hidden border-4 border-white z-[1] drop-shadow-2xl rounded-lg flex-[1] bg-red-300 h-[500px] items-center flex">
          <motion.img
            style={{ scale }}
            src={image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="z-[1] flex-[1] text-white flex flex-col gap-8 justify-center">
          <div
            style={{
              textShadow: "0px 3px 10px rgba(0, 0, 0)",
            }}
            className="text-6xl"
          >
            {name}
          </div>
          <div className="bg-indigo-500 w-fit text-3xl rounded-lg p-3">
            {role}
          </div>
          <ul
            style={{
              textShadow: "0px 2px 10px rgba(0, 0, 0)",
            }}
            className="text-3xl space-y-8"
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
