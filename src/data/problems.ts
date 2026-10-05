import type { Problem, Principle } from "../types";

/**
 * What visitors actually come here to solve. Each is grounded in a real
 * engagement — see the `result` line for the evidence.
 */
export const problems: Problem[] = [
  {
    slug: "manual-process",
    icon: "ClipboardList",
    title: "A manual process is running your business",
    problem:
      "Orders, stock, payroll, or scheduling still live in spreadsheets or someone's memory — it works until it doesn't, and nobody can tell you why a number is wrong.",
    approach:
      "Model the real domain as proper entities, add the access control and audit trail the business actually needs, and ship something a team uses on shift one, not six months in.",
    result:
      "Municipality of El Bazourieh's mechanization and sales system manages equipment, geolocation, and field operations in production.",
  },
  {
    slug: "no-backend",
    icon: "Server",
    title: "The product needs a backend it doesn't have yet",
    problem:
      "An idea, MVP, or frontend-only prototype needs real infrastructure behind it: auth, data modelling, and APIs that won't fall over under real usage.",
    approach:
      "Design the schema first, then build RESTful or event-driven APIs with the architecture the domain actually calls for — microservices where things genuinely separate, a single service where they don't.",
    result:
      "BidDrive's Auction and Bidding services run independently and communicate over RabbitMQ; SPCI's and Municipality's APIs are structured for scale.",
  },
  {
    slug: "legacy-modernization",
    icon: "RefreshCw",
    title: "An existing app has outgrown its foundation",
    problem:
      "The product works, but it's built on something that's now holding it back — legacy server-rendered pages, tangled logic, no clear architecture to build on.",
    approach:
      "Migrate incrementally into modular components without breaking what already works, applying SOLID as I go instead of proposing a rewrite nobody has time for.",
    result:
      "SPCI's legacy server-side flows now run as modular, maintainable Vue.js components against SQL Server and EF Core.",
  },
  {
    slug: "offline-field",
    icon: "WifiOff",
    title: "Field teams can't depend on a connection",
    problem:
      "Mobile users — field operators, inspectors, anyone not sitting at a desk — need the app to keep working when the network doesn't.",
    approach:
      "Design for local-first data and sync modules that reconcile once a connection returns, instead of an app that quietly fails offline.",
    result:
      "Omega Crop's real-time geospatial desktop app maintains reliability in low-connectivity fields; SPCI's offline sync module shipped roughly 30% faster.",
  },
  {
    slug: "ai-augmented",
    icon: "Terminal",
    title: "AI tooling that doesn't cut corners",
    problem:
      "Most teams either avoid AI tooling entirely or lean on it in ways that quietly lower the quality bar.",
    approach:
      "Use it where it removes real toil — test generation, boilerplate, refactors — while architecture decisions and edge cases stay under direct review.",
    result:
      "Cut prototyping time by ~30% on SPCI's CRM outbox and offline sync using Claude Code; generated event schemas and DTOs across BidDrive's microservices.",
  },
];

/** How the work above actually gets built, in order. */
export const principles: Principle[] = [
  {
    title: "Model the real domain first",
    body: "Orders, inventory, equipment, geolocation, field operations — the entities and their relationships get designed before a line of UI, because a wrong schema costs more later than it does now.",
  },
  {
    title: "Architect for how it actually separates",
    body: "Microservices earn their place when domains genuinely fail independently (BidDrive's auctions and bidding); a modular monolith wins when they don't.",
  },
  {
    title: "Build the core workflow before the edge cases",
    body: "Draft, hold, pay, refund, cancel — the happy path ships first, in a shape that has room for the exceptions once they show up.",
  },
  {
    title: "Harden it with tests, not hope",
    body: "AI-assisted test generation gets to 90%+ edge-case coverage faster, but the cases it should cover are still mine to define.",
  },
  {
    title: "Keep the system honest with an audit trail",
    body: "Role-based access and logged transactions aren't an afterthought on anything that touches money or stock — they're part of the first version.",
  },
];
