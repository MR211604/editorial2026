import { Link } from "react-router-dom";
import CustomLink from "./CustomLink";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMagazinesHovered, setIsMagazinesHovered] = useState(false);
  const [isMobileSubmenuOpen, setIsMobileSubmenuOpen] = useState(false);
  const submenuRef = useRef(null);
  const linkRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setIsMobileSubmenuOpen(false);
    }
  };

  const toggleMobileSubmenu = () => {
    setIsMobileSubmenuOpen(!isMobileSubmenuOpen);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false);
      setIsMobileSubmenuOpen(false);
    };
    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setIsMagazinesHovered(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white relative w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://www.udbvirtual.edu.sv/auladigital/pluginfile.php/1/core_admin/logo/0x200/1736809456/LogoUDB.png" className="h-20" alt="Editorial Oficial UDB" title="Editorial Oficial UDB" />
          <img src="/src/assets/img/Logo_Normal.png" className='h-15' alt="Logo Editorial UDB" />
        </Link>

        <div className="flex xl:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
          <div className="relative md:mr-12 hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 cursor-pointer text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="default-search" className="flex w-full ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="¿Qué estás buscando?" required />
          </div>

          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        <div className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full xl:flex xl:w-auto xl:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 xl:p-0 mt-4 font-medium border border-gray-100 rounded-xl bg-gray-50 xl:space-x-8 rtl:space-x-reverse xl:flex-row xl:mt-0 xl:border-0 xl:bg-white">
            <li 
              className="relative group"
              onMouseEnter={() => setIsMagazinesHovered(true)}
              onMouseLeave={() => setIsMagazinesHovered(false)}
            >
              <div className="flex items-center">
                <div className="relative">
                  <CustomLink 
                    to="/magazines" 
                    className="hover:text-blue-600"
                    ref={linkRef}
                  >
                    Revistas
                  </CustomLink>
                </div>
                <button 
                  onClick={toggleMobileSubmenu}
                  className="xl:hidden ml-1 focus:outline-none"
                >
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${isMobileSubmenuOpen ? 'text-blue-600 rotate-180' : 'text-gray-500'}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <svg 
                  className={`hidden xl:block w-4 h-4 ml-1 transition-transform duration-200 ${isMagazinesHovered ? 'text-blue-600 rotate-180' : 'text-gray-500'}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>

              {/* Submenú Desktop */}
              <div 
                ref={submenuRef}
                className={`hidden xl:block absolute left-0 mt-2 w-56 bg-blue-50 rounded-lg shadow-lg z-30 transition-all duration-200 origin-top border border-blue-300 ${isMagazinesHovered ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-95 pointer-events-none'}`}
                onMouseEnter={() => setIsMagazinesHovered(true)}
                onMouseLeave={() => setIsMagazinesHovered(false)}
              >
                <div className="py-2 space-y-1">
                  {[
                    { to: "/revistas/teoria-y-praxis", label: "Teoría y praxis" },
                    { to: "/revistas/cientifica", label: "Científica" },
                    { to: "/revistas/dia-logos", label: "Diá-logos" },
                    { to: "/revistas/ing-novacion", label: "Ing-novación" },
                  ].map(({ to, label }) => (
                    <Link 
                      key={to}
                      to={to} 
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 transition-colors duration-150"
                      onClick={() => setIsMagazinesHovered(false)}
                    >
                      <span className="w-2 h-2 mr-2 bg-blue-600 rounded-full"></span>
                      {label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Submenú Mobile */}
              {(isMenuOpen && isMobileSubmenuOpen) && (
                <div className="xl:hidden pl-6 mt-2 space-y-2 border-l-2 border-blue-300 bg-blue-50 rounded-md py-2">
                  <Link 
                    to="/magazines"
                    className="flex items-center text-sm text-gray-700 font-bold hover:bg-blue-100 rounded-md px-2 py-1"
                    onClick={toggleMenu}
                  >
                    Todas las Revistas
                  </Link>
                  {[
                    { to: "/revistas/teoria-y-praxis", label: "Teoría y praxis" },
                    { to: "/revistas/cientifica", label: "Científica" },
                    { to: "/revistas/dia-logos", label: "Diá-logos" },
                    { to: "/revistas/ing-novacion", label: "Ing-novación" },
                  ].map(({ to, label }) => (
                    <Link 
                      key={to}
                      to={to}
                      className="flex items-center text-sm text-gray-700 hover:bg-blue-100 rounded-md px-2 py-1"
                      onClick={toggleMenu}
                    >
                      <span className="w-1.5 h-1.5 mr-2 bg-blue-600 rounded-full"></span>
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            <CustomLink to="/collections">Libros</CustomLink>
            <CustomLink to="/manuales">Manuales</CustomLink>
            <CustomLink to="/textos-escolares">Textos Escolares</CustomLink>
            <CustomLink to="/contact">Contacto</CustomLink>

            <div className="relative mt-2 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 cursor-pointer text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" id="default-search" className="flex w-full ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="¿Qué estás buscando?" required />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}
