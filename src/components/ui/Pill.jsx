import { useMatch, useResolvedPath } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import CustomLink from "./CustomLink";

// El prop 'to' es para saber a dónde navega la pill.
export default function Pill({
  children,
  to,
  className,
  isExternal = false,
  ...props
}) {
  const resolvedPath = useResolvedPath(isExternal ? "" : to);
  const match = useMatch({ path: resolvedPath.pathname, end: true });
  const isActive = !isExternal && !!match;

  return (
    <CustomLink
      to={to}
      isExternal={isExternal}
      useDefaultStyles={false}
      className={twMerge(
        "border-2 border-solid border-blue-500 transition-all duration-200 hover:scale-102 rounded-full text-sm md:text-md lg:text-lg cursor-pointer p-3 md:p-3 font-bold text-center",
        isActive
          ? "bg-blue-700 text-white shadow-md"
          : "text-blue-950 bg-transparent hover:bg-blue-50",
        className,
      )}
      {...props}
    >
      {children}
    </CustomLink>
  );
}
