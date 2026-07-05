import { FileDown, Github } from "lucide-react";
import type { ReactNode } from "react";
import { navigation, profile } from "../data/profile";
import { useActiveSection } from "../hooks/useActiveSection";
import { AmbientBackground } from "./AmbientBackground";
import { MagneticLink } from "./MagneticLink";

export function ExperienceShell({ children }: { children: ReactNode }) {
  const sectionIds = ["hero", ...navigation.map((item) => item.id)];
  const activeSection = useActiveSection(sectionIds);

  return (
    <main className="experience-root">
      <AmbientBackground />
      <header className="top-navigation">
        <a className="top-mark" href="#hero" aria-label="Back to hero">
          {profile.initials}
        </a>
        <nav>
          {navigation.map((item) => (
            <a
              className={activeSection === item.id ? "active" : ""}
              href={`#${item.id}`}
              key={item.id}
            >
              <span>{item.label}</span>
              <small>{item.descriptor}</small>
            </a>
          ))}
        </nav>
        <div className="top-actions">
          <MagneticLink href={profile.resumeHref}>
            <FileDown size={16} /> Resume
          </MagneticLink>
          <MagneticLink href={profile.github} target="_blank" rel="noreferrer">
            <Github size={16} /> GitHub
          </MagneticLink>
        </div>
      </header>

      <div className="experience-canvas">{children}</div>
    </main>
  );
}
