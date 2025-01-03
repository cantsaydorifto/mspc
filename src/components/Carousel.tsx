import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Carousel() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const xTransformNegative = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-10%"]
  );
  const xTransformPlus = useTransform(
    scrollYProgress,
    [0, 1],
    ["-50%", "-40%"]
  );

  return (
    <div
      ref={containerRef}
      className="max-w-[3000px] mx-auto relative flex items-center flex-col overflow-hidden md:my-16 py-72 px-6 w-full"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="p-6 cursor-text text-3xl text-center md:text-left font-american-type-medium text-white sm:text-5xl xl:text-[80px]"
      >
        We Love Paper!
      </div>
      <motion.div
        className="flex absolute top-16 z-[-1] left-0 overflow-hidden gap-12 md:gap-32 w-fit justify-start"
        style={{
          x: xTransformNegative,
        }}
      >
        {Array.from({ length: 60 }).map((_, index) => (
          <>
            <img
              src="/paper.png"
              key={index}
              className={`h-[150px] rounded-lg object-cover`}
            />
          </>
        ))}
      </motion.div>
      <motion.div
        className="flex z-[-1] absolute bottom-16 left-0 overflow-hidden gap-12 md:gap-32 w-fit justify-start"
        style={{
          x: xTransformPlus,
        }}
      >
        {Array.from({ length: 60 }).map((_, index) => (
          <>
            <img
              src="/paper.png"
              key={index}
              className={` h-[150px] rounded-lg object-cover`}
            />
          </>
        ))}
      </motion.div>
    </div>
  );
}
