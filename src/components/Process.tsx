import { engineeringProcess, interfaceIcons } from "../data/profile";
import { ModuleSection } from "./ModuleSection";

export function Process() {
  const Icon = interfaceIcons.waypoints;

  return (
    <ModuleSection
      id="process"
      eyebrow="Engineering process"
      title="How this site was built."
      description="The process communicates product delivery ability: requirements, information architecture, component design, motion, responsive layout, and deployment."
    >
      <div className="process-board">
        {engineeringProcess.map((step, index) => (
          <div className="process-node" key={step.label}>
            <div>
              <Icon size={17} />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <h3>{step.label}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </ModuleSection>
  );
}
