import type { StackGroup } from "../types";

/**
 * Grouped by the job the tool does. `primary` marks what gets reached for
 * first and what actually appears in the work above.
 */
export const stackGroups: StackGroup[] = [
  {
    label: "Languages",
    items: [
      { name: "TypeScript", primary: true },
      { name: "JavaScript", primary: true },
      { name: "Python", primary: true },
      { name: "C#", primary: true },
      { name: "Java" },
    ],
  },
  {
    label: "Frontend & Mobile",
    items: [
      { name: "React", primary: true },
      { name: "Next.js", primary: true },
      { name: "Vue.js", primary: true },
      { name: "React Native", primary: true },
      { name: "Electron JS", primary: true },
      { name: "Tailwind CSS", primary: true },
      { name: "Zustand", primary: true },
      { name: "TanStack Query" },
      { name: "shadcn/ui" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "NestJS", primary: true },
      { name: "ASP.NET Core", primary: true },
      { name: "Fast API", primary: true },
      { name: "Node.js", primary: true },
      { name: "Entity Framework Core" },
      { name: "Prisma ORM" },
      { name: "Fastify" },
      { name: "Express.js" },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "PostgreSQL", primary: true },
      { name: "SQL Server", primary: true },
      { name: "MongoDB", primary: true },
      { name: "MySQL" },
      { name: "Prisma ORM" },
      { name: "Firebase" },
      { name: "Supabase" },
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      { name: "Docker", primary: true },
      { name: "Kubernetes", primary: true },
      { name: "RabbitMQ", primary: true },
      { name: "AWS", primary: true },
      { name: "Digital Ocean" },
      { name: "CI/CD" },
      { name: "Firebase" },
      { name: "Supabase" },
    ],
  },
  {
    label: "AI dev tools",
    items: [
      { name: "Claude Code (CLI)", primary: true },
      { name: "Cursor", primary: true },
      { name: "GitHub Copilot", primary: true },
      { name: "LLM Orchestration & Prompt Engineering" },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Git", primary: true },
      { name: "GitHub", primary: true },
      { name: "Bitbucket" },
      { name: "Postman" },
      { name: "Swagger" },
      { name: "Jira" },
      { name: "Asana" },
    ],
  },
];

export const practices = [
  "System Design",
  "Microservices",
  "Domain Driven Design",
  "Clean Architecture",
  "SOLID",
  "CQRS",
  "Repository & Mediator Patterns",
  "RESTful API Design",
];
