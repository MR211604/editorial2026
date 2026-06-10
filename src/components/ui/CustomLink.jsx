import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export default function CustomLink({
  to,
  children,
  className,
  useDefaultStyles = true,
  isExternal = false,
  ...props
}) {
  const resolvedPath = useResolvedPath(isExternal ? "" : to);
  const match = useMatch({ path: resolvedPath.pathname, end: true });
  const isActive = !isExternal && !!match;

  const baseStyles = useDefaultStyles
    ? isActive
      ? "text-white bg-blue-700 xl:bg-transparent xl:text-blue-700"
      : "text-gray-900 hover:bg-gray-100 xl:hover:bg-transparent xl:hover:text-blue-700"
    : "";

  const defaultClasses = useDefaultStyles
    ? "font-bold block py-2 px-3 rounded-sm xl:p-0"
    : "";

  if (isExternal) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={twMerge(defaultClasses, className)}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      to={to}
      className={twMerge(`${baseStyles} ${defaultClasses}`, className)}
      {...props}
    >
      {children}
    </Link>
  );
}
