/*  !–– IMPORTS CORREGIDOS ––!  */
import DefaultLayout from "../../../components/layouts/DefaultLayout";
import MagazineHeader from "../../../components/ui/magazines/MagazineHeader";
import Pill from "../../../components/ui/Pill";
import { Outlet } from "react-router-dom";
import { TeoriaPraxisProvider } from "../../context/TeoriaYPraxisProvider";

/* Links internos */
const pills = [
  { label: "Acerca de", path: "about" },
  { label: "Política editorial", path: "editorial-policy" },
  { label: "Archivo", path: "archive" },
  { label: "Proceso de aceptación", path: "acceptance-process" },
  { label: "Normas de publicación", path: "publication-standards" },
  { label: "Consejo editorial", path: "editorial-board" },
];

export default function TP_Layout({ headerTitle, showPills = true }) {
  return (
    <DefaultLayout>
      <TeoriaPraxisProvider>
        <MagazineHeader headerTitle={headerTitle} />

        {/* Contenido dinámico */}
        <section className="mx-5 my-8">
          <Outlet />
        </section>

        {/* Pills */}
        {showPills && (
          <nav className="grid grid-cols-2 md:grid-cols-3 gap-5 mx-20 mt-20">
            {pills.map(({ label, path }) => (
              <Pill key={path} to={path}>
                {label}
              </Pill>
            ))}
          </nav>
        )}
      </TeoriaPraxisProvider>
    </DefaultLayout>
  );
}
