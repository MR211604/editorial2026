import { useEffect } from "react";

export default function GalleryPage() {
  useEffect(() => {
    // Configuración de Curator.io
    const script = document.createElement("script");
    script.src =
      "https://cdn.curator.io/published/a2a9c048-a36e-4ace-bd16-7280a6ffc7f3.js";
    script.async = true;
    script.charset = "UTF-8";
    document.body.appendChild(script);

    return () => {
      // Limpiar el script al desmontar para evitar duplicados si se navega de nuevo a la página
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <main className="p-4 mt-16">
      <section className="flex flex-col items-center justify-center">
        <h1 className="text-3xl text-sky-700 font-bold mb-8 uppercase text-center">
          Galería de Instagram
        </h1>

        <div id="curator-feed-default-feed-layout" className="w-full max-w-7xl">
          <a
            href="https://curator.io"
            target="_blank"
            rel="noopener noreferrer"
            className="crt-logo crt-tag"
          >
            Powered by Curator.io
          </a>
        </div>
      </section>
    </main>
  );
}
