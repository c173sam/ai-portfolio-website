import { motion } from "framer-motion";
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
          <motion.article
            className="case-study"
            key={study.title}
            initial={{ opacity: 0.88, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 0.6, delay: index * 0.04 }}
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
        ))}
      </div>
    </ModuleSection>
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
