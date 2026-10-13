import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getImagePath } from "../../helpers/imagePath";
import { useFilteredCategories } from "../hooks/useFilteredCategories";
import CustomLink from "./CustomLink";
import SearchInput from "./SearchInput";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMagazinesHovered, setIsMagazinesHovered] = useState(false);
  const [isMobileSubmenuOpen, setIsMobileSubmenuOpen] = useState(false);
  const submenuRef = useRef(null);
  const linkRef = useRef(null);

  /* ——— helpers ——— */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) setIsMobileSubmenuOpen(false);
  };

  const toggleMobileSubmenu = () =>
    setIsMobileSubmenuOpen(!isMobileSubmenuOpen);

  const handleSearchComplete = () => {
    setIsMenuOpen(false);
  };

  /* Cerrar menú al cambiar de ruta */
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false);
      setIsMobileSubmenuOpen(false);
    };
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  /* Cerrar submenú desktop al hacer clic fuera */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (submenuRef.current && !submenuRef.current.contains(e.target)) {
        setIsMagazinesHovered(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const { filteredCategories } = useFilteredCategories({
    categoryType: "Revista",
  });

  const magazinesData = filteredCategories?.flatMap((category) => {
    if (category.children_recursive && category.children_recursive.length > 0) {
      return category.children_recursive.map((child) => ({
        to: `/revistas/${child.URL}`,
        label: child.title,
      }));
    }
  });

  return (
    <nav className="bg-white relative w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* logo */}
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={getImagePath("img/logoUDB.png")}
            className="h-20"
            alt="Editorial Oficial UDB"
            title="Editorial Oficial UDB"
          />
          <img
            src={getImagePath("img/Logo_Normal.png")}
            className="h-15"
            alt="Logo Editorial UDB"
          />
        </Link>

        {/* buscador + hamburguesa */}
        <div className="flex items-center xl:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="md:mr-12 hidden md:block">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <SearchInput
                id="default-search-mobile"
                placeholder="¿Qué estás buscando?"
                onSearch={handleSearchComplete}
                className="flex w-full ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* botón hamburguesa */}
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2.5 w-10 h-10 xl:hidden text-gray-500 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-gray-200"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* menú principal */}
        <div
          id="navbar-sticky"
          className={`items-center justify-between ${
            isMenuOpen ? "block" : "hidden"
          } w-full xl:flex xl:w-auto xl:order-1`}
        >
          <ul className="flex flex-col p-4 xl:p-0 mt-4 font-medium border border-gray-100 rounded-xl bg-gray-50 xl:space-x-8 rtl:space-x-reverse xl:flex-row xl:mt-0 xl:border-0 xl:bg-white">
            {/* ——— REVISTAS ——— */}
            <li
              className="relative group"
              onMouseEnter={() => {
                clearTimeout(window.hideSubmenuTimeout);
                setIsMagazinesHovered(true);
              }}
              onMouseLeave={() => {
                window.hideSubmenuTimeout = setTimeout(
                  () => setIsMagazinesHovered(false),
                  200,
                );
              }}
            >
              <div className="flex items-center">
                {/* TEXTO SIN ENLACE */}
                <span
                  ref={linkRef}
                  className={`cursor-default font-bold px-3 text-gray-900 hover:text-blue-600 select-none my-2 xl:my-0`}
                >
                  Revistas
                </span>

                {/* flecha – mobile */}
                <button
                  onClick={toggleMobileSubmenu}
                  className="xl:hidden focus:outline-none"
                >
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isMobileSubmenuOpen
                        ? "text-blue-600 rotate-180"
                        : "text-gray-500"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* flecha – desktop */}
                <svg
                  className={`hidden xl:block w-4 h-4 transition-transform duration-200 ${
                    isMagazinesHovered
                      ? "text-blue-600 rotate-180"
                      : "text-gray-500"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {/* Submenú Desktop */}
              <div
                ref={submenuRef}
                className={`hidden xl:block absolute left-0 mt-2 w-56 bg-gray-50 rounded-lg shadow-lg z-30 border border-gray-300 origin-top transition-all duration-200 ${
                  isMagazinesHovered
                    ? "opacity-100 scale-y-100"
                    : "opacity-0 scale-y-95 pointer-events-none"
                }`}
              >
                <div className="space-y-1">
                  {magazinesData?.map(({ to, label }) => (
                    <CustomLink
                      key={to}
                      to={to}
                      className="flex items-center ml-3 px-4 my-4 text-sm  transition-colors duration-150 text-gray-600"
                      onClick={() => setIsMagazinesHovered(false)}
                    >
                      {label}
                    </CustomLink>
                  ))}
                </div>
              </div>

              {/* Submenú Mobile */}
              {isMenuOpen && isMobileSubmenuOpen && (
                <div className="xl:hidden pl-6 mt-2 space-y-2 bg-gray-200/60 rounded-md py-2">
                  {magazinesData?.map(({ to, label }) => (
                    <CustomLink key={to} to={to} onClick={toggleMenu}>
                      <span className="w-1.5 h-1.5 mr-2 bg-blue-600 rounded-full" />
                      {label}
                    </CustomLink>
                  ))}
                </div>
              )}
            </li>

            {/* otros enlaces principales */}
            <CustomLink to="/collections">Libros</CustomLink>
            {/* <CustomLink to="/manuales">Manuales</CustomLink> */}
            {/* <CustomLink to="/textos-escolares">Textos Escolares</CustomLink> */}
            <CustomLink to="/contact">Contacto</CustomLink>
            <CustomLink to="/gallery">Galeria</CustomLink>

            {/* buscador móvil */}
            <div className="mt-2 md:hidden">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <SearchInput
                  id="navbar-search"
                  placeholder="¿Qué estás buscando?"
                  onSearch={handleSearchComplete}
                  className="flex w-full ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
