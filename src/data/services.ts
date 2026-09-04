import type { Service } from "../types";

/**
 * Productized offerings, each ending in a WhatsApp link pre-filled with a
 * message specific to that service — so an inbound chat already says what
 * the visitor wants before I reply.
 */
export const services: Service[] = [
  {
    slug: "pos-systems",
    icon: "ShoppingCart",
    name: "POS Systems",
    description:
      "Custom point-of-sale systems designed for retail businesses, stores, and multi-branch operations.",
    tags: ["Inventory", "Barcode", "Offline-first", "Reports"],
    ctaLabel: "Discuss POS Project",
    whatsappMessage:
      "Hi, I'm interested in building a POS system for my business. I'd like to discuss the requirements, features, and pricing.",
  },
  {
    slug: "erp-business-systems",
    icon: "Building2",
    name: "ERP & Business Management",
    description:
      "Custom business management platforms that centralize operations, inventory, sales, customers, employees, and reporting.",
    tags: ["Inventory", "Purchasing", "Roles & permissions", "Reports"],
    ctaLabel: "Discuss ERP Project",
    whatsappMessage:
      "Hi, I'm interested in building an ERP/business management system for my business. I'd like to discuss my requirements and get an estimate.",
  },
  {
    slug: "ecommerce",
    icon: "ShoppingBag",
    name: "E-commerce Development",
    description:
      "Modern, scalable e-commerce websites built around the products, workflows, and goals of the business.",
    tags: ["Catalog", "Checkout", "Payments", "Admin dashboard"],
    ctaLabel: "Discuss E-commerce Project",
    whatsappMessage:
      "Hi, I'm interested in building an e-commerce website for my business. I'd like to discuss the project, features, and pricing.",
  },
  {
    slug: "custom-web-apps",
    icon: "LayoutDashboard",
    name: "Custom Web Applications",
    description:
      "Tailored web applications built to solve specific business problems and automate workflows.",
    tags: ["Dashboards", "APIs", "Auth & roles", "Integrations"],
    ctaLabel: "Discuss Web App",
    whatsappMessage:
      "Hi, I'm interested in developing a custom web application. I'd like to explain my idea and discuss the best approach.",
  },
  {
    slug: "mobile-apps",
    icon: "Smartphone",
    name: "Mobile App Development",
    description:
      "Cross-platform mobile applications designed for businesses and digital products.",
    tags: ["React Native", "iOS & Android", "Push notifications", "Offline"],
    ctaLabel: "Discuss Mobile App",
    whatsappMessage:
      "Hi, I'm interested in developing a mobile application. I'd like to discuss my idea, requirements, and estimated cost.",
  },
  {
    slug: "automations",
    icon: "Workflow",
    name: "Automations",
    description:
      "Custom workflow automations, integrations, and bots designed to streamline business operations and eliminate manual work.",
    tags: ["Workflows", "API Integrations", "Webhooks", "Bots"],
    ctaLabel: "Discuss Automations",
    whatsappMessage:
      "Hi, I'm interested in building automations for my business. I'd like to discuss my workflows, requirements, and pricing.",
  },
];
