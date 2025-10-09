import { Column, Row } from "../models";

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
