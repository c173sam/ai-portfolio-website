import { motion } from "framer-motion";
import { ArrowUpRight, FileDown, Github, Mail } from "lucide-react";
import type { ReactNode } from "react";
import { navigation, profile } from "../data/profile";
import { useActiveSection } from "../hooks/useActiveSection";

export function ExperienceShell({ children }: { children: ReactNode }) {
  const activeSection = useActiveSection(navigation.map((item) => item.id));

  return (
    <main className="experience-root">
      <div className="ambient-grid" aria-hidden="true" />
      <aside className="workspace-rail" aria-label="Experience navigation">
        <a className="identity-lockup" href="#introduction" aria-label="Back to introduction">
          <span>{profile.initials}</span>
          <strong>{profile.name}</strong>
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

        <div className="rail-actions">
          <a href={profile.resumeHref}>
            <FileDown size={16} /> Resume
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github size={16} /> GitHub
          </a>
        </div>
      </aside>

      <section className="mobile-topbar" aria-label="Mobile navigation">
        <a href="#introduction">{profile.initials}</a>
        <div>
          <a href={profile.resumeHref} aria-label="Download resume">
            <FileDown size={17} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email Xu Nianqi">
            <Mail size={17} />
          </a>
        </div>
      </section>

      <div className="experience-canvas">{children}</div>

      <motion.a
        className="floating-contact"
        href="#contact"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        Contact <ArrowUpRight size={16} />
      </motion.a>
    </main>
  );
}
