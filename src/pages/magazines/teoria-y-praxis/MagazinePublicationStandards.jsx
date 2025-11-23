import { CustomMarkdown } from "../../../components/ui/CustomMarkdown";
import { useTeoriaPraxis } from "../../hooks/useTeoriaYPraxis";

export default function MagazinePublicationStandards() {
  const { category, isLoading } = useTeoriaPraxis();

  const content = category?.data?.detail?.norms;

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto  flex flex-col items-center">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-8">
        Normas de publicación
      </h1>
      <CustomMarkdown content={content} />
    </div>
  );
}
