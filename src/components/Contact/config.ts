export const contactChannels = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/hussein-nasrallah-645559235",
    description: "Connect for collaborations and updates.",
    href: "https://www.linkedin.com/in/hussein-nasrallah-645559235",
    icon: "Linkedin",
  },
  {
    label: "GitHub",
    value: "github.com/Husein81",
    description: "Explore more code and ongoing experiments.",
    href: "https://github.com/Husein81",
    icon: "Github",
  },
  {
    label: "Location",
    value: "Lebanon · Remote friendly",
    description: "Partnering with distributed teams across time zones.",
    icon: "MapPin",
  },
];

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};
