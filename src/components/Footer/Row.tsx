import { Link } from "react-scroll";
type Props = {
  row: Row;
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
    className="inline-flex cursor-pointer items-center text-sm text-gray-300 transition-transform duration-200 hover:-translate-x-1 hover:text-white"
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
    target="_blank"
    rel="noreferrer"
    className="inline-flex cursor-pointer items-center text-sm text-gray-300 transition-transform duration-200 hover:-translate-x-1 hover:text-white"
  >
    {children}
  </a>
);

const Row = ({ row }: Props) => {
  return (
    <div>
      {row.link.includes("pdf") || row.columnId === "3" ? (
        <NavLinkStyled href={row.link}>
          <span className="text-sm font-medium text-gray-200">{row.title}</span>
        </NavLinkStyled>
      ) : (
        <ScrollLink to={row.link}>
          <span className="text-sm font-medium text-gray-200">{row.title}</span>
        </ScrollLink>
      )}
    </div>
  );
};
export default Row;
