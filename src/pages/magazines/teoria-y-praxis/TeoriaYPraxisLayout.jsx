import MagazineHeader from "../../../components/ui/magazines/MagazineHeader";
import Pill from "../../../components/ui/Pill";
import { Outlet } from "react-router-dom";
import { TeoriaPraxisProvider } from "../../context/TeoriaYPraxisProvider";

const teoriaYPraxisPills = [
  { label: "Acerca de", path: "about" },
  { label: "Archivo", path: "archive" },
  {
    label: "OJS",
    path: "https://www.revistas.udb.edu.sv/ojs/index.php/typ/index",
    isExternal: true,
  },
];

export default function TeoriaYPraxisLayout({ headerTitle, showPills = true }) {
  return (
    <TeoriaPraxisProvider>
      <MagazineHeader headerTitle={headerTitle} />
      {showPills && (
        <nav className="flex flex-wrap justify-center gap-5 mt-20 px-5">
          {teoriaYPraxisPills.map(({ label, path, isExternal }) => (
            <Pill
              key={path}
              to={path}
              isExternal={isExternal}
              className="min-w-[150px] md:min-w-[200px]"
            >
              {label}
            </Pill>
          ))}
        </nav>
      )}
      {/* Contenido dinámico */}
      <section className="mx-5 my-8">
        <Outlet />
      </section>
    </TeoriaPraxisProvider>
  );
}
