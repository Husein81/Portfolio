import type { JourneyEntry } from "../types";

/** Newest first. `start` keeps the order honest if entries are edited. */
export const journey: JourneyEntry[] = [
  {
    period: "Jun 2026 — Present",
    start: "2026-06",
    kind: "Full-time",
    role: "Software Developer",
    org: "Municipality of El Bazourieh",
    summary:
      "Built a sales and mechanization management application as part of a team, using Next.js deployed on Vercel, NestJS hosted on AWS Lightsail, and PostgreSQL, with Nginx configured as a reverse proxy for secure and efficient backend traffic. Developed REST APIs to manage sales records, equipment inventory, and field operations, while integrating geolocation and interactive maps to track mechanization assets and support location based sales operations across the municipality.",
    tags: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "AWS Lightsail",
      "Nginx",
      "REST APIs",
      "Geolocation",
      "System Design",
    ],
  },
  {
    period: "Dec 2025 — Present",
    start: "2025-12",
    kind: "Full-time",
    role: "Software Engineer",
    org: "SPCI",
    summary:
      "Built and maintained full stack mobile applications with a Vue.js frontend and ASP.NET Core backend, applying system design principles to keep the codebase scalable as features grew. Used Claude Code to accelerate development of a CRM outbox feature and offline sync, cutting initial prototyping time by roughly 30% while preserving reliability of data delivery. Migrated legacy server side flows into modular, maintainable Vue.js components and integrated RESTful APIs against SQL Server via Entity Framework Core.",
    tags: [
      "Vue.js",
      "ASP.NET Core",
      "SQL Server",
      "Entity Framework Core",
      "Claude Code",
      "System Design",
      "Offline Sync",
    ],
  },
  {
    period: "Dec 2024 — Oct 2025",
    start: "2024-12",
    kind: "Full-time",
    role: "Software Engineer",
    org: "Omega Crop",
    summary:
      "Built real time geospatial visualization components in Electron/React for a crop-tracking SaaS desktop app used in field operations, designed for scalability across large, live datasets. Integrated Firebase for live crop status updates and improved UI/UX patterns to reduce steps for common field monitoring tasks, prioritizing system reliability in low connectivity environments.",
    tags: [
      "Electron",
      "React",
      "Firebase",
      "Geospatial",
      "UI/UX",
      "Offline-first",
    ],
  },
  {
    period: "Jun 2023 — Nov 2023",
    start: "2023-06",
    kind: "Full-time",
    role: "Backend Developer",
    org: "Smart Soft",
    summary:
      "Architected a microservices based, real time bidding platform on .NET 9 and RabbitMQ, designing for scalability and reliability under concurrent bidding load, using Claude Code to generate event driven schemas and DTOs across Auction and Bidding services. Built a Next.js/TypeScript frontend with NextAuth and React Query; containerized the full stack with Docker and Kubernetes for maintainable, reproducible deployments.",
    tags: [
      ".NET 9",
      "RabbitMQ",
      "Microservices",
      "Next.js",
      "TypeScript",
      "Docker",
      "Kubernetes",
      "Claude Code",
    ],
  },
  {
    period: "Nov 2021 — Jun 2024",
    start: "2021-11",
    kind: "Education",
    role: "Bachelor of Computer Science",
    org: "Lebanese University, Beirut",
    summary:
      "Graduated with a Bachelor of Computer Science. Languages: English, Arabic.",
    tags: ["English", "Arabic"],
  },
];
