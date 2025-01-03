import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function StickyCursor() {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
    size: useMotionValue(0),
  };
  const CURSOR_SIZE = 50;
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
    mouse.size.set(CURSOR_SIZE);
    return () => window.removeEventListener("mousemove", mouseMoveHandler);
  }, []);
  return (
    <motion.div
      style={{
        left: springMouse.x,
        top: springMouse.y,
        width: mouse.size,
        height: mouse.size,
      }}
      className="pointer-events-none z-[100] opacity-50 bg-white fixed bg-white rounded-full"
    />
  );
}
