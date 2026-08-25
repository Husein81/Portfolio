import type { Project } from "../types";

/**
 * Case studies, ranked by how strongly they prove I can turn a real
 * business problem into working software. The first entry gets the lead
 * treatment on the page.
 */
export const featuredProjects: Project[] = [
  {
    slug: "biddrive",
    name: "BidDrive",
    tagline: "A real-time car auction platform built as independent services.",
    year: "2025",
    role: "Solo build — architecture, services, frontend",
    imageUrl: "/assets/projects/bidDrive.png",
    repo: "CarAuctions",
    problem:
      "A live auction is a consistency problem wearing a marketplace costume. Bids arrive faster than a page refresh, and a stall in identity or notifications should never be able to take bidding down with it.",
    solution:
      "Four .NET 9 services — Auctions, Bidding, Identity, and Notifications — each owning its own data and communicating over RabbitMQ. The Next.js frontend authenticates through NextAuth and reads through React Query, so what is on screen stays close to what is on the server.",
    decisions: [
      "Split by failure domain rather than by layer, so each service deploys and fails on its own.",
      "RabbitMQ for everything that can be asynchronous; gRPC for the calls that genuinely cannot be.",
      "PostgreSQL and MongoDB side by side, each owned by the service that needs it instead of shared across all of them.",
      "Used Claude Code to generate event schemas and DTOs across services, cutting the cross-service boilerplate setup time significantly.",
      "One Docker image per service, orchestrated with Kubernetes for the production deployment.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      ".NET 9",
      "PostgreSQL",
      "MongoDB",
      "RabbitMQ",
      "gRPC",
      "Docker",
      "Kubernetes",
      "shadcn/ui",
    ],
  },
  {
    slug: "inventory",
    name: "Inventory Management System",
    tagline:
      "Multi-warehouse stock tracking for a client whose records lived in spreadsheets.",
    year: "2025",
    role: "Freelance — full stack",
    imageUrl: "/assets/projects/inv.png",
    repo: "Inventory-Management-System.API",
    problem:
      "Stock moved across several warehouses at once, and nothing beyond a shared spreadsheet recorded who moved it, when, or whether the count afterward could be trusted.",
    solution:
      "An ASP.NET Core Web API over SQL Server with a React and TypeScript frontend, using Firebase to push inventory changes to every warehouse view in real time — so a count in one location is never stale in another.",
    decisions: [
      "Role-based permissions and audit logging on every inventory transaction, so every change has an owner.",
      "TanStack Query for server state, Zustand for the rest — server truth and UI state never fight each other.",
      "Firebase for the real-time layer instead of polling, since warehouse staff needed changes to appear immediately.",
    ],
    stack: [
      "ASP.NET Core",
      "C#",
      "SQL Server",
      "React",
      "TypeScript",
      "Zustand",
      "TanStack Query",
      "Firebase",
    ],
  },
  {
    slug: "signalist",
    name: "Signalist",
    tagline:
      "Live market data, price alerts, and portfolio tracking in one place.",
    year: "2025",
    role: "Solo build — full stack",
    imageUrl: "/assets/projects/stock-tracker.png",
    repo: "stock-tracker-app",
    problem:
      "Following a handful of tickers usually means several open tabs, and none of them remember why you started watching in the first place.",
    solution:
      "A Next.js dashboard pulling live prices, company profiles, and financials from Finnhub and TradingView, with customisable alerts and portfolio tracking layered on top of a watchlist you actually keep.",
    decisions: [
      "Finnhub and TradingView for market data, so quotes, fundamentals, and charts each come from a source built for them.",
      "A MongoDB schema shaped around user preferences and historical series rather than one generic document per user.",
      "Price alerts delivered by email through Nodemailer instead of living only inside the app.",
      "NextAuth for sessions, keeping authentication out of application code.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "NextAuth",
      "MongoDB",
      "Finnhub API",
      "TradingView",
      "Nodemailer",
      "shadcn/ui",
      "Tailwind CSS",
    ],
  },
];

/** Shipped work that does not need a full case study. */
export const otherProjects: Project[] = [
  {
    slug: "resuai",
    name: "ResuAI",
    tagline: "Resume analysis scored against a specific job description.",
    year: "2025",
    role: "Solo build — full stack",
    imageUrl: "/assets/projects/resu-ai.png",
    repo: "Smart-Resume-Analyzer",
    problem:
      "Screening a resume against a role is repetitive work usually done by eye, which makes it slow and inconsistent in the same breath.",
    solution:
      "Uploaded resumes are parsed and passed through Groq-hosted language models, which pull out qualifications and produce a compatibility score against the requirements of a given job.",
    decisions: [
      "Groq-hosted models for inference rather than a self-managed pipeline.",
      "NextAuth for authentication, MongoDB for parsed resumes and their scores.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "NextAuth",
      "Groq AI",
      "MongoDB",
      "shadcn/ui",
      "Tailwind CSS",
    ],
  },
  {
    slug: "the-spot",
    name: "The Spot",
    tagline: "A social platform re-architected from one deployment into many.",
    year: "2025",
    role: "Solo build — architecture, services, frontend",
    imageUrl: "/assets/projects/theSpot.png",
    repo: "The-Spot",
    problem:
      "Everything shipped as a single unit, which meant the realtime layer and the feed had to scale together whether or not they both needed it.",
    solution:
      "Re-architected into services behind Fastify and Express APIs, with Kafka carrying events between them and Socket.io holding the long-lived realtime connections.",
    decisions: [
      "Kafka as the event backbone, so a new consumer can be added without touching the producer.",
      "Socket.io isolated in its own service — persistent connections scale differently from request traffic.",
    ],
    stack: [
      "Next.js",
      "React",
      "Zustand",
      "Node.js",
      "Fastify",
      "Express",
      "PostgreSQL",
      "Prisma",
      "MongoDB",
      "Socket.io",
      "Kafka",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    slug: "expense-tracker",
    name: "Expense Tracker",
    tagline: "Categorised spending and budgets, kept on the device.",
    year: "2025",
    role: "Solo build",
    imageUrl: "/assets/projects/expense-tracker.png",
    portraitImage: true,
    repo: "my-money-tracker",
    problem:
      "Logging an expense has to take seconds, or it does not get logged at all.",
    solution:
      "A React Native app storing everything in a local SQLite database — categories, budgets, and history stay on the phone, with no account to create before the first entry.",
    decisions: [
      "SQLite on device rather than a hosted backend, so the app works with no network.",
    ],
    stack: ["React Native", "TypeScript", "SQLite", "React Navigation"],
  },
];

export const allProjects: Project[] = [...featuredProjects, ...otherProjects];
