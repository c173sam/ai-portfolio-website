import { motion } from "framer-motion";
import { ArrowUpRight, FileDown, Github, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "../data/profile";

export function Introduction() {
  return (
    <section className="intro-screen" id="introduction">
      <motion.div
        className="intro-copy"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="context-line">
          <span>Career OS</span>
          <span>{profile.location}</span>
          <span>Open to internship roles</span>
        </div>
        <h1>{profile.name}</h1>
        <p className="intro-role">{profile.role}</p>
        <p className="intro-summary">{profile.summary}</p>
        <div className="intro-actions">
          <a className="primary-action" href="#case-studies">
            Explore evidence <ArrowUpRight size={17} />
          </a>
          <a href={profile.resumeHref}>
            Resume <FileDown size={17} />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub <Github size={17} />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="operator-console"
        initial={{ opacity: 0, scale: 0.97, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.16, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="console-header">
          <span>candidate.signal</span>
          <small>verified resume data</small>
        </div>
        <div className="signal-statement">
          <span>Thesis</span>
          <strong>{profile.thesis}</strong>
        </div>
        <div className="signal-grid">
          <div>
            <small>Experience</small>
            <strong>IT operations support</strong>
          </div>
          <div>
            <small>Environment</small>
            <strong>Logistics infrastructure</strong>
          </div>
          <div>
            <small>Workflow</small>
            <strong>AI-assisted documentation</strong>
          </div>
          <div>
            <small>Delivery</small>
            <strong>GitHub Pages</strong>
          </div>
        </div>
        <div className="contact-strip">
          <a href={`mailto:${profile.email}`}>
            <Mail size={15} /> {profile.email}
          </a>
          <a href={`tel:${profile.phone}`}>
            <Phone size={15} /> {profile.phone}
          </a>
          <span>
            <MapPin size={15} /> {profile.location}
          </span>
        </div>
      </motion.div>
    </section>
  );
}
