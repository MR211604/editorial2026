import { Link } from "react-router-dom";
import CustomLink from "./CustomLink";
import { useState, useEffect } from "react";

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false);
    };
    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <nav className="bg-white relative w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://www.udb.edu.sv/editorial/images/nuevo_logo_udb_letra_blanca.png" className="h-20" alt="Editorial Oficial UDB" title="Editorial Oficial UDB" />
          <img src="/src/assets/img/Logo_Normal.png" className='h-15' alt="Logo Editorial UDB" />
        </Link>

        <div className="flex xl:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
          <div className="relative md:mr-12">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 cursor-pointer text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="default-search" className="flex w-full ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="¿Qué estás buscando?" required />
          </div>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full xl:flex xl:w-auto xl:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 xl:p-0 mt-4 font-medium border border-gray-100 rounded-xl bg-gray-50 xl:space-x-8 rtl:space-x-reverse xl:flex-row xl:mt-0 xl:border-0 xl:bg-white">
            <CustomLink to="/magazines">Revistas</CustomLink>
            <CustomLink to="/collections">Colecciones</CustomLink>
            <CustomLink to="/manuales">Manuales</CustomLink>
            <CustomLink to="/textos-escolares">Textos Escolares</CustomLink>
            <CustomLink to="/contact">Contacto</CustomLink>
          </ul>
        </div>
      </div>
    </nav>

  )
}
