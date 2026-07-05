import { motion } from "framer-motion";
import { aiWorkflow, interfaceIcons } from "../data/profile";
import { ModuleSection } from "./ModuleSection";

export function AIWorkflow() {
  const Icon = interfaceIcons.radar;

  return (
    <ModuleSection
      id="ai-workflow"
      eyebrow="AI workflow"
      title="AI is part of the working process."
      description="Research, prompt design, prototype, human review, refactor, deploy. The value is not AI decoration. It is faster structured thinking with human accountability."
      dense
    >
      <div className="workflow-console">
        <div className="workflow-header">
          <Icon size={18} />
          <span>research → prompt design → prototype → review → refactor → deploy</span>
        </div>
        <div className="workflow-rail">
          {aiWorkflow.map((step, index) => (
            <motion.div
              className="workflow-step"
              key={step.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.62, delay: index * 0.055, ease: [0.16, 1, 0.3, 1] }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <strong>{step.label}</strong>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </ModuleSection>
  );
}
