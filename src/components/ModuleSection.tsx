import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ModuleSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  dense?: boolean;
};

export function ModuleSection({ id, eyebrow, title, description, children, dense }: ModuleSectionProps) {
  return (
    <motion.section
      className={`module-section${dense ? " dense" : ""}`}
      id={id}
      initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-18% 0px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="module-heading">
        <span>{eyebrow}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {children}
    </motion.section>
  );
}
