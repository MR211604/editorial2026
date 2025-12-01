import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export default function CustomLink({ to, children, className, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <Link
      to={to}
      {...props}
      className={twMerge(
        `${
          isActive
            ? "text-white bg-blue-700 xl:bg-transparent xl:text-blue-700"
            : "text-gray-900 hover:bg-gray-100 xl:hover:bg-transparent xl:hover:text-blue-700"
        } font-bold block py-2 px-3 rounded-sm xl:p-0`,
        className
      )}
    >
      {children}
    </Link>
  );
}
