import { motion } from "framer-motion";
import { capabilities, skillSignals } from "../data/profile";
import { ModuleSection } from "./ModuleSection";

export function Capabilities() {
  return (
    <ModuleSection
      id="capabilities"
      eyebrow="Capability map"
      title="Signals, not slogans."
      description="A recruiter should be able to connect each capability to a concrete operating context, technical behavior, or shipped artifact."
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

      <div className="signal-cloud" aria-label="Technical and professional signals">
        {skillSignals.map((signal) => (
          <span key={signal}>{signal}</span>
        ))}
      </div>
    </ModuleSection>
  );
}
