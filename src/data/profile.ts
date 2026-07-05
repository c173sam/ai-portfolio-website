import {
  BookOpenText,
  BrainCircuit,
  ClipboardCheck,
  Code2,
  FileText,
  GitBranch,
  LifeBuoy,
  Network,
  Radar,
  ShieldCheck,
  Waypoints
} from "lucide-react";
import type { Capability, CaseStudy, Decision, NavigationItem, ProcessStep } from "../types";

export const profile = {
  initials: "XN",
  name: "Xu Nianqi",
  chineseName: "徐念齐",
  role: "Technical Support / Project Coordination Intern",
  location: "Shanghai, China",
  email: "xumou173@gmail.com",
  phone: "19186426056",
  github: "https://github.com/c173sam/ai-portfolio-website",
  resumeHref: `${import.meta.env.BASE_URL}resume.docx`,
  summary:
    "A technical support and project coordination candidate with hands-on IT operations experience in logistics infrastructure, network troubleshooting, endpoint support, security response, documentation, and AI-assisted workflow design.",
  thesis:
    "I turn operational ambiguity into structured support workflows, clear documentation, and reliable execution."
};

export const navigation: NavigationItem[] = [
  { id: "introduction", label: "Introduction", descriptor: "Positioning" },
  { id: "capabilities", label: "Capabilities", descriptor: "Evidence" },
  { id: "case-studies", label: "Case Studies", descriptor: "Thinking" },
  { id: "process", label: "Process", descriptor: "Execution" },
  { id: "ai-workflow", label: "AI Workflow", descriptor: "Method" },
  { id: "decisions", label: "Decisions", descriptor: "Taste" },
  { id: "resume", label: "Resume", descriptor: "Proof" },
  { id: "contact", label: "Contact", descriptor: "Next step" }
];

export const capabilities: Capability[] = [
  {
    title: "Technical Support",
    signal: "Server inspection, endpoint support, PDA devices, office network troubleshooting.",
    evidence: "Supported 30+ device and network incidents in a logistics park environment.",
    icon: LifeBuoy
  },
  {
    title: "Network Infrastructure",
    signal: "TCP/IP, VLAN planning, switch configuration, router basics, connectivity analysis.",
    evidence: "Completed campus LAN topology planning, VLAN design, testing, and documentation.",
    icon: Network
  },
  {
    title: "Monitoring & Security",
    signal: "Zabbix, Prometheus, Grafana basics, log analysis, endpoint security handling.",
    evidence: "Participated in terminal security management, malware risk response, isolation, and remediation.",
    icon: ShieldCheck
  },
  {
    title: "Project Coordination",
    signal: "Stakeholder coordination, vendor collaboration, issue tracking, project support.",
    evidence: "Acted as on-site technical interface across IT, business stakeholders, and suppliers.",
    icon: ClipboardCheck
  },
  {
    title: "Documentation",
    signal: "SOP writing, inspection records, fault handling notes, knowledge-base maintenance.",
    evidence: "Converted operational experience into reusable documents for team efficiency.",
    icon: FileText
  },
  {
    title: "AI-assisted Delivery",
    signal: "Research, prompt framing, rapid prototyping, human validation, iteration, deployment.",
    evidence: "Built and published this GitHub Pages portfolio as a structured career artifact.",
    icon: BrainCircuit
  }
];

