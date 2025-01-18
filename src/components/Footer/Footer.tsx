import React, { useMemo } from "react";
import { Column as ColumType, Row } from "../../app/models/types";
import Column from "./Column";

const columns: ColumType[] = [
  { id: "1", title: "Portfolio" },
  { id: "2", title: "Links" },
  { id: "3", title: "Social" },
];

const rows: Row[] = [
  { id: "1", title: "About Me", link: "About", columnId: "1" },
  { id: "2", title: "Projects", link: "Projects", columnId: "1" },
  { id: "3", title: "Skills", link: "Skills", columnId: "1" },
  { id: "4", title: "Contact", link: "Contact", columnId: "2" },
  { id: "5", title: "Resume", link: "/Hussein-CV.pdf", columnId: "2" },
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

const Footer: React.FC = () => {
  const memoRows = useMemo(() => {
    const rowsPerColumn = (column: ColumType) =>
      rows.filter((row) => row.columnId === column.id);
    return rowsPerColumn;
  }, []);

  return (
    <footer className="py-10 bg-shark text-gray-400">
      <div className="max-w-5xl mx-auto">
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {columns.map((column) => (
            <Column column={column} rows={memoRows(column)} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="m-0">
            © {new Date().getFullYear()} Hussein Nasrallah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
