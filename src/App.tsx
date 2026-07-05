import { AIWorkflow } from "./components/AIWorkflow";
import { Capabilities } from "./components/Capabilities";
import { CaseStudies } from "./components/CaseStudies";
import { DesignDecisions } from "./components/DesignDecisions";
import { ExperienceShell } from "./components/ExperienceShell";
import { Introduction } from "./components/Introduction";
import { Process } from "./components/Process";
import { ResumeContact } from "./components/ResumeContact";

export default function App() {
  return (
    <ExperienceShell>
      <Introduction />
      <Capabilities />
      <CaseStudies />
      <Process />
      <AIWorkflow />
      <DesignDecisions />
      <ResumeContact />
    </ExperienceShell>
  );
}
