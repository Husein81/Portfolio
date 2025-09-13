export type Skill = {
  id?: string;
  name: string;
  imageUrl: string;
  level?: "Beginner" | "Amateur" | "Competent" | "Proficient" | "Expert";
};
