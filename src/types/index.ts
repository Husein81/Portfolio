export type NavItem = {
  id: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export type Project = {
  slug: string;
  name: string;
  /** One line: what it is. */
  tagline: string;
  year: string;
  /** "Solo build", "Freelance", … */
  role: string;
  imageUrl: string;
  /** Portrait-orientation capture (a phone mockup) — crops from the centre. */
  portraitImage?: boolean;
  /** Repository name under the GitHub account, if public. */
  repo?: string;
  liveUrl?: string;
  /** The problem the product addresses. */
  problem: string;
  /** How it was built to address that problem. */
  solution: string;
  /** Technical decisions worth calling out. */
  decisions: string[];
  stack: string[];
};

export type StackGroup = {
  label: string;
  items: StackItem[];
};

export type StackItem = {
  name: string;
  /** Reached for first — rendered at full contrast. */
  primary?: boolean;
};

export type JourneyEntry = {
  period: string;
  /** Sort key: start of the period, YYYY-MM. */
  start: string;
  kind: "Full-time" | "Freelance" | "Education";
  role: string;
  org: string;
  summary: string;
  tags: string[];
};

export type Problem = {
  slug: string;
  icon: string;
  title: string;
  problem: string;
  approach: string;
  result: string;
};

export type Principle = {
  title: string;
  body: string;
};
