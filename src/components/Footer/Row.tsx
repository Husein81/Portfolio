import { Link } from "react-scroll";
import { Row as RowType } from "../../models/types";
type Props = {
  row: RowType;
};

const ScrollLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <Link
    to={to}
    smooth={true}
    duration={500}
    className="flex cursor-pointer text-sm text-gray-400 no-underline hover:underline"
  >
    {children}
  </Link>
);

const NavLinkStyled = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="blank"
    className="flex cursor-pointer text-sm text-gray-400 no-underline hover:underline"
  >
    {children}
  </a>
);

const Row = ({ row }: Props) => {
  return (
    <div>
      {row.link.includes("pdf") || row.columnId === "3" ? (
        <NavLinkStyled href={row.link}>
          <span className="text-neutral-100 ">{row.title}</span>
        </NavLinkStyled>
      ) : (
        <ScrollLink to={row.link}>
          <span className="text-neutral-100 ">{row.title}</span>
        </ScrollLink>
      )}
    </div>
  );
};
export default Row;
