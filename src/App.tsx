import { AIWorkflow } from "./components/AIWorkflow";
import { Capabilities } from "./components/Capabilities";
import { CaseStudies } from "./components/CaseStudies";
import { ExperienceShell } from "./components/ExperienceShell";
import { Introduction } from "./components/Introduction";
import { Process } from "./components/Process";
import { ResumeContact } from "./components/ResumeContact";

export default function App() {
  return (
    <ExperienceShell>
      <Introduction />
      <CaseStudies />
      <Capabilities />
      <AIWorkflow />
      <Process />
      <ResumeContact />
    </ExperienceShell>
  );
}
