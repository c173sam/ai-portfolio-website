import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { CSSProperties } from "react";
import { caseStudies } from "../data/profile";
import { ModuleSection } from "./ModuleSection";

export function CaseStudies() {
  return (
    <ModuleSection
      id="work"
      eyebrow="Selected work"
      title="Three cases. One operating pattern."
      description="Each case shows how fragmented information becomes a clearer system: context, problem, action, result, and the tools used to get there."
    >
      <div className="case-stack">
        {caseStudies.map((study, index) => (
          <CaseStudyItem study={study} index={index} key={study.title} />
        ))}
      </div>
    </ModuleSection>
  );
}

function CaseStudyItem({ study, index }: { study: (typeof caseStudies)[number]; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const borderLight = useMotionTemplate`radial-gradient(520px circle at ${mouseX}px ${mouseY}px, oklch(var(--accent) / 0.22), transparent 48%)`;

  return (
    <motion.article
      className="case-study"
      style={{ "--case-light": borderLight } as CSSProperties}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set(event.clientX - rect.left);
        mouseY.set(event.clientY - rect.top);
      }}
      initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-20% 0px" }}
      transition={{ duration: 0.7, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="case-index">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <small>{study.type}</small>
      </div>
      <div className="case-body">
        <h3>{study.title}</h3>
        <div className="case-grid">
          <CaseBlock label="Context" value={study.context} />
          <CaseBlock label="Problem" value={study.problem} />
          <CaseBlock label="Action" value={study.solution} />
          <CaseBlock label="Result" value={study.result} />
          <div className="case-block wide">
            <span>Tools / stack</span>
            <ul>
              {study.engineering.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function CaseBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="case-block">
      <span>{label}</span>
      <p>{value}</p>
    </div>
  );
}
