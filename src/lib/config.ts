import { Column, Project, Row, Skill } from "../app/models";

export const SKILLS: Skill[] = [
  {
    id: "NextJS",
    name: "Next.js",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    id: "Vite",
    name: "Vite",
    imageUrl:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg",
  },
  {
    id: "React",
    name: "React",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    id: "TypeScript",
    name: "TypeScript",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    id: "ShadcnUI",
    name: "shadcn/ui",
    imageUrl: "https://ui.shadcn.com/favicon.ico",
  },
  {
    id: "Tailwind CSS",
    name: "Tailwind CSS",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    id: "TanStack",
    name: "TanStack Query",
    imageUrl:
      "https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png",
  },
  {
    id: "React Native",
    name: "React Native",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    id: "Redux",
    name: "Redux",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
  },
  {
    id: "Zustand",
    name: "Zustand",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-original.svg",
  },
  {
    id: "Asp.Net",
    name: "ASP.NET",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
  },
  {
    id: "ExpressJS",
    name: "Express.js",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  {
    id: "Node",
    name: "Node.js",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    id: "Java",
    name: "Java",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
  {
    id: "Prisma",
    name: "Prisma",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
  },
  {
    id: "Firebase",
    name: "Firebase",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
  },
  {
    id: "MongoDB",
    name: "MongoDB",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    id: "PostgreSQL",
    name: "PostgreSQL",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    id: "MySQL",
    name: "MySQL",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    id: "Docker",
    name: "Docker",
    imageUrl:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg",
  },
  {
    id: "Kubernetes",
    name: "Kubernetes",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
  },
  {
    id: "AWS",
    name: "AWS",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    id: "RabbitMQ",
    name: "RabbitMQ",
    imageUrl: "https://www.rabbitmq.com/img/rabbitmq-logo.svg",
  },
  {
    id: "GitHub",
    name: "GitHub",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    id: "Git",
    name: "Git",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "BidDrive",
    imageUrl: "/assets/projects/bidDrive.png",
    sourceCodeUrl: "CarAuctions",
    description:
      "A dynamic car auction platform enabling users to bid on vehicles in real-time, featuring secure transactions and user-friendly navigation. Built as a microservice architecture using PostgreSQL, MongoDB, ASP.NET 9, RabbitMQ, Docker, Kubernetes, Next.js, and shadcn/ui.",
    technologies: [
      "Next.js",
      "ASP.NET 9",
      "PostgreSQL",
      "MongoDB",
      "RabbitMQ",
      "Docker",
      "Kubernetes",
      "shadcn/ui",
    ],
  },
  {
    title: "Expense Tracker App",
    imageUrl: "/assets/projects/expense-tracker-frame.png",
    sourceCodeUrl: "my-money-tracker",
    description:
      "A comprehensive expense tracking application that helps users manage their finances with intuitive categorization, budget planning, and insightful analytics.",
    technologies: ["React Native", "TypeScript", "SQLite", "React Navigation"],
  },
  {
    title: "Inventory Management System",
    imageUrl: "/assets/projects/inv.png",
    sourceCodeUrl: "Inventory-Management-System.API",
    description:
      "A comprehensive inventory management system built with modern technologies to streamline business operations and track inventory efficiently.",
    technologies: ["ASP.NET", "React", "SQL Server", "TypeScript"],
  },
  {
    title: "The Spot",
    imageUrl: "/assets/projects/theSpot.png",
    sourceCodeUrl: "The-Spot",
    description:
      "A social platform connecting people through shared interests and locations, featuring real-time interactions and modern UI/UX.",
    technologies: ["React", "zustand", "Node.js", "MongoDB", "Socket.io"],
  },
  {
    title: "E-Commerce Dashboard",
    imageUrl: "/assets/projects/dashboard.png",
    sourceCodeUrl: "ims.client",
    description:
      "Modern analytics dashboard for e-commerce platforms with real-time data visualization and comprehensive reporting features.",
    technologies: [
      "React",
      "TypeScript",
      "zustand",
      "Chart.js",
      "Tailwind CSS",
    ],
  },
];

export const columns: Column[] = [
  { id: "1", title: "Portfolio" },
  { id: "2", title: "Links" },
  { id: "3", title: "Social" },
];

export const rows: Row[] = [
  { id: "1", title: "About Me", link: "About", columnId: "1" },
  { id: "2", title: "Projects", link: "Projects", columnId: "1" },
  { id: "3", title: "Skills", link: "Skills", columnId: "1" },
  { id: "4", title: "Contact", link: "Contact", columnId: "2" },
  {
    id: "5",
    title: "Resume",
    link: "/Hussein-Nasrallah-CV.pdf",
    columnId: "2",
  },
  {
    id: "6",
    title: "GitHub",
    link: "https://github.com/Husein81",
    columnId: "3",
  },
  {
    id: "7",
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/hussein-nasrallah-645559235",
    columnId: "3",
  },
  { id: "8", title: "X", link: "https://x.com/husein_nasralah", columnId: "3" },
];
