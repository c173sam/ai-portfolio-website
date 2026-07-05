import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  FileDown,
  Github,
  GitPullRequestArrow,
  MapPin,
  Mail,
  Phone,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Workflow
} from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

const navItems = ["About", "Capabilities", "Skills", "Projects", "Workflow", "Contact"];

const commandSteps = [
  { label: "Research", icon: Search, status: "Support context mapped" },
  { label: "Prompt Design", icon: BrainCircuit, status: "Requirements framed clearly" },
  { label: "Code Generation", icon: TerminalSquare, status: "Portfolio components drafted" },
  { label: "Human Review", icon: ShieldCheck, status: "Resume facts verified" },
  { label: "Deployment", icon: Rocket, status: "Ready for GitHub and Vercel" }
];

const capabilities = [
  {
    title: "Prompt Engineering",
    description: "Translate ambiguous business goals into precise prompts, constraints, examples, and validation criteria."
  },
  {
    title: "AI-assisted Coding",
    description: "Use AI pair programming to scaffold features faster while keeping human review, refactoring, and testing in control."
  },
  {
    title: "Research & Analysis",
    description: "Summarize market, product, and technical information into structured insights for implementation decisions."
  },
  {
    title: "Document Automation",
    description: "Create polished reports, README files, workflows, and reusable templates with consistent professional language."
  },
  {
    title: "Workflow Optimization",
    description: "Design repeatable processes for task tracking, GitHub collaboration, issue handling, and delivery checkpoints."
  }
];

const skillGroups = [
  {
    title: "Technical Support",
    icon: Code2,
    skills: ["Windows Server", "Linux Basics", "Endpoint Support", "Troubleshooting", "PDA Devices", "On-site Support"]
  },
  {
    title: "Network & Infrastructure",
    icon: Bot,
    skills: ["TCP/IP", "VLAN", "Switch Configuration", "Router Basics", "Connectivity Analysis", "Network Topology"]
  },
  {
    title: "Monitoring & Security",
    icon: GitPullRequestArrow,
    skills: ["Zabbix", "Prometheus", "Grafana Basics", "Log Analysis", "Endpoint Security", "Vulnerability Fixing"]
  },
  {
    title: "AI & GitHub Workflow",
    icon: BrainCircuit,
    skills: ["ChatGPT", "Codex", "Prompt Engineering", "Git", "GitHub", "README Writing", "Vercel Deployment"]
  },
  {
    title: "Professional Skills",
    icon: BriefcaseBusiness,
    skills: [
      "Technical Support",
      "Project Support",
      "Problem Solving",
      "Cross-functional Communication",
      "Stakeholder Coordination",
      "Vendor Coordination",
      "Documentation",
      "SOP Writing"
    ]
  }
];

const projects = [
  {
    title: "Logistics Park IT Operations Support",
    description: "On-site IT operations and technical support experience for servers, network devices, endpoint terminals, PDA devices, and office networks.",
    stack: ["Windows Server", "Linux Basics", "Network Devices", "Endpoint Support"],
    ai: "AI can assist with incident summary drafting, troubleshooting checklists, and knowledge-base article structuring.",
    problem: "Warehouse and logistics systems require stable device, network, and endpoint operation to avoid business disruption.",
    outcome: "Handled 30+ device and network issues, supported daily inspection, monitoring, security response, and cross-team issue closure.",
    accent: "oklch(0.76 0.11 200)"
  },
  {
    title: "Campus Network Planning Project",
    description: "A campus LAN planning and implementation project covering topology design, VLAN planning, switch configuration, testing, and deployment documentation.",
    stack: ["TCP/IP", "VLAN", "Switch Configuration", "Visio", "Troubleshooting"],
    ai: "AI can be used to review topology assumptions, convert test records into documentation, and improve technical explanations.",
    problem: "Campus networks need clear segmentation, readable topology diagrams, and repeatable connectivity testing.",
    outcome: "Completed topology planning, VLAN design, basic switch configuration, fault simulation, connectivity tests, and project documentation.",
    accent: "oklch(0.74 0.13 155)"
  },
  {
    title: "Personal AI Portfolio Website",
    description: "A professional portfolio website designed to present technical support experience, project coordination potential, and AI-assisted development awareness.",
    stack: ["React", "TypeScript", "Framer Motion", "Vercel"],
    ai: "AI supports information architecture, English copy refinement, component scaffolding, and README documentation.",
    problem: "A resume alone does not fully show workflow thinking, digital presentation ability, or GitHub-ready delivery.",
    outcome: "A recruiter-facing website that connects resume facts with AI workflow, implementation ability, and professional communication.",
    accent: "oklch(0.82 0.12 78)"
  }
];

