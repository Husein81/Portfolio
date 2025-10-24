type Stat = {
  label: string;
  value: string;
  icon: string;
  color: string;
};

type Service = {
  icon: string;
  title: string;
  description: string;
  gradient: string;
  iconColor: string;
};

type Expertise = {
  icon: string;
  label: string;
  value: string;
};

type Skill = {
  id?: string;
  name: string;
  imageUrl: string;
  level?: "Beginner" | "Amateur" | "Competent" | "Proficient" | "Expert";
};

type Project = {
  id?: string;
  title: string;
  description?: string;
  imageUrl: string;
  sourceCodeUrl?: string;
  startDate?: string;
  endDate?: string;
  technologies?: string[];
};

type Column = {
  id: string;
  title: string;
};

type Row = {
  id: string;
  title: string;
  link: string;
  columnId: string;
};

type Contact = {
  _id?: string;
  name: string;
  email: string;
  message: string;
};

type Variants = {
  hidden: { opacity: number; y?: number };
  visible: {
    opacity: number;
    y?: number;
    transition: {
      duration?: number;
      ease?: string;
      staggerChildren?: number;
    };
  };
};
