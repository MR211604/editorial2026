/*  src/pages/magazines/cientifica/index.jsx  */
import DefaultLayout from "../../../components/layouts/DefaultLayout";
import { Chrono } from "react-chrono";
import { useState } from "react";

/* ——— Datos de prueba ———
   Cada objeto puede tener:
   • title        → fecha corta
   • url          → (enlace opcional)
   • cardTitle    → título grande
   • cardSubtitle → subtítulo
   • cardDetailedText → párrafo
   • media        → { type: "IMAGE", source: { url } }  (opcional)
*/
const mockItems = [
  {
    title: "2005",
    url: "https://cientifica.universidad.edu.pe",
    cardTitle: "Vol. 1, Nº 1",
    cardSubtitle: "Lanzamiento inaugural",
    cardDetailedText:
      "Primer número de la revista Científica con artículos sobre ingeniería mecánica.",
  },
  {
    title: "2008",
    cardTitle: "Indexación regional",
    cardSubtitle: "LATINDEX",
    cardDetailedText:
      "La revista es aceptada en el catálogo LATINDEX, aumentando su visibilidad.",
  },
  {
    title: "2012",
    cardTitle: "Vol. 10, Edición especial",
    cardSubtitle: "Nanotecnología aplicada",
    cardDetailedText:
      "Número monográfico dedicado a avances en nano-recubrimientos para dispositivos médicos.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://source.unsplash.com/random/400x200?nanotechnology",
      },
    },
  },
  {
    title: "2018",
    cardTitle: "Cambio de periodicidad",
    cardSubtitle: "De anual a semestral",
    cardDetailedText:
      "A partir de este año se publican dos números por volumen para agilizar la difusión.",
  },
  {
    title: "2024",
    cardTitle: "Adopción Open Access",
    cardSubtitle: "Creative Commons BY-NC-SA",
    cardDetailedText:
      "Todos los artículos pasan a publicarse bajo licencia abierta, sin cargos para autores.",
  },
];

export default function CientificaIndex() {
  /*  Permite añadir items en caliente si lo necesitas */
  const [items] = useState(
    mockItems.map((item, idx) => ({ ...item, id: `mock-${idx}` })),
  );

  return (
    <main className="p-4 mt-16">
      <section className="flex flex-col items-center">
        <h1 className="text-3xl text-sky-700 font-bold mb-8">
          LÍNEA DE TIEMPO &quot;CIENTÍFICA&quot;
        </h1>

        {items.length ? (
          <Chrono
            items={items}
            // parseDetailsAsHTML={true}
            mode="VERTICAL_ALTERNATING"
            disableToolbar
            slideShow={false}
          />
        ) : (
          <div className="w-full max-w-4xl bg-gray-100 rounded-lg p-8 text-center">
            <p className="text-gray-600 text-lg">
              No hay elementos para mostrar
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
