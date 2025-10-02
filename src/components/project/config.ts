import { Project } from "../../app/models";

export const PROJECTS: Project[] = [
  {
    title: "Signalist",
    imageUrl: "/assets/projects/stock-tracker.png",
    description:
      "A real-time stock market tracking application that provides users with up-to-date stock prices, news, and portfolio management features.",
    sourceCodeUrl: "stock-tracker-app",
    technologies: [
      "Next.js",
      "NextAuth",
      "TypeScript",
      "shadcn",
      "nodemailer",
      "Finnhub API",
      "Tailwind CSS",
      "MongoDB",
    ],
  },
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
      "Grpc",
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
