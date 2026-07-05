import { engineeringProcess, interfaceIcons } from "../data/profile";
import { ModuleSection } from "./ModuleSection";

export function Process() {
  const Icon = interfaceIcons.waypoints;

  return (
    <ModuleSection
      id="process"
      eyebrow="Engineering process"
      title="Support work becomes a system."
      description="The operating model is designed for technical support, project coordination, and digital operations work where clarity matters as much as speed."
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
