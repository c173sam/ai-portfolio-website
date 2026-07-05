import { motion } from "framer-motion";
import { aiWorkflow, interfaceIcons } from "../data/profile";
import { ModuleSection } from "./ModuleSection";

export function AIWorkflow() {
  const Icon = interfaceIcons.radar;

  return (
    <ModuleSection
      id="ai-workflow"
      eyebrow="AI workflow"
      title="AI is a method, not a costume."
      description="The workflow shows where AI accelerates thinking, and where human validation protects accuracy, taste, and accountability."
      dense
    >
      <div className="workflow-console">
        <div className="workflow-header">
          <Icon size={18} />
          <span>research → planning → validation → deployment</span>
        </div>
        <div className="workflow-rail">
          {aiWorkflow.map((step, index) => (
            <motion.div
              className="workflow-step"
              key={step.label}
              initial={{ opacity: 0.72 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
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