const workflow = [
  "Research",
  "Prompt Design",
  "AI-assisted Coding",
  "Human Review",
  "Optimization",
  "Deployment"
];

const highlights = [
  "AI-enhanced productivity",
  "Technical support experience",
  "Structured problem solving",
  "Documentation awareness",
  "Cross-functional coordination",
  "Global company mindset"
];

const fadeUp = {
  hidden: { opacity: 0.88, y: 18 },
  visible: { opacity: 1, y: 0 }
};

function Section({
  id,
  title,
  intro,
  children
}: {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <motion.section
      id={id}
      className="section-shell"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="section-heading">
        <h2>{title}</h2>
        {intro ? <p>{intro}</p> : null}
      </div>
      {children}
    </motion.section>
  );
}

function IconBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="icon-badge">
      <Icon size={18} strokeWidth={1.8} />
    </span>
  );
}

function AICommandPanel() {
  return (
    <motion.div
      className="command-panel"
      initial={{ opacity: 0, scale: 0.96, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="panel-topbar">
        <div className="window-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span className="panel-title">AI Command Panel</span>
        <span className="panel-live">
          <Sparkles size={14} /> Live workflow
        </span>
      </div>

      <div className="prompt-console">
        <p className="console-label">Active prompt</p>
        <p>
          Build a recruiter-ready portfolio for a technical support and project
          coordination candidate, using verified resume facts and AI-assisted
          delivery discipline.
        </p>
      </div>

      <div className="command-flow">
        {commandSteps.map((step, index) => (
          <motion.div
            className="command-step"
            key={step.label}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.28 + index * 0.1, duration: 0.45 }}
          >
            <div className="step-index">{String(index + 1).padStart(2, "0")}</div>
            <IconBadge icon={step.icon} />
            <div>
              <strong>{step.label}</strong>
              <span>{step.status}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="panel-metrics" aria-label="Portfolio workflow metrics">
        <div>
          <span>Review loop</span>
          <strong>Human-led</strong>
        </div>
        <div>
          <span>Output</span>
          <strong>GitHub-ready</strong>
        </div>
      </div>
    </motion.div>
  );
}

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-ink">
      <div className="site-backdrop" aria-hidden="true" />
      <header className="site-header">
        <a className="brand-mark" href="#top" aria-label="Back to top">
          YN
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}>
              {item}
            </a>
          ))}
        </nav>
      </header>

      <section id="top" className="hero-shell">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="availability-pill">
            <span />
            Shanghai-based · Open to internship opportunities
          </div>
          <h1>Xu Nianqi</h1>
          <p className="hero-role">
            Technical Support / Project Coordination Intern / AI-assisted Workflow Builder
          </p>
          <p className="hero-intro">
            I bring hands-on IT operations and technical support experience from a
            logistics park environment, with a strong interest in digital operations,
            solution support, project coordination, and AI-assisted documentation.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#projects">
              View Projects <ArrowUpRight size={18} />
            </a>
            <a className="button-secondary" href="/resume.docx">
              Download Resume <FileDown size={18} />
            </a>
            <a className="button-ghost" href="#contact">
              GitHub <Github size={18} />
            </a>
          </div>
        </motion.div>
        <AICommandPanel />
      </section>

      <Section
        id="about"
        title="Positioned for support-driven digital operations"
        intro="A resume-backed portfolio for technical support, project coordination, digital operations, and solution support internship opportunities."
      >
        <div className="about-grid">
          <article className="feature-panel">
            <h3>Profile</h3>
            <p>
              I am a modern communication technology student with practical IT operations
              experience in server inspection, network device maintenance, endpoint support,
              and information security management.
            </p>
          </article>
          <article className="feature-panel emphasized">
            <h3>Career Goal</h3>
            <p>
              To grow in a global company across Technical Support, Digital Operations,
              Project Coordination, and Solution Support roles, combining technical execution
              with business understanding.
            </p>
          </article>
          <article className="feature-panel">
            <h3>AI Capability</h3>
            <p>
              I use AI to strengthen research, troubleshooting checklists, documentation,
              workflow summaries, and English technical information retrieval while keeping
              review and final decisions human-led.
            </p>
          </article>
        </div>
      </Section>

      <Section
        id="capabilities"
        title="AI capability system"
        intro="Concrete ways AI improves my workflow without replacing ownership or critical thinking."
      >
        <div className="capability-grid">
          {capabilities.map((item, index) => (
            <motion.article
              className="capability-card"
              key={item.title}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section
        id="skills"
        title="Skill stack"
        intro="A practical combination of IT support, network fundamentals, monitoring awareness, AI workflow, and workplace coordination."
      >
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-panel" key={group.title}>
              <div className="skill-heading">
                <IconBadge icon={group.icon} />
                <h3>{group.title}</h3>
              </div>
              <div className="tag-cloud">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="projects"
        title="Selected project concepts"
        intro="Portfolio-ready projects that show implementation skill, business awareness, AI workflow, and GitHub presentation quality."
      >
        <div className="projects-grid">
          {projects.map((project) => (
            <motion.article
              className="project-card"
              key={project.title}
              style={{ "--project-accent": project.accent } as CSSProperties}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
            >
              <div className="project-visual">
                <Workflow size={34} />
                <span />
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <dl>
                <div>
                  <dt>AI involvement</dt>
                  <dd>{project.ai}</dd>
                </div>
                <div>
                  <dt>Problem solved</dt>
                  <dd>{project.problem}</dd>
                </div>
                <div>
                  <dt>Outcome</dt>
                  <dd>{project.outcome}</dd>
                </div>
              </dl>
              <div className="project-stack">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-actions">
                <a href="#contact">
                  GitHub <Github size={16} />
                </a>
                <a href="#top">
                  Demo <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section
        id="workflow"
        title="Delivery workflow"
        intro="The same process can be applied to websites, dashboards, support documentation, and internal automation tasks."
      >
        <div className="timeline">
          {workflow.map((item, index) => (
            <div className="timeline-item" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="resume-highlights"
        title="Resume highlights"
        intro="Signals that help HR and hiring managers understand how this portfolio maps to internship value."
      >
        <div className="highlight-grid">
          {highlights.map((highlight) => (
            <div className="highlight-item" key={highlight}>
              <CheckCircle2 size={18} />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact" intro="Replace the placeholders below with your real links before publishing.">
        <div className="contact-panel">
          <a href="mailto:xumou173@gmail.com">
            <Mail size={18} /> xumou173@gmail.com
          </a>
          <a href="tel:19186426056">
            <Phone size={18} /> 19186426056
          </a>
          <a href="#contact">
            <Github size={18} /> GitHub link to be added
          </a>
          <a href="#contact">
            <MapPin size={18} /> Shanghai, China
          </a>
          <a href="/resume.docx">
            <FileDown size={18} /> Resume Download
          </a>
        </div>
      </Section>
    </main>
  );
}

export default App;
