import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function AmbientBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 28, mass: 0.7 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 28, mass: 0.7 });
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${smoothX}px ${smoothY}px, oklch(var(--accent) / 0.105), transparent 62%)`;

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    const handlePointerMove = (event: PointerEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [mouseX, mouseY]);

  return (
    <div className="ambient-stage" aria-hidden="true">
      <motion.div className="ambient-orbit" />
      <div className="ambient-grid" />
      <div className="ambient-noise" />
      <div className="ambient-scan" />
      <motion.div className="cursor-spotlight" style={{ background: spotlight }} />
    </div>
  );
}
