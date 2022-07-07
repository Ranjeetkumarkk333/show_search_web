import { Link, useLocation } from "react-router-dom";

const LinkWithQuery = ({ children, to, ...props }: any) => {
  const { search } = useLocation();

  return (
    <Link className="text-lg" to={to + search} {...props}>
      {children}
    </Link>
  );
};
export default LinkWithQuery;
