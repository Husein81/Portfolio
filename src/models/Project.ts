export interface Project {
  id?: string;
  title: string;
  description?: string;
  imageUrl: string;
  sourceCodeUrl?: string;
  startDate?: string;
  endDate?: string;
  technologies?: string[];
}
