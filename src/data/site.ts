import type { NavItem, SocialLink } from "../types";

export const GITHUB_USER = "Husein81";

export const site = {
  name: "Hussein Nasrallah",
  shortName: "Hussein",
  role: "SoftwareEngineer",
  location: "Lebanon",
  email: import.meta.env.VITE_EMAIL_ADDRESS ?? "husseinnasrallah2002@gmail.com",
  resume: "/Hussein_Nasrallah_CV.pdf",
  github: `https://github.com/${GITHUB_USER}`,
  domain: "husseinnasrallah.com",
  /** Currently full-time; freelance and contract work has run alongside roles since 2023. */
  availability: "Software Engineer · Open to select projects",
} as const;

export const navItems: NavItem[] = [
  { id: "problems", label: "Problems" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
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
    href: "https://www.linkedin.com/in/husseinnasrallah",
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
