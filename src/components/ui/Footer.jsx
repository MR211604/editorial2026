import { Link } from "react-router-dom";
import { getImagePath } from "../../helpers/imagePath";

export default function Footer() {
  return (
    <footer className="w-full bg-blue-600 text-white mt-20 h-auto items-center justify-center p-4">
      <div className="flex justify-around items-center flex-wrap">
        <div className="w-[250px] h-auto flex items-center justify-center">
          <img
            src={getImagePath("img/Logo Blanco.png")}
            alt="Logo footer UDB"
          />
        </div>

        <div className="text-sm md:text-md">
          <p>
            Calle a Plan del Pino Km 1 1/2. <br />
            Ciudadela Don Bosco, Soyapango, <br />
            El Salvador, CA.
          </p>
        </div>

        <div className="flex items-left flex-col text-xs">
          <ul className="list-none text-cyan-100 mt-1">
            <li>
              <Link
                to="https://www.revistas.udb.edu.sv/"
                className="hover:underline hover:text-cyan-50 transition"
              >
                Revistas
              </Link>
            </li>
            <li>
              <Link
                to="/collections"
                className="hover:underline hover:text-cyan-50 transition"
              >
                Libros
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:underline hover:text-cyan-50 transition"
              >
                Contacto
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="hover:underline hover:text-cyan-50 transition"
              >
                Galeria
              </Link>
            </li>
            <li>
              <Link
                to="/locations"
                className="hover:underline hover:text-cyan-50 transition"
              >
                Dónde comprar
              </Link>
            </li>
          </ul>
        </div>

        <div className="grid items-center grid-cols-2 text-lg mt-4 md:mt-0">
          <div className="text-sm">
            <div className="flex text-sm items-center">
              <span className="text-sm mr-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span>Teléfono: (503) 2251-8212</span>
            </div>
            <div className="flex text-sm items-center">
              <span className="text-sm mr-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
              </span>
              <span>editorial@udb.edu.sv</span>
            </div>
          </div>

          <div className="flex justify-center items-center text-lg mb-1 gap-3">
            <a
              href="https://www.facebook.com/EditorialUDB"
              target="_blank"
              className="bg-yellow-400 text-blue-600 rounded-full size-8 flex items-center justify-center transform transition duration-500 hover:scale-110"
              rel="noopener"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/udbeditorial"
              target="_blank"
              className="bg-yellow-400 text-blue-600 rounded-full size-8 flex items-center justify-center transform transition duration-500 hover:scale-110"
              rel="noopener"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.tiktok.com/@_editorialudb"
              target="_blank"
              className="bg-yellow-400 text-blue-600 rounded-full size-8 flex items-center justify-center transform transition duration-500 hover:scale-110"
              rel="noopener"
            >
              <i className="bi bi-tiktok"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-4 text-zinc-200">
        <p className="text-[0.8em]">
          Editorial Universidad Don Bosco. San Salvador, El Salvador. © Derechos
          Reservados {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
