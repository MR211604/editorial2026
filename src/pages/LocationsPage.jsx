import { getImagePath } from "../helpers/imagePath";

const locations = [
  {
    name: "Universidad Don Bosco",
    image: "img/logos_ubicaciones/udb.png",
    address: "Campus Soyapango y Campus Antiguo Cuscatlán",
    mapsQuery: "Universidad Don Bosco Campus Soyapango El Salvador",
  },
  {
    name: "Librería y papelería UCA",
    image: "img/logos_ubicaciones/libUCA.png",
    address: "San Salvador – Campus UCA y Antiguo Cuscatlán – SOHO Cascadas",
    mapsQuery: "Librería y papelería UCA San Salvador El Salvador",
  },
  {
    name: "La Ceiba",
    image: "img/logos_ubicaciones/laceiba.png",
    address: "La Ceiba Sucursales",
    mapsQuery: "La Ceiba librería El Salvador",
  },
  {
    name: "Clásicos Roskil",
    image: "img/logos_ubicaciones/roskil.png",
    address: "4a Avenida Sur, Santa Tecla",
    mapsQuery: "Clásicos Roskil Santa Tecla El Salvador",
  },
  {
    name: "Gize Bakery",
    image: "img/logos_ubicaciones/gize.png",
    address: "Av. 14 de Julio, Reparto Los Héroes, San Salvador",
    mapsQuery: "Gize Bakery Reparto Los Héroes San Salvador El Salvador",
  },
  {
    name: "La Biblioteca Café",
    image: "img/logos_ubicaciones/bibliocafe.png",
    address: "Presidente Plaza, BINAES – Centro Histórico",
    mapsQuery: "La Biblioteca Café Presidente Plaza BINAES San Salvador",
  },
  {
    name: "American Coffeeshop",
    image: "img/logos_ubicaciones/coffeeshop.png",
    address: "Calle Chiltiupán #30, Ciudad Merliot",
    mapsQuery: "American Coffeeshop Calle Chiltiupán Ciudad Merliot El Salvador",
  },
];

function getMapsUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export default function LocationsPage() {
  return (
    <main className="p-4 mt-16 mb-16">
      <section className="flex flex-col items-center justify-center">
        <h1 className="text-3xl text-sky-700 font-bold mb-10 text-center">
          ¿Dónde nos puedes encontrar?
        </h1>

        <div className="grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map(({ name, image, address, mapsQuery }) => (
            <article
              key={name}
              className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-52 items-center justify-center bg-slate-800 p-8">
                <img
                  src={getImagePath(image)}
                  alt={`Logo de ${name}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h2 className="mb-3 text-lg font-bold text-sky-700">{name}</h2>
                <p className="mb-5 flex-1 text-sm leading-6 text-gray-600">
                  <span className="mr-2 inline-block align-middle text-sky-700" aria-hidden="true">
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
      </section>
    </main>
  );
}
