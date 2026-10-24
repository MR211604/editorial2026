import { useEffect, useRef, useState } from "react";
import { useGetActiveBanner } from "../api/hooks/useBanners";
import { useActiveDocuments } from "../api/hooks/useDocuments";
import { useGetBooks } from "../api/hooks/usePublishings";
import CustomBookSlider from "../components/ui/CustomBookSlider";
import Loader from "../components/ui/Loader";
import SearchInput from "../components/ui/SearchInput";
import { getVideoEmbed } from "../helpers/banner";
import { Link } from "react-router-dom";

const carouselTexts = [
  "Crear espacios para la divulgación de los trabajos de investigación de la Academia universitaria, y apoyar al alcance de los estudiantes textos de lectura comprensibles que, a la altura de las exigencias de la vida universitaria, ofrezcan la posibilidad de seguir el desarrollo de las materias que brindan en las diversas carreras.",
];

const videoContainerClasses = {
  tiktok: "aspect-[9/16] max-w-[380px]",
  instagram: "aspect-[9/16] max-w-[380px]",
  facebook: "aspect-[9/16] max-w-[380px]",
};

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const ytRef = useRef(null);
  const { activeBanner, isActiveBannerLoading } = useGetActiveBanner();
  const {
    documents,
    isLoading: areDocumentsLoading,
    error: documentsError,
  } = useActiveDocuments();
  const { books: latestBooks, isLoading: areLatestBooksLoading } = useGetBooks({
    page: 1,
    limit: 5,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselTexts.length);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const videoEmbed = getVideoEmbed(activeBanner?.data?.resourceURL);

  useEffect(() => {
    // Esperamos a que la carga termine y el ref exista
    if (!isActiveBannerLoading && videoEmbed?.provider === "youtube" && ytRef.current) {
      // Un ligero retraso asegura que el web component se haya inicializado por completo
      const timer = setTimeout(() => {
        if (ytRef.current) {
          ytRef.current.click();
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isActiveBannerLoading, videoEmbed?.provider, videoEmbed?.id]);

  return (
    <div className="bg-white">
      {/* Primera sección */}
      <section className="mx-auto flex min-h-[calc(100svh-7rem)] w-full max-w-7xl flex-col items-center justify-center gap-8 px-5 py-14 sm:gap-12 sm:px-8 md:flex-row md:gap-14 md:px-10 md:py-16">
        <div className="w-full md:w-1/2 space-y-6 flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0c65af] mb-4">
            El verdadero espacio de aprendizaje
          </h1>
          <p className="text-xl sm:text-2xl text-black">
            <strong>Bienvenido a la Editorial UDB</strong>
          </p>

          <div className="max-w-xl relative">
            <div className="relative bg-gray-50 rounded-full border border-gray-200">
              <SearchInput
                id="homepage-search"
                className="w-full py-3 pl-4 pr-12 bg-transparent border-none rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Buscar en libros..."
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

        <CustomBookSlider
          books={latestBooks?.data ?? []}
          isLoading={areLatestBooksLoading}
        />
      </section>

      {/* Segunda sección */}
      <section className="px-4 md:px-20 py-16 bg-white">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <h2 className="text-3xl font-semibold text-[#0c65af] mb-2">
            Editorial Universidad Don Bosco
          </h2>

          <p className="text-black leading-relaxed">
            <strong>Es una dependencia de la Universidad Don Bosco</strong>
          </p>

          <p className="text-gray-700">
            Adscrita a la Rectoría que nació para dar respuesta a dos
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

      <div className="max-w-5xl bg-white align-items-center mx-auto ">
        {isActiveBannerLoading ? (
          <Loader />
        ) : (
          videoEmbed?.provider === "youtube" ? (
            <lite-youtube
              ref={ytRef}
              videoid={videoEmbed.id}
              posterquality="maxresdefault"
              short={videoEmbed.isShort}
              params="autoplay=1&mute=1&loop=1&controls=1&modestbranding=1&playsinline=1&rel=0&enablejsapi=1"
            ></lite-youtube>
          ) : videoEmbed ? (
            <div
              className={`mx-auto overflow-hidden ${
                videoContainerClasses[videoEmbed.provider] ??
                "aspect-video max-w-[800px]"
              }`}
            >
              <iframe
                title={`Video de ${videoEmbed.provider}`}
                src={videoEmbed.src}
                className="h-full w-full border-0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ) : null
        )}
      </div>

      <section className="mx-auto pt-40">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#0c65af] mb-2">
            Detalles de publicación
          </h2>
        </div>

        <nav className="grid justify-content-center grid-cols-1 md:grid-cols-2 gap-5 mx-20 mt-15">
          {areDocumentsLoading ? (
            <p className="col-span-2 text-center text-gray-600">
              Cargando documentos...
            </p>
          ) : documentsError ? (
            <p className="col-span-2 text-center text-gray-600">
              No se pudieron cargar los documentos.
            </p>
          ) : !documents?.data?.length ? (
            <p className="col-span-2 text-center text-gray-600">
              No hay documentos disponibles.
            </p>
          ) : (
            documents?.data?.map(({ idDocument, title, slug }) => (
              <Link
                key={idDocument}
                to={`/documentos/${slug}`}
                className="border-2 border-solid border-blue-500 transition-all duration-200 hover:scale-102 rounded-full text-sm md:text-md lg:text-lg cursor-pointer p-3 md:p-3 font-bold text-center text-blue-950 bg-transparent hover:bg-blue-50"
              >
                {title}
              </Link>
            ))
          )}
        </nav>
      </section>
    </div>
  );
}
