import { ArrowUpRight, FileDown, Github, Mail, MapPin, Phone } from "lucide-react";
import { profile, resumeFacts } from "../data/profile";
import { ModuleSection } from "./ModuleSection";

export function ResumeContact() {
  return (
    <>
      <ModuleSection
        id="resume"
        eyebrow="Resume"
        title="Verified career facts."
        description="The website is designed around real resume evidence: no invented metrics, no decorative claims, no fake social proof."
      >
        <div className="resume-panel">
          {resumeFacts.map((fact) => (
            <div key={fact.label}>
              <span>{fact.label}</span>
              <p>{fact.value}</p>
            </div>
          ))}
          <a className="download-resume" href={profile.resumeHref}>
            Download full resume <FileDown size={17} />
          </a>
        </div>
      </ModuleSection>

      <ModuleSection
        id="contact"
        eyebrow="Contact"
        title="Ready for a structured conversation."
        description="Best fit: technical support, project coordination, digital operations, solution support, and AI-assisted documentation roles."
      >
        <div className="contact-matrix">
          <a href={`mailto:${profile.email}`}>
            <Mail size={18} />
            <span>Email</span>
            <strong>{profile.email}</strong>
          </a>
          <a href={`tel:${profile.phone}`}>
            <Phone size={18} />
            <span>Phone</span>
            <strong>{profile.phone}</strong>
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github size={18} />
            <span>GitHub</span>
            <strong>c173sam/ai-portfolio-website</strong>
          </a>
          <div>
            <MapPin size={18} />
            <span>Location</span>
            <strong>{profile.location}</strong>
          </div>
        </div>
        <a className="closing-link" href={profile.github} target="_blank" rel="noreferrer">
          View source on GitHub <ArrowUpRight size={17} />
        </a>
      </ModuleSection>
    </>
  );
}
