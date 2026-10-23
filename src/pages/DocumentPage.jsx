import { useParams } from "react-router-dom";
import { useDocumentBySlug } from "../api/hooks/useDocuments";
import { CustomMarkdown } from "../components/ui/CustomMarkdown";
import Loader from "../components/ui/Loader";

export default function DocumentPage() {
  const { slug } = useParams();
  const { document, isLoading, error } = useDocumentBySlug(slug);

  if (isLoading) {
    return <Loader />;
  }

  if (error || !document?.data) {
    return (
      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h1 className="mb-4 text-3xl font-bold text-[#0c65af]">
          Documento no encontrado
        </h1>
        <p className="text-gray-700">
          El documento solicitado no existe o ya no está disponible.
        </p>
      </section>
    );
  }

  const { title, content } = document.data;

  return (
    <article className="mx-auto max-w-4xl px-4 pb-16 pt-12">
      <h1 className="mb-8 text-center text-3xl font-bold text-[#0c65af] md:text-4xl">
        {title}
      </h1>
      {content?.trim() ? (
        <CustomMarkdown content={content} />
      ) : (
        <p className="text-center leading-relaxed text-gray-600">
          Este documento aún no tiene contenido.
        </p>
      )}
    </article>
  );
}
