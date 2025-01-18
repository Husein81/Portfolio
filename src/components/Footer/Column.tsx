import { Column as ColumnType, Row as RowType } from "../../app/models/types";
import Row from "./Row";

type Props = {
  column: ColumnType;
  rows: RowType[];
};
const Column = ({ column, rows }: Props) => {
  return (
    <div className="flex w-80 flex-col rounded-lg  p-4">
      <h2 className="mb-4 font-semibold text-neutral-100">{column.title}</h2>
      <div className="flex flex-1 flex-col gap-4">
        {rows.map((row) => (
          <Row key={row.id} row={row} />
        ))}
      </div>
    </div>
  );
};
export default Column;
