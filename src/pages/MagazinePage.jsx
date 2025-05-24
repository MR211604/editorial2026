import DefaultLayout from "../components/layouts/DefaultLayout";
import MagazineHeader from "../components/ui/magazines/MagazineHeader";
import Pill from "../components/ui/Pill";
import { Outlet } from "react-router-dom";

const pills = [
  { label: "Acerca de", path: "about" },
  { label: "Política editorial", path: "editorial-policy" },
  { label: "Archivo", path: "archive" },
  { label: "Proceso de aceptación", path: "acceptance-process" },
  { label: "Normas de publicación", path: "publication-standards" },
  { label: "Consejo editorial", path: "editorial-board" },
];

export default function MagazinePage() {
  return (
    <DefaultLayout>
      <MagazineHeader />
 {/* Aquí se renderiza la sección seleccionada */}
      <div className="mx-10 my-8">
        <Outlet />
      </div>

      {/* Pills de navegación */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mx-20 justify-center items-center mt-20">
        {pills.map((pill) => (
          <Pill key={pill.path} to={pill.path}>
            {pill.label}
          </Pill>
        ))}
      </div>
    </DefaultLayout>
  );
}
