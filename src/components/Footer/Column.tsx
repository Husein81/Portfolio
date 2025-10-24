import FooterRow from "./Row";

type Props = {
  column: Column;
  rows: Row[];
};
const Column = ({ column, rows }: Props) => {
  return (
    <div className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm shadow-black/20 backdrop-blur">
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-200">
        {column.title}
      </span>
      <span className="block h-px w-12 rounded-full bg-gradient-to-r from-cyan-400/60 to-white/10" />
      <div className="flex flex-1 flex-col gap-3">
        {rows.map((row) => (
          <FooterRow key={row.id} row={row} />
        ))}
      </div>
    </div>
  );
};
export default Column;
