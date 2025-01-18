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
  { id: "5", title: "Resume", link: "CV", columnId: "2" },
  { id: "6", title: "GitHub", link: "GitHub", columnId: "3" },
  { id: "7", title: "LinkedIn", link: "LinkedIn", columnId: "3" },
  { id: "8", title: "Twitter", link: "Twitter", columnId: "3" },
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
        <div className="flex justify-center gap-6 flex-wrap">
          {/* <div className="flex-1 min-w-[200px]">
            <h6 className="mb-4">Portfolio</h6>
            <ScrollLink to="About">About Me</ScrollLink>
            <ScrollLink to="Projects">Projects</ScrollLink>
            <ScrollLink to="Skills">Skills</ScrollLink>
          </div>
          <div className="flex-1 min-w-[200px]">
            <h6 className="mb-4">Links</h6>
            <ScrollLink to="Contact">Contact</ScrollLink>
            <ScrollLink to="CV">Resume</ScrollLink>
          </div>
          <div className="flex-1 min-w-[200px]">
            <h6 className="mb-4">Social</h6>
            <NavLinkStyled href="https://github.com/Husein81">
              GitHub
            </NavLinkStyled>
            <NavLinkStyled href="https://www.linkedin.com/in/hussein-nasrallah-645559235">
              LinkedIn
            </NavLinkStyled>
            <NavLinkStyled href="https://x.com/husein_nasralah">
              Twitter
            </NavLinkStyled>
          </div> */}
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
