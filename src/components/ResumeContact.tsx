import { ArrowUpRight, FileDown, Github, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { profile, resumeFacts } from "../data/profile";
import { ModuleSection } from "./ModuleSection";

export function ResumeContact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  return (
    <>
      <ModuleSection
        id="resume"
        eyebrow="Resume"
        title="Concise proof."
        description="The resume layer stays short: direction, experience, coordination ability, AI-assisted development, and GitHub deployment proof."
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
        title="Contact."
        description="Minimal next-step information for technical support, project coordination, digital operations, and solution support roles."
      >
        <div className="contact-matrix">
          <a
            href={`mailto:${profile.email}`}
            onClick={(event) => {
              event.preventDefault();
              void copyEmail();
            }}
          >
            <Mail size={18} />
            <span>{copied ? "Copied" : "Email"}</span>
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
