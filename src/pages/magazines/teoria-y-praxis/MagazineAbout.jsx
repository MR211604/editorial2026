import { CustomMarkdown } from "../../../components/ui/CustomMarkdown";
import { useTeoriaPraxis } from "../../hooks/useTeoriaYPraxis";

export default function MagazineAbout() {
  const { category, isLoading } = useTeoriaPraxis(); // ID de la categoría "Teoría y Praxis"

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  const content = category?.data?.detail?.about;

  return (
    <div className="max-w-3xl mx-auto pt-8 pb-4 flex flex-col items-center">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-6">
        Acerca de
      </h1>

      <CustomMarkdown content={content} />
    </div>
  );
}
