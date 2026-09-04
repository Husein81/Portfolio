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
    label: "Frontend",
    items: [
      { name: "React", primary: true },
      { name: "Next.js", primary: true },
      { name: "Vue.js", primary: true },
      { name: "React Native", primary: true },
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
      { name: "Fastify" },
      { name: "Express.js" },
      { name: "Prisma" },
    ],
  },
  {
    label: "Data",
    items: [
      { name: "PostgreSQL", primary: true },
      { name: "SQL Server", primary: true },
      { name: "MongoDB", primary: true },
      { name: "MySQL" },
      { name: "Firebase" },
      { name: "Supabase" },
    ],
  },
  {
    label: "Infrastructure",
    items: [
      { name: "Docker", primary: true },
      { name: "Kubernetes", primary: true },
      { name: "RabbitMQ", primary: true },
      { name: "AWS" },
    ],
  },
  {
    label: "AI dev tools",
    items: [
      { name: "Claude Code (CLI)", primary: true },
      { name: "Cursor" },
      { name: "GitHub Copilot" },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Git", primary: true },
      { name: "GitHub", primary: true },
      { name: "Swagger" },
      { name: "Postman" },
      { name: "Jira" },
      { name: "Bitbucket" },
      { name: "Asana" },
    ],
  },
];

export const practices = [
  "System Design",
  "Microservices",
  "Clean Architecture",
  "SOLID",
  "CQRS",
  "Repository & Mediator patterns",
  "RESTful APIs",
];