export const skillSignals = [
  "Windows Server",
  "Linux Basics",
  "TCP/IP",
  "VLAN",
  "Switch Configuration",
  "Zabbix",
  "Prometheus",
  "Grafana",
  "Log Analysis",
  "Endpoint Security",
  "SOP Writing",
  "Cross-functional Communication",
  "Stakeholder Coordination",
  "Git",
  "GitHub",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Prompt Engineering"
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Logistics Park IT Operations Support",
    type: "Internship Experience",
    context:
      "Shanghai Deppon Logistics required stable IT operations across warehouse systems, servers, network devices, PDA terminals, automation equipment, and office networks.",
    problem:
      "Business operations depend on fast incident response. Device failures, network instability, or endpoint security issues can interrupt warehouse and logistics workflows.",
    constraints: [
      "Support work happened in a live business environment.",
      "Issues required coordination across IT, business teams, and vendors.",
      "Documentation needed to be useful for future handling, not just record keeping."
    ],
    solution:
      "Performed daily inspections, monitored operational status, handled on-site troubleshooting, coordinated resources, and documented incident patterns for team reuse.",
    engineering: [
      "Inspected servers, network devices, endpoints, PDA terminals, and automation equipment.",
      "Analyzed office network and equipment failures through on-site observation and connectivity checks.",
      "Supported malware risk handling through isolation, vulnerability remediation, and security policy improvement."
    ],
    aiWorkflow:
      "AI can strengthen this workflow by generating troubleshooting checklists, incident summaries, SOP drafts, and knowledge-base structures after human validation.",
    result:
      "Handled 30+ device and network incidents while supporting stable warehouse and logistics system operation.",
    reflection:
      "The strongest support work is quiet: it makes incidents traceable, stakeholders aligned, and repeated problems easier to solve next time."
  },
  {
    title: "Campus Network Planning & Implementation",
    type: "Technical Project",
    context:
      "A campus LAN planning project covering network topology, VLAN segmentation, switch configuration, connectivity testing, and deployment documentation.",
    problem:
      "A network plan is only useful if the topology is understandable, segmentation is intentional, and testing records can prove the implementation works.",
    constraints: [
      "Topology needed to be readable for non-authors.",
      "VLAN design had to support practical segmentation.",
      "Fault simulation and testing had to produce reusable evidence."
    ],
    solution:
      "Designed the network topology, planned VLANs, completed basic switch configuration, tested connectivity, simulated faults, and organized deployment documents.",
    engineering: [
      "Used Visio to communicate the topology clearly.",
      "Configured switching fundamentals and tested network reachability.",
      "Documented test records and troubleshooting observations."
    ],
    aiWorkflow:
      "AI can review topology assumptions, translate technical steps into clearer documentation, and help structure test records for later reuse.",
    result:
      "Produced topology diagrams, configuration notes, troubleshooting records, and project documentation.",
    reflection:
      "A good infrastructure project is not just configured correctly. It is explainable, testable, and maintainable."
  },
  {
    title: "Interactive AI Career Experience",
    type: "Productized Portfolio",
    context:
      "A recruiter-facing digital experience created to present technical support capability, project coordination potential, AI workflow maturity, and GitHub delivery quality.",
    problem:
      "A traditional resume can list experience, but it rarely demonstrates information architecture, design judgment, engineering quality, and delivery process.",
    constraints: [
      "The content must stay truthful to the resume.",
      "The visual system must feel like a premium product, not a student template.",
      "The project must remain maintainable and deployable through GitHub."
    ],
    solution:
      "Built a modular React experience with structured data, reusable components, calm motion, dark product aesthetics, and a deployable GitHub Pages workflow.",
    engineering: [
      "Separated profile data, interface modules, hooks, and page composition.",
      "Used TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide React.",
      "Published source code and static build through GitHub."
    ],
    aiWorkflow:
      "AI supported content structuring, design critique, component scaffolding, README drafting, and iterative quality review.",
    result:
      "Created a public career artifact that demonstrates both resume facts and modern AI-assisted delivery behavior.",
    reflection:
      "The portfolio itself is evidence: it shows how raw career material becomes a designed, testable, and shipped product."
  }
];

export const engineeringProcess: ProcessStep[] = [
  { label: "Observe", description: "Start from operational context, user pain, and business interruption risk." },
  { label: "Structure", description: "Turn unclear issues into incident categories, constraints, owners, and next actions." },
  { label: "Execute", description: "Apply technical checks, coordinate resources, document decisions, and close loops." },
  { label: "Review", description: "Validate results with human judgment, evidence, and stakeholder feedback." },
  { label: "Systemize", description: "Convert repeatable work into SOPs, templates, knowledge-base entries, and workflows." }
];

export const aiWorkflow: ProcessStep[] = [
  { label: "Research", description: "Gather role expectations, technical context, and examples before writing or building." },
  { label: "Planning", description: "Define the target outcome, constraints, audience, and acceptance criteria." },
  { label: "Prompt Engineering", description: "Frame prompts with context, task boundaries, examples, and review standards." },
  { label: "Rapid Prototype", description: "Generate a first version quickly, then inspect structure, tone, and feasibility." },
  { label: "Human Validation", description: "Check every claim against resume facts, technical reality, and recruiter value." },
  { label: "Iteration", description: "Refine hierarchy, motion, copy, accessibility, and responsiveness." },
  { label: "Deployment", description: "Ship through GitHub with a clean repository and reproducible build." },
  { label: "Reflection", description: "Record what improved, what remains uncertain, and what should be upgraded next." }
];

export const designDecisions: Decision[] = [
  {
    principle: "Calm confidence",
    choice: "Almost-black interface, soft gray typography, one restrained cyan accent.",
    reason: "The page should feel like serious software, not decorative self-promotion."
  },
  {
    principle: "Evidence over claims",
    choice: "Case studies explain context, problem, constraints, solution, engineering, result, and reflection.",
    reason: "Recruiters learn how the candidate thinks, not only what tools are listed."
  },
  {
    principle: "Invisible complexity",
    choice: "Reusable data-driven components and a small app shell.",
    reason: "Maintainability is part of the portfolio signal."
  },
  {
    principle: "Motion with purpose",
    choice: "Subtle opacity, blur, elevation, and active-section transitions.",
    reason: "Animation guides attention without becoming entertainment."
  }
];

export const resumeFacts = [
  {
    label: "Experience",
    value: "IT Operations & Technical Support Intern, Shanghai Deppon Logistics, 2024.01 - 2024.12"
  },
  {
    label: "Education",
    value: "Modern Communication Technology, Shandong Vocational College of Light Industry, 2023.09 - 2027.06"
  },
  {
    label: "Courses",
    value: "Computer Networks, Linux System Administration, Network Security, Database Basics, Communication Principles"
  },
  {
    label: "Language",
    value: "Chinese native; English reading for technical documentation and information retrieval"
  }
];

export const interfaceIcons = {
  code: Code2,
  radar: Radar,
  branch: GitBranch,
  book: BookOpenText,
  waypoints: Waypoints
};
