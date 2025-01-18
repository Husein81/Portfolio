import { Link } from "react-scroll";
import { Row as RowType } from "../../app/models/types";
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
    className="block cursor-pointer text-sm text-gray-400 no-underline hover:underline"
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
    className="block cursor-pointer text-sm text-gray-400 no-underline hover:underline"
  >
    {children}
  </a>
);

const Row = ({ row }: Props) => {
  console.log(row);
  return (
    <div>
      {row.link.includes("pdf") || row.columnId === "3" ? (
        <NavLinkStyled href={row.link}>
          <h3 className="font-medium text-neutral-100">{row.title}</h3>
        </NavLinkStyled>
      ) : (
        <ScrollLink to={row.link}>
          <h3 className="font-medium text-neutral-100">{row.title}</h3>
        </ScrollLink>
      )}
    </div>
  );
};
export default Row;
