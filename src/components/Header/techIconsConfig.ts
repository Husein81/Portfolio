export type TechIconConfig = {
  id: string;
  name: string;
  imageUrl: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    transform?: string;
  };
  size: {
    container: string;
    icon: string;
  };
  borderColor: string;
  backgroundColor?: string;
  animation: {
    whileInView: {
      x?: number[];
      y?: number[];
      opacity?: number[];
      scale?: number[];
      rotate?: number[];
    };
    transition: {
      duration: number;
      delay: number;
      ease: string;
    };
  };
  cssAnimation?: string;
};

type PositionConfig = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  transform?: string;
};

// Shuffle array utility
const shuffleArray = (array: PositionConfig[]): PositionConfig[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Dynamic position generator with multiple algorithms
export const generateDynamicPositions = (
  algorithm: "random" | "circular" | "grid" | "spiral" = "random"
): PositionConfig[] => {
  switch (algorithm) {
    case "circular":
      return generateCircularPositions();
    case "grid":
      return generateGridPositions();
    case "spiral":
      return generateSpiralPositions();
    default:
      return generateRandomPositions();
  }
};

// Random scattered positions
const generateRandomPositions = (): PositionConfig[] => {
  return [
    // Corner positions
    { top: "10%", left: "8%" },
    { top: "10%", right: "8%" },
    { bottom: "10%", left: "8%" },
    { bottom: "10%", right: "8%" },

    // Edge positions
    { top: "10%", left: "50%", transform: "-translate-x-1/2" },
    { bottom: "10%", left: "50%", transform: "-translate-x-1/2" },
    { top: "50%", left: "8%", transform: "-translate-y-1/2" },
    { top: "50%", right: "8%", transform: "-translate-y-1/2" },

    // Center position
    { top: "50%", left: "50%", transform: "-translate-x-1/2 -translate-y-1/2" },

    // Additional scattered positions
    { top: "25%", left: "25%" },
    { top: "25%", right: "25%" },
    { bottom: "25%", left: "25%" },
    { bottom: "25%", right: "25%" },

    // Random intermediate positions
    { top: "35%", left: "15%" },
    { top: "65%", right: "15%" },
    { top: "20%", left: "70%" },
    { bottom: "30%", left: "60%" },
  ];
};

// Circular arrangement around center
const generateCircularPositions = (): PositionConfig[] => {
  const positions = [];
  const centerX = 50;
  const centerY = 50;
  const radius = 35; // Distance from center
  const iconCount = 9; // Number of icons

  for (let i = 0; i < iconCount; i++) {
    const angle = (i * 2 * Math.PI) / iconCount;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    positions.push({
      top: `${y}%`,
      left: `${x}%`,
      transform: "-translate-x-1/2 -translate-y-1/2",
    });
  }

  // Add center position for the main icon
  positions.push({
    top: "50%",
    left: "50%",
    transform: "-translate-x-1/2 -translate-y-1/2",
  });

  return positions;
};

// Grid arrangement
const generateGridPositions = (): PositionConfig[] => {
  const positions = [];
  const rows = 3;
  const cols = 3;
  const marginX = 15; // Left/right margin
  const marginY = 20; // Top/bottom margin

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = marginX + (col * (100 - 2 * marginX)) / (cols - 1);
      const y = marginY + (row * (100 - 2 * marginY)) / (rows - 1);

      positions.push({
        top: `${y}%`,
        left: `${x}%`,
        transform: "-translate-x-1/2 -translate-y-1/2",
      });
    }
  }

  return positions;
};

// Spiral arrangement
const generateSpiralPositions = (): PositionConfig[] => {
  const positions = [];
  const centerX = 50;
  const centerY = 50;
  const iconCount = 9;

  for (let i = 0; i < iconCount; i++) {
    const angle = i * 0.8; // Spiral tightness
    const radius = 5 + i * 4; // Increasing radius
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    positions.push({
      top: `${Math.max(10, Math.min(90, y))}%`,
      left: `${Math.max(10, Math.min(90, x))}%`,
      transform: "-translate-x-1/2 -translate-y-1/2",
    });
  }

  // Add a few more positions to complete the set
  positions.push({ top: "15%", left: "85%" }, { top: "85%", left: "15%" });

  return positions;
};

