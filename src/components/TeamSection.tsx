import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TeamSection() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const { scrollYProgress: scrollYProgressContainer } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  const { scrollYProgress: scrollYProgressText } = useScroll({
    target: textRef,
    offset: ["start end", "end center"],
  });
  const opacityText = useTransform(scrollYProgressText, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgressContainer, [0, 1], [0, 1]);
  const left = useTransform(scrollYProgressContainer, [0, 1], [0, 150]);
  const right = useTransform(scrollYProgressContainer, [0, 1], [0, -150]);

  return (
    <div
      ref={containerRef}
      className="max-w-[3000px] mx-auto relative h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.img
        src="/michael.png"
        alt="Michael Scott"
        className="h-[300px] absolute top-32 left-[-80px] z-[1] object-cover rounded-lg"
        style={{ x: left, opacity }}
      />
      <motion.img
        src="/ryan.png"
        alt="Michael Scott"
        style={{ opacity }}
        className="h-[300px] absolute bottom-12 right-12 z-[1] object-cover rounded-lg"
      />
      <motion.img
        src="/pam.png"
        alt="Michael Scott"
        className="h-[300px] absolute top-0 right-[-80px] z-[1] object-cover rounded-lg"
        style={{ x: right, opacity }}
      />
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
