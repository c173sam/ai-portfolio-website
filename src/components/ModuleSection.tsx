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
      initial={{ opacity: 0.86, y: 20, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-18% 0px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
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