// Base tech icon data without positions
const baseTechIcons = [
  {
    id: "typescript",
    name: "TypeScript",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    size: { container: "w-16 h-16", icon: "w-10 h-10" },
    borderColor: "border-blue-400/30",
    cssAnimation: "animate-float",
    animation: {
      whileInView: { scale: [0.8, 1.2, 1], rotate: [0, 180, 360] },
      transition: { duration: 2, delay: 0, ease: "easeInOut" },
    },
  },
  {
    id: "react",
    name: "React",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    size: { container: "w-16 h-16", icon: "w-10 h-10" },
    borderColor: "border-cyan-400/30",
    cssAnimation: "animate-float",
    animation: {
      whileInView: { x: [-100, 0], opacity: [0, 1], rotate: [0, 360] },
      transition: { duration: 1.5, delay: 0.2, ease: "easeOut" },
    },
  },
  {
    id: "javascript",
    name: "JavaScript",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    size: { container: "w-16 h-16", icon: "w-10 h-10" },
    borderColor: "border-yellow-400/30",
    cssAnimation: "animate-float-delay-1",
    animation: {
      whileInView: { y: [-100, 0], opacity: [0, 1], scale: [0, 1] },
      transition: { duration: 1.5, delay: 0.4, ease: "easeOut" },
    },
  },
  {
    id: "aws",
    name: "AWS",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    size: { container: "w-16 h-16", icon: "w-10 h-10" },
    borderColor: "border-orange-400/30",
    backgroundColor: "bg-white/25",
    cssAnimation: "animate-float-delay-2",
    animation: {
      whileInView: { x: [100, 0], opacity: [0, 1], rotate: [0, -360] },
      transition: { duration: 1.5, delay: 0.6, ease: "easeOut" },
    },
  },
  {
    id: "nextjs",
    name: "Next.js",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    size: { container: "w-16 h-16", icon: "w-10 h-10" },
    borderColor: "border-white/30",
    cssAnimation: "animate-float-delay-3",
    animation: {
      whileInView: { x: [-150, 0], opacity: [0, 1], scale: [0.5, 1] },
      transition: { duration: 1.5, delay: 0.8, ease: "easeOut" },
    },
  },
  {
    id: "vite",
    name: "Vite",
    imageUrl:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg",
    size: { container: "w-16 h-16", icon: "w-10 h-10" },
    borderColor: "border-purple-400/30",
    cssAnimation: "animate-float-delay-3",
    animation: {
      whileInView: { x: [150, 0], opacity: [0, 1], scale: [0.5, 1] },
      transition: { duration: 1.5, delay: 1.0, ease: "easeOut" },
    },
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    size: { container: "w-16 h-16", icon: "w-10 h-10" },
    borderColor: "border-sky-400/30",
    cssAnimation: "animate-float-delay-2",
    animation: {
      whileInView: { x: [150, 0], opacity: [0, 1], scale: [0.5, 1] },
      transition: { duration: 1.5, delay: 1.0, ease: "easeOut" },
    },
  },
  {
    id: "github",
    name: "GitHub",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    size: { container: "w-16 h-16", icon: "w-10 h-10" },
    borderColor: "border-gray-400/30",
    cssAnimation: "animate-float",
    animation: {
      whileInView: { x: [-100, 0], y: [100, 0], opacity: [0, 1] },
      transition: { duration: 1.5, delay: 1.0, ease: "easeOut" },
    },
  },
  {
    id: "nodejs",
    name: "Node.js",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    size: { container: "w-16 h-16", icon: "w-10 h-10" },
    borderColor: "border-green-400/30",
    cssAnimation: "animate-float-delay-1",
    animation: {
      whileInView: { y: [100, 0], opacity: [0, 1], scale: [0, 1] },
      transition: { duration: 1.5, delay: 1.2, ease: "easeOut" },
    },
  },
  {
    id: "docker",
    name: "Docker",
    imageUrl:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg",
    size: { container: "w-16 h-16", icon: "w-10 h-10" },
    borderColor: "border-blue-500/30",
    cssAnimation: "animate-float-delay-3",
    animation: {
      whileInView: {
        x: [100, 0],
        y: [100, 0],
        opacity: [0, 1],
        rotate: [0, 360],
      },
      transition: { duration: 1.5, delay: 1.4, ease: "easeOut" },
    },
  },
];

// Generate tech icons with dynamic positions
let cachedTechIcons: TechIconConfig[] = [];
let currentAlgorithm: "random" | "circular" | "grid" | "spiral" = "random";

export const generateTechIcons = (
  algorithm: "random" | "circular" | "grid" | "spiral" = "random"
): TechIconConfig[] => {
  currentAlgorithm = algorithm;
  const dynamicPositions = generateDynamicPositions(algorithm);
  const shuffledPositions =
    algorithm === "circular" || algorithm === "grid" || algorithm === "spiral"
      ? dynamicPositions
      : shuffleArray(dynamicPositions);

  return baseTechIcons.map((icon, index) => ({
    ...icon,
    position: shuffledPositions[index % shuffledPositions.length],
  }));
};

// Function to refresh positions
export const refreshIconPositions = (
  algorithm?: "random" | "circular" | "grid" | "spiral"
): TechIconConfig[] => {
  const algorithmToUse = algorithm || getNextAlgorithm();
  cachedTechIcons = generateTechIcons(algorithmToUse);
  return cachedTechIcons;
};

// Cycle through algorithms
const getNextAlgorithm = (): "random" | "circular" | "grid" | "spiral" => {
  const algorithms: ("random" | "circular" | "grid" | "spiral")[] = [
    "random",
    "circular",
    "grid",
    "spiral",
  ];
  const currentIndex = algorithms.indexOf(currentAlgorithm);
  return algorithms[(currentIndex + 1) % algorithms.length];
};

// Initial generation
export const techIconsConfig: TechIconConfig[] = (() => {
  cachedTechIcons = generateTechIcons("random");
  return cachedTechIcons;
})();

// Export function to get current config
export const getTechIconsConfig = (): TechIconConfig[] => {
  return cachedTechIcons.length > 0 ? cachedTechIcons : techIconsConfig;
};
