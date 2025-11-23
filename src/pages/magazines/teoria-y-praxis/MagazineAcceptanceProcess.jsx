import { CustomMarkdown } from "../../../components/ui/CustomMarkdown";
import { useTeoriaPraxis } from "../../hooks/useTeoriaYPraxis";

export default function MagazineAcceptanceProcess() {
  const { category, isLoading } = useTeoriaPraxis();

  const content = category?.data?.detail?.process;

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto pt-8 pb-4 flex flex-col items-center">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-8">
        Proceso de aceptación
      </h1>
      <CustomMarkdown content={content} />
    </div>
  );
}
