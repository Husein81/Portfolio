import type { NavItem, SocialLink } from "../types";

export const GITHUB_USER = "Husein81";

export const site = {
  name: "Hussein Nasrallah",
  shortName: "Hussein",
  role: "Software Engineer",
  location: "Lebanon",
  email: import.meta.env.VITE_EMAIL_ADDRESS ?? "husseinnasrallah2002@gmail.com",
  resume: "/Hussein_Nasrallah_CV.pdf",
  github: `https://github.com/${GITHUB_USER}`,
  domain: "hussein-nasrallah.dev",
  /** Currently full-time; freelance work has run alongside every full-time role since 2023. */
  availability: "Full-time at CedarPoint · Open to freelance projects",
} as const;

export const navItems: NavItem[] = [
  { id: "problems", label: "Problems" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    href: site.github,
    handle: `github.com/${GITHUB_USER}`,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hussein-nasrallah-645559235",
    handle: "linkedin.com/in/husseinnasrallah",
  },
  {
    label: "X",
    href: "https://x.com/husein_nasralah",
    handle: "x.com/husein_nasralah",
  },
];

/** Repository URL for a project, given its repo name. */
export const repoUrl = (repo: string) =>
  `https://github.com/${GITHUB_USER}/${repo}`;
