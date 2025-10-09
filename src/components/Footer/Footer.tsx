import React, { useMemo } from "react";
import { Column as ColumType } from "../../models/types";
import Column from "./Column";
import { columns, rows } from "../../lib/config";

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
            <Column key={column.id} column={column} rows={memoRows(column)} />
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
