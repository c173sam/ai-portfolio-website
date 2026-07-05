import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, FileDown, Github } from "lucide-react";
import type { PointerEvent } from "react";
import { profile } from "../data/profile";
import { MagneticLink } from "./MagneticLink";

export function Introduction() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 70, damping: 26, mass: 0.7 });
  const springY = useSpring(pointerY, { stiffness: 70, damping: 26, mass: 0.7 });
  const headingX = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  const headingY = useTransform(springY, [-0.5, 0.5], [-5, 5]);
  const roleX = useTransform(headingX, (value) => value * 0.35);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section className="intro-screen" id="hero" onPointerMove={handlePointerMove}>
      <motion.div
        className="intro-copy"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="context-line">
          <span>{profile.name}</span>
          <span>{profile.location}</span>
        </div>
        <motion.h1 style={{ x: headingX, y: headingY }}>{profile.thesis}</motion.h1>
        <motion.p className="intro-role" style={{ x: roleX }}>
          Technical Support / Project Coordination / AI-assisted Workflow
        </motion.p>
        <p className="intro-summary">{profile.summary}</p>
        <div className="intro-actions">
          <MagneticLink className="primary-action" href="#work">
            Explore selected work <ArrowUpRight size={17} />
          </MagneticLink>
          <MagneticLink href={profile.resumeHref}>
            Resume <FileDown size={17} />
          </MagneticLink>
          <MagneticLink href={profile.github} target="_blank" rel="noreferrer">
            GitHub <Github size={17} />
          </MagneticLink>
        </div>
      </motion.div>
    </section>
  );
}
