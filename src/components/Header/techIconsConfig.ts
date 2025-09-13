export interface TechIconConfig {
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
}

export const techIconsConfig: TechIconConfig[] = [
  {
    id: "typescript",
    name: "TypeScript",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    position: {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)", // ✅ use real CSS transform
    },
    size: {
      container: "w-20 h-20",
      icon: "w-12 h-12",
    },
    borderColor: "border-blue-400/30",
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
    position: {
      top: "20px", // ✅ px instead of "20"
      left: "20px",
    },
    size: {
      container: "w-16 h-16",
      icon: "w-10 h-10",
    },
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
    position: {
      top: "16px",
      left: "50%",
      transform: "translateX(-50%)", // ✅ fixed
    },
    size: {
      container: "w-16 h-16",
      icon: "w-10 h-10",
    },
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
    position: {
      top: "20px",
      right: "20px",
    },
    size: {
      container: "w-16 h-16",
      icon: "w-10 h-10",
    },
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
    position: {
      top: "50%",
      left: "20px",
      transform: "translateY(-50%)", // ✅ fixed
    },
    size: {
      container: "w-16 h-16",
      icon: "w-10 h-10",
    },
    borderColor: "border-white/30",
    cssAnimation: "animate-float-delay-3",
    animation: {
      whileInView: { x: [-150, 0], opacity: [0, 1], scale: [0.5, 1] },
      transition: { duration: 1.5, delay: 0.8, ease: "easeOut" },
    },
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    position: {
      top: "50%",
      right: "20px",
      transform: "translateY(-50%)",
    },
    size: {
      container: "w-16 h-16",
      icon: "w-10 h-10",
    },
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
    position: {
      bottom: "20px",
      left: "20px",
    },
    size: {
      container: "w-16 h-16",
      icon: "w-10 h-10",
    },
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
    position: {
      bottom: "16px",
      left: "50%",
      transform: "translateX(-50%)", // ✅ fixed
    },
    size: {
      container: "w-16 h-16",
      icon: "w-10 h-10",
    },
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
    position: {
      bottom: "20px",
      right: "20px",
    },
    size: {
      container: "w-16 h-16",
      icon: "w-10 h-10",
    },
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
