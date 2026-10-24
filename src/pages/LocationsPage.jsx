import { getLocationImagePath } from "../helpers/imagePath";
import { useActiveLocations } from "../api/hooks/useLocations";

function getMapsUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export default function LocationsPage() {
  const { locations, isLoading, error } = useActiveLocations();

  return (
    <main className="p-4 mt-16 mb-16">
      <section className="flex flex-col items-center justify-center">
        <h1 className="text-3xl text-sky-700 font-bold mb-10 text-center">
          ¿Dónde nos puedes encontrar?
        </h1>

        {isLoading ? (
          <p className="text-center text-gray-600">Cargando ubicaciones...</p>
        ) : error ? (
          <p className="text-center text-red-600" role="alert">
            No fue posible cargar las ubicaciones. Intenta de nuevo más tarde.
          </p>
        ) : locations.length === 0 ? (
          <p className="text-center text-gray-600">
            No hay ubicaciones disponibles en este momento.
          </p>
        ) : (
          <div className="grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map(({ idLocation, name, image, address, mapsQuery }) => (
              <article
                key={idLocation}
                className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-52 items-center justify-center bg-linear-to-r from-[#0a226b] to-[#002e88] p-8">
                  <img
                    src={getLocationImagePath(image)}
                    alt={`Logo de ${name}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h2 className="mb-3 text-lg font-bold text-sky-700">{name}</h2>
                  <p className="mb-5 flex-1 text-sm leading-6 text-gray-600">
                    <span
                      className="mr-2 inline-block align-middle text-sky-700"
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.54 22.351a.75.75 0 0 0 .92 0c.936-.75 7.04-5.736 7.04-11.101a7.5 7.5 0 1 0-15 0c0 5.365 6.104 10.35 7.04 11.1ZM12 13.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    {address}
                  </p>
                  <a
                    href={getMapsUrl(mapsQuery)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-amber-300 p-2.5 text-center text-xs font-semibold text-blue-900 transition-all duration-250 hover:bg-amber-400"
                  >
                    Ver en maps
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
