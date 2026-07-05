import { motion } from "framer-motion";
import { capabilities } from "../data/profile";
import { ModuleSection } from "./ModuleSection";

export function Capabilities() {
  return (
    <ModuleSection
      id="capabilities"
      eyebrow="Operational capability"
      title="Capability that creates business value."
      description="Not a colorful skills list. Each pillar describes how technical support behavior reduces friction for teams and operations."
    >
      <div className="capability-system">
        {capabilities.map((capability, index) => {
          const Icon = capability.icon;
          return (
            <motion.article
              className="capability-tile"
              key={capability.title}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.22 }}
            >
              <div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <Icon size={20} />
              </div>
              <h3>{capability.title}</h3>
              <p>{capability.signal}</p>
              <small>{capability.evidence}</small>
            </motion.article>
          );
        })}
      </div>
    </ModuleSection>
  );
}
