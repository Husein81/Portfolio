import Row from "./Row";

type Props = {
  column: Column;
  rows: Row[];
};
const Column = ({ column, rows }: Props) => {
  return (
    <div className="flex w-80 flex-col rounded-lg  p-4">
      <span className="mb-4 text-xl font-semibold text-neutral-100">
        {column.title}
      </span>
      <div className="flex flex-1 flex-col gap-4">
        {rows.map((row) => (
          <Row key={row.id} row={row} />
        ))}
      </div>
    </div>
  );
};
export default Column;
