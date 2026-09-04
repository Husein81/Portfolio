import type { JourneyEntry } from "../types";

/** Newest first. `start` keeps the order honest if entries are edited. */
export const journey: JourneyEntry[] = [
  {
    period: "Nov 2025 — Present",
    start: "2025-11",
    kind: "Full-time",
    role: "Software Engineer",
    org: "CedarPoint",
    summary:
      "Building production-grade POS, retail, and ERP systems for real-world business operations. Designed the POS domain around a complete order lifecycle — draft, hold, multi-payment, refund, and cancellation — using NestJS and TypeScript, with inventory, shifts, RBAC, and audit-safe transaction flows. Designed and implemented ERP services using a microservices architecture, applying system design principles around service boundaries, API contracts, data ownership, and asynchronous communication with RabbitMQ. Built cashier-focused React/Electron interfaces optimized for fast numeric-keypad workflows and offline-capable operations. Integrated inventory deduction with finalized payments and approved refunds to maintain stock consistency, while using AI-assisted test generation to achieve 90%+ edge-case unit test coverage across critical payment logic.",
    tags: [
      "NestJS",
      "TypeScript",
      "React",
      "Electron",
      "Microservices",
      "RabbitMQ",
      "System Design",
      "RBAC",
    ],
  },
  {
    period: "Dec 2025 — Apr 2026",
    start: "2025-12",
    kind: "Full-time",
    role: "Software Engineer",
    org: "SPCI",
    summary:
      "Built and maintained a CRM platform used by field teams, across mobile and web. Migrated legacy server-side Razor Pages flows into modular Vue.js components while preserving SOLID architecture, and built RESTful APIs on SQL Server and Entity Framework Core. Used Claude Code and LLM-driven refactoring to accelerate the CRM outbox feature and offline sync module by roughly 30%.",
    tags: [
      "Vue.js",
      "SQL Server",
      "Entity Framework Core",
      "REST APIs",
      "Claude Code",
    ],
  },
  {
    period: "Apr 2025 — Jul 2025",
    start: "2025-04",
    kind: "Freelance",
    role: "Software Engineer",
    org: "PetSafe",
    summary:
      "Sole developer on a veterinary clinic management app for multi-clinic operations. Delivered a cross-platform React Native client with Zustand for state, covering appointment scheduling, patient records, and multi-clinic data isolation, backed by a Fastify API on Prisma and PostgreSQL with JWT auth and role-based access for clinic staff.",
    tags: [
      "React Native",
      "TypeScript",
      "Zustand",
      "Fastify",
      "Prisma",
      "PostgreSQL",
    ],
  },

  {
    period: "Dec 2024 — Jun 2025",
    start: "2024-12",
    kind: "Freelance",
    role: "Software Engineer",
    org: "Omega Crop",
    summary:
      "Freelance CRM work for field teams, run alongside the SPCI role: modular Vue.js components migrated off legacy Razor Pages, RESTful APIs against SQL Server and Entity Framework Core, and the same AI-augmented workflow used to ship the outbox and offline sync features faster.",
    tags: ["Vue.js", "SQL Server", "Entity Framework Core", "REST APIs"],
  },
  {
    period: "Jun 2023 — Nov 2023",
    start: "2023-06",
    kind: "Full-time",
    role: "Backend Developer",
    org: "Smart Soft",
    summary:
      "Designed and built the Payroll, Orders, Sales, and Dashboard modules of an ERP system in C# and ASP.NET Core with Entity Framework Core, using Mediator and Repository patterns to keep modules separable. Optimised database queries and API endpoints, and documented every API in Swagger for the frontend team.",
    tags: ["C#", "ASP.NET Core", "Entity Framework Core", "Swagger"],
  },
  {
    period: "Nov 2021 — Jun 2024",
    start: "2021-11",
    kind: "Education",
    role: "BSc Computer Science",
    org: "Lebanese University, Beirut",
    summary:
      "Studied computer science while taking on the first freelance and backend contracts listed above.",
    tags: [],
  },
];
