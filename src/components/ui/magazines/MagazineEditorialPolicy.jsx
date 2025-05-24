export default function MagazineEditorialPolicy() {
  return (
    <div className="max-w-3xl mx-auto pt-8 pb-4 flex flex-col items-center">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-8">
        Política editorial
      </h1>

      <p className="font-bold mb-2">
        Enfoques, políticas y alcances de Teoría y Praxis
      </p>
      <p className="text-sm md:text-base text-gray-900 mb-4 text-justify">
        <span className="font-bold">Teoría y Praxis</span> es una publicación en
        el ámbito de las Ciencias Sociales de la Universidad Don Bosco, El
        Salvador. Recoge y ofrece a la comunidad académica la producción
        intelectual de la Universidad Don Bosco y de la comunidad académica en
        general.
      </p>
      <p className="text-sm md:text-base text-gray-900 mb-4 text-justify">
        <span className="font-bold">Teoría y Praxis</span> quiere crear un
        espacio posible para la simbiosis entre la razón y la realidad, lo
        intelectual y lo integral y entre la teoría y la praxis. El objetivo
        primero es ofrecer un espacio académico abierto y plural que permita a
        los investigadores de diferentes procedencias y disciplinas de las
        Ciencias Sociales establecer un fructífero intercambio, plasmando así un
        lugar de discusión abierto y plural. Partiendo de la convicción de que
        los esfuerzos teóricos no deben estar lejos de la realidad, favorece la
        presentación de ideas y propuestas que expresen el esfuerzo por indagar
        acerca de la realidad y la vida humana, poniendo en relieve la relación
        de la humanidad con lo trascendente, con las demás personas y con el
        contexto.
      </p>
      <p className="text-sm md:text-base text-gray-900 mb-4 text-justify">
        En este propósito, <span className="font-bold">Teoría y Praxis</span>{" "}
        abre sus páginas a trabajos elaborados por otros investigadores
        vinculados al ámbito de las Ciencias Sociales, buscando establecer con
        ellos un espacio fecundo capaz de generar encuentros, diálogos y
        creaciones intelectuales.
      </p>
      <p className="text-sm md:text-base text-gray-900 mb-4 text-justify">
        <span className="font-bold">Teoría y Praxis</span> presenta
        publicaciones inéditas y revisadas por pares evaluadores externos, y
        estará indexada en las bases de datos que sustenten su calidad
        académica. El proceso de revisión por pares está determinado y escrito,
        y se revisa anualmente. Los Criterios para la evaluación de artículos,
        accesibles en su página web, determinan este proceso. Un{" "}
        <span className="font-bold">
          Comité Internacional de Pares Evaluadores
        </span>{" "}
        da sustento a la calidad académica de las publicaciones.
      </p>
      <p className="text-sm md:text-base text-gray-900 mb-4 text-justify">
        <span className="font-bold">Teoría y Praxis</span> mantiene una política
        de acceso abierta y libre, por medio del Repositorio de la Universidad
        Don Bosco, en el cual se la puede encontrar sin restricciones desde su
        primer número.
      </p>
      <p className="text-sm md:text-base text-gray-900 mb-4 text-justify">
        Si bien <span className="font-bold">Teoría y Praxis</span> asume la
        responsabilidad de la publicación de artículos académicos, la
        responsabilidad acerca de sus afirmaciones queda en los autores de los
        mismos. El idioma oficial de{" "}
        <span className="font-bold">Teoría y Praxis</span> es el castellano; sin
        embargo, el Comité de Redacción podrá autorizar la publicación de
        artículos en otro idioma.
      </p>
      <p className="text-sm md:text-base text-gray-900 mb-4 text-justify">
        Las Normas de Presentación, publicadas en cada número y de libre acceso
        en el Repositorio de la Universidad Don Bosco, determinan las
        condiciones y los tiempos en que deben presentarse los artículos
        propuestos para su publicación.
      </p>
      <p className="text-sm md:text-base text-gray-900 mb-4 text-justify">
        <span className="font-bold">Teoría y Praxis</span> lleva una política de
        respeto a los derechos de autor y reconoce las autorías en forma
        explícita. Al respecto, se acoge a las condiciones de publicación de
        Creative Commons{" "}
        <span className="font-bold">
          Reconocimiento - Compartir igual (by-sa)
        </span>
        .
      </p>

      {/* Logos de publicaciones y revistas */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 my-8">
        <div className="flex flex-col items-center">
          <span className="font-semibold text-xs md:text-sm mb-2">
            Publicado en:
          </span>
          <img
            src="/ruta-logo-ejemplo-1.png"
            alt="EBSCOhost"
            className="h-6 mb-2"
          />
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold text-xs md:text-sm mb-2">
            Revistas Concesionadas:
          </span>
          <img
            src="/ruta-logo-ejemplo-2.png"
            alt="Retos"
            className="h-6 mb-2"
          />
          <img
            src="/ruta-logo-ejemplo-3.png"
            alt="CAMJOL"
            className="h-6 mb-2"
          />
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold text-xs md:text-sm mb-2">
            Indexada en:
          </span>
          <img
            src="/ruta-logo-ejemplo-4.png"
            alt="Latindex"
            className="h-6 mb-2"
          />
        </div>
      </div>
    </div>
  );
}
