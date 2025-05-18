
export default function Navbar() {
  return (
    <nav className="bg-white relative w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img src="./src/" className="h-8" alt="Flowbite Logo" /> */}
          <img src="/src/assets/img/Logo_UDB.png" className='h-15' alt="Logo Universidad Don Bosco" />
          <img src="/src/assets/img/Logo_Normal.png" className='h-15' alt="Logo Editorial UDB" />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap">Flowbite</span> */}
        </a>

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
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full xl:flex xl:w-auto xl:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 xl:p-0 mt-4 font-medium border border-gray-100 rounded-xl bg-gray-50 xl:space-x-8 rtl:space-x-reverse xl:flex-row xl:mt-0 xl:border-0 xl:bg-white">
            <li>
              <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded-sm xl:bg-transparent xl:text-blue-700 xl:p-0" aria-current="page">Revistas</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 xl:hover:bg-transparent xl:hover:text-blue-700 xl:p-0">Colecciones</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 xl:hover:bg-transparent xl:hover:text-blue-700 xl:p-0">Manuales</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 xl:hover:bg-transparent xl:hover:text-blue-700 xl:p-0">Textos escolares</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 xl:hover:bg-transparent xl:hover:text-blue-700 xl:p-0">Contacto</a>
            </li>

          </ul>

        </div>
      </div>
    </nav>

  )
}
