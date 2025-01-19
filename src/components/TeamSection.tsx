import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TeamSection() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const { scrollYProgress: scrollYProgressContainer } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: scrollYProgressText } = useScroll({
    target: textRef,
    offset: ["start end", "end center"],
  });
  const opacityText = useTransform(scrollYProgressText, [0, 1], [0, 1]);
  const bgScale = useTransform(scrollYProgressContainer, [0, 1], [1.6, 1]);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden mx-auto relative h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.img
        src="a.png"
        alt=""
        style={{ scale: bgScale }}
        className="absolute w-full h-full object-cover z-0"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black z-0 opacity-30" />
      <motion.div
        style={{ opacity: opacityText }}
        ref={textRef}
        className="text-[50px] z-[2] font-american-type-medium"
      >
        The Dream Team
      </motion.div>
    </div>
  );
}
