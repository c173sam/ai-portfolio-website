import { motion, useMotionValue, useSpring } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type MagneticLinkProps = HTMLMotionProps<"a"> & {
  children: ReactNode;
};

export function MagneticLink({ children, className, onMouseLeave, onMouseMove, ...props }: MagneticLinkProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 180, damping: 22, mass: 0.35 });
  const smoothY = useSpring(y, { stiffness: 180, damping: 22, mass: 0.35 });

  return (
    <motion.a
      {...props}
      className={className}
      style={{ x: smoothX, y: smoothY }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.055);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.09);
        onMouseMove?.(event);
      }}
      onMouseLeave={(event) => {
        x.set(0);
        y.set(0);
        onMouseLeave?.(event);
      }}
    >
      <span>{children}</span>
    </motion.a>
  );
}
