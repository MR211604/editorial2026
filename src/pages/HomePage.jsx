import { useState, useEffect } from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";
import SearchInput from "../components/ui/SearchInput";
import CustomBookSlider from "../components/ui/CustomBookSlider";

const carouselTexts = [
  "Crear espacios para la divulgación de los trabajos de investigación de la Academia universitaria, y apoyar al alcance de los estudiantes textos de lectura comprensibles que, a la altura de las exigencias de la vida universitaria, ofrezcan la posibilidad de seguir el desarrollo de las materias que brindan en las diversas carreras.",
  "Aca va texto 2",
  "Texto 3 ",
];

const links = [
  {
    label: "Reglamento",
    path: "https://www.udb.edu.sv/editorial/docspdf/reglamentos-de-la-editorial.pdf",
  },
  {
    label: "Procedimientos de publicación",
    path: "https://www.udb.edu.sv/editorial/docspdf/procedimiento-de-publicacion.pdf",
  },
  {
    label: "Publicacion para revista",
    path: "https://www.udb.edu.sv/editorial/docspdf/manual-de-postulacion.pdf",
  },
  {
    label: "Consejo editorial",
    path: "https://www.udb.edu.sv/editorial/docspdf/consejo_editorial_udb_2022.pdf",
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselTexts.length);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    // <DefaultLayout>
    <div className="bg-white">
      {/* Primera sección */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 mt-18 mb-18 max-w-6xl mx-auto">
        <div className="w-full md:w-1/2 space-y-6 flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0c65af] mb-4">
            El verdadero espacio de aprendizaje
          </h1>
          <p className="text-xl text-black">
            <strong>Bienvenido a la editorial UDB</strong>
          </p>

          <div className="max-w-xl relative">
            <div className="relative bg-gray-50 rounded-full border border-gray-200">
              <SearchInput
                id="homepage-search"
                className="w-full py-3 pl-4 pr-12 bg-transparent border-none rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="¿Qué estás buscando?"
              />
              <div className="absolute right-3 top-2.5 w-7 h-7 bg-[#0c65af] rounded-full flex items-center justify-center shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <CustomBookSlider />
      </section>

      {/* Espacio reducido a 60px */}
      <div className="h-[60px] w-full bg-white"></div>

      {/* Segunda sección */}
      <section className="px-4 md:px-20 py-16 bg-white">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <h2 className="text-3xl font-semibold text-[#0c65af] mb-2">
            Editorial Don Bosco
          </h2>

          <p className="text-black leading-relaxed">
            <strong>Es una dependencia de la Universidad Don Bosco</strong>
          </p>

          <p className="text-gray-700">
            adscrita a la Rectoría que nació para dar respuesta a dos
            necesidades imperiosas
          </p>

          <div className="min-h-[120px] flex items-center justify-center px-4">
            <p className="text-gray-700 text-lg">
              {carouselTexts[currentSlide]}
            </p>
          </div>

          <div className="flex justify-center space-x-2">
            {carouselTexts.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? "bg-[#0c65af] w-6" : "bg-blue-200"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <h2 className="text-3xl font-semibold text-[#0c65af] mb-2">
            Detalles de publicación
          </h2>
        </div>

        <nav className="grid justify-content-center grid-cols-2 gap-5 mx-20 mt-15">
          {links.map(({ label, path }) => (
            <a href={path}>
              <div className="border-2 border-solid border-blue-500 transition-all duration-200 hover:scale-102 rounded-full text-sm md:text-md lg:text-lg cursor-pointer p-3 md:p-3 font-bold text-center text-blue-950 bg-transparent hover:bg-blue-50">
                {label}
              </div>
            </a>
          ))}
        </nav>
      </section>
    </div>
    // </DefaultLayout>
  );
}
