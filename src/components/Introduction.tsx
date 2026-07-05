import { motion } from "framer-motion";
import { ArrowUpRight, FileDown, Github } from "lucide-react";
import { profile } from "../data/profile";

export function Introduction() {
  return (
    <section className="intro-screen" id="hero">
      <motion.div
        className="intro-copy"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="context-line">
          <span>{profile.name}</span>
          <span>{profile.location}</span>
        </div>
        <h1>{profile.thesis}</h1>
        <p className="intro-role">Technical Support / Project Coordination / AI-assisted Workflow</p>
        <p className="intro-summary">{profile.summary}</p>
        <div className="intro-actions">
          <a className="primary-action" href="#work">
            Explore selected work <ArrowUpRight size={17} />
          </a>
          <a href={profile.resumeHref}>
            Resume <FileDown size={17} />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub <Github size={17} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
