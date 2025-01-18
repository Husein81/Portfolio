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

export type { Column, Row };
