import {
  BrainCircuit,
  ClipboardCheck,
  Code2,
  FileText,
  LifeBuoy,
  MessageSquare,
  Network,
  SearchCheck,
  Waypoints,
  Wrench
} from "lucide-react";
import type { Capability, CaseStudy, NavigationItem, ProcessStep } from "../types";

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
    "I turn fragmented information, technical issues, and unclear processes into structured support workflows, clean documentation, and reliable execution.",
  thesis:
    "I build systems that reduce operational chaos."
};

export const navigation: NavigationItem[] = [
  { id: "work", label: "Work", descriptor: "Selected evidence" },
  { id: "process", label: "Process", descriptor: "Delivery logic" },
  { id: "resume", label: "Resume", descriptor: "Proof" },
  { id: "contact", label: "Contact", descriptor: "Next step" }
];

export const capabilities: Capability[] = [
  {
    title: "Technical Support",
    signal: "Keeps business systems usable by turning device, network, and endpoint issues into clear support actions.",
    evidence: "Creates value through uptime, faster diagnosis, and less operational interruption.",
    icon: LifeBuoy
  },
  {
    title: "Project Coordination",
    signal: "Aligns IT, business stakeholders, and suppliers around owners, next steps, and closure.",
    evidence: "Creates value by reducing ambiguity between technical teams and operational users.",
    icon: ClipboardCheck
  },
  {
    title: "Documentation",
    signal: "Converts inspections, incidents, and implementation logic into reusable SOPs and support records.",
    evidence: "Creates value by making repeated problems easier to resolve and transfer.",
    icon: FileText
  },
  {
    title: "Troubleshooting",
    signal: "Breaks down unclear technical issues through observation, connectivity checks, and structured elimination.",
    evidence: "Creates value through faster response and more reliable incident handling.",
    icon: Wrench
  },
  {
    title: "Cross-functional Communication",
    signal: "Translates technical status into language stakeholders can use to make decisions.",
    evidence: "Creates value by keeping teams aligned during live operational pressure.",
    icon: MessageSquare
  },
  {
    title: "Workflow Structuring",
    signal: "Uses AI-assisted research, prompt design, and human review to turn scattered work into repeatable systems.",
    evidence: "Creates value by improving speed without sacrificing accuracy or ownership.",
    icon: BrainCircuit
  }
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Logistics IT Operation Support",
    type: "Case 01",
    context:
      "Deppon Logistics IT operations support.",
    problem:
      "Hardware, network, endpoint and process issues often appeared in fragmented operational environments.",
    constraints: [],
    solution:
      "Supported troubleshooting, endpoint handling, documentation, and coordination.",
    engineering: [
      "Windows Server",
      "Linux Basics",
      "Endpoint Support",
      "Network Devices",
      "Documentation"
    ],
    aiWorkflow: "",
    result:
      "Improved issue visibility, response structure, and operational reliability.",
    reflection: ""
  },
  {
    title: "Campus Network Planning",
    type: "Case 02",
    context:
      "Network planning and technical documentation.",
    problem:
      "A campus network required clear topology, device planning, security logic and maintainable documentation.",
    constraints: [],
    solution:
      "Designed network structure, organized technical logic, produced documentation.",
    engineering: ["TCP/IP", "VLAN", "Switch Configuration", "Visio", "Technical Documentation"],
    aiWorkflow: "",
    result:
      "Built a structured technical plan that demonstrated system thinking.",
    reflection: ""
  },
  {
    title: "Interactive AI Career Experience",
    type: "Case 03",
    context:
      "Using AI-assisted development to transform resume experience into a deployed interactive website.",
    problem:
      "A normal resume cannot fully show workflow, design sense and engineering implementation.",
    constraints: [],
    solution:
      "Used prompt engineering, AI-assisted coding, human review, iteration and GitHub Pages deployment.",
    engineering: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "GitHub Pages"],
    aiWorkflow: "",
    result:
      "Created a live career experience demonstrating AI workflow and frontend execution.",
    reflection: ""
  }
];

export const engineeringProcess: ProcessStep[] = [
  { label: "Requirements", description: "Defined the site as an interactive resume product, not a generic portfolio." },
  { label: "Information Architecture", description: "Reduced content into work evidence, capability value, workflow, process, and proof." },
  { label: "Component Design", description: "Separated profile data, sections, and reusable interface patterns for maintainability." },
  { label: "Motion Design", description: "Used restrained opacity, blur, and translate to guide attention without distraction." },
  { label: "Responsive Layout", description: "Built a single-column mobile experience and spacious desktop composition." },
  { label: "Deployment", description: "Published the final static build through GitHub Pages with a reproducible Vite build." }
];

export const aiWorkflow: ProcessStep[] = [
  { label: "Research", description: "Clarify role expectations, resume facts, and recruiter decision signals." },
  { label: "Prompt Design", description: "Frame the task with constraints, tone, audience, and quality bar." },
  { label: "Prototype", description: "Use AI to accelerate first-pass structure, copy, and component direction." },
  { label: "Human Review", description: "Validate facts, remove exaggeration, and check whether the result feels credible." },
  { label: "Refactor", description: "Improve architecture, hierarchy, responsive behavior, and interaction restraint." },
  { label: "Deploy", description: "Build, commit, push, and publish through GitHub Pages." }
];

export const resumeFacts = [
  {
    label: "Internship direction",
    value: "Technical Support / Project Coordination / Digital Operations / Solution Support"
  },
  {
    label: "Technical support experience",
    value: "IT Operations & Technical Support Intern, Shanghai Deppon Logistics, 2024.01 - 2024.12"
  },
  {
    label: "Project coordination ability",
    value: "Stakeholder coordination, supplier communication, issue tracking, documentation, and project support"
  },
  {
    label: "AI-assisted development ability",
    value: "Prompt engineering, AI-assisted coding, human review, iteration, and documentation"
  },
  {
    label: "GitHub deployment proof",
    value: "Live React + TypeScript website deployed through GitHub Pages"
  }
];

export const interfaceIcons = {
  code: Code2,
  radar: SearchCheck,
  branch: Network,
  book: FileText,
  waypoints: Waypoints
};
