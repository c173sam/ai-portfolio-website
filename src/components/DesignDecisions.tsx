import { designDecisions, interfaceIcons } from "../data/profile";
import { ModuleSection } from "./ModuleSection";

export function DesignDecisions() {
  const Icon = interfaceIcons.book;

  return (
    <ModuleSection
      id="decisions"
      eyebrow="Design decisions"
      title="The interface has a point of view."
      description="The visual system avoids common portfolio tropes and treats the page as a calm product surface."
    >
      <div className="decision-ledger">
        {designDecisions.map((decision) => (
          <article key={decision.principle}>
            <div>
              <Icon size={17} />
              <span>{decision.principle}</span>
            </div>
            <h3>{decision.choice}</h3>
            <p>{decision.reason}</p>
          </article>
        ))}
      </div>
    </ModuleSection>
  );
}
