import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  id: string;
  label: string;
  descriptor: string;
};

export type Capability = {
  title: string;
  signal: string;
  evidence: string;
  icon: LucideIcon;
};

export type CaseStudy = {
  title: string;
  type: string;
  context: string;
  problem: string;
  constraints: string[];
  solution: string;
  engineering: string[];
  aiWorkflow: string;
  result: string;
  reflection: string;
};

export type ProcessStep = {
  label: string;
  description: string;
};

export type Decision = {
  principle: string;
  choice: string;
  reason: string;
};
