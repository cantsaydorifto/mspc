import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function StickyCursor() {
  const mouse = { x: useMotionValue(0), y: useMotionValue(0) };
  const CURSOR_SIZE = 80;
  const mouseMoveHandler = (e: MouseEvent) => {
    mouse.x.set(e.clientX - CURSOR_SIZE / 2);
    mouse.y.set(e.clientY - CURSOR_SIZE / 2);
  };
  const spring = {
    type: "spring",
    stiffness: 200,
    damping: 28,
  };
  const springMouse = {
    x: useSpring(mouse.x, spring),
    y: useSpring(mouse.y, spring),
  };
  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => window.removeEventListener("mousemove", mouseMoveHandler);
  }, []);
  return (
    <motion.div
      style={{ left: springMouse.x, top: springMouse.y }}
      className="pointer-events-none z-[100] w-[80px] opacity-50 bg-white fixed h-[80px] bg-white rounded-full"
    />
  );
}
