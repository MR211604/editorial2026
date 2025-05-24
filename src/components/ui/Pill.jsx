import { NavLink } from "react-router-dom";
import { twMerge } from 'tailwind-merge';

// El prop 'to' es para saber a dónde navega la pill.
export default function Pill({ children, to, className, ...props }) {
  return (
    <NavLink
      to={to}
      {...props}
      className={({ isActive }) =>
        twMerge(
          'border-2 border-solid border-blue-500 transition-all duration-200 hover:scale-102 rounded-full text-sm md:text-md lg:text-lg cursor-pointer p-3 md:p-3 font-bold text-center', // <-- aquí va text-center
          isActive
            ? 'bg-blue-700 text-white shadow-md'
            : 'text-blue-950 bg-transparent hover:bg-blue-50',
          className
        )
      }
    >
      {children}
    </NavLink>
  );
}

