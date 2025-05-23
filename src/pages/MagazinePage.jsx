import DefaultLayout from "../components/layouts/DefaultLayout";
import MagazineHeader from "../components/ui/magazines/MagazineHeader";
import Pill from "../components/ui/Pill";

export default function MagazinePage() {
  return (
    <DefaultLayout>
      <MagazineHeader />

      <div className="mx-15 h-full flex flex-col mt-15">
        <h1 className="flex text-3xl font-bold items-center justify-center text-blue-800">Política editorial</h1>

        <p className="text-lg text-gray-700 mt-4 font-bold text-pretty">
          Enfoque, políticas y alcances de Teoría y praxis
        </p>

        <p className="text-lg text-gray-700 mt-5 text-pretty">
          <span className="font-bold">Teoria y práxis</span> es una publicación en el ámbito de las Ciencias Sociales de la Universidad Don Bosco, El Salvador.
          Recoge y ofrece a la comunidad académica la producción intelectual de la Universidad Don Bosco y de la comunidad
          académica en general.
        </p>

        <p className="text-lg text-gray-700 mt-10 text-pretty">
          <span className="font-bold">Teoria y práxis</span> quiere crear un espacio posible para la simbiosis entre la razón y la realidad, lo intelectual y lo integral
          y entre la teoría y la praxis. El objetivo primero es ofrecer un espacio académico abierto y plural que permita a los
          investigadores de diferentes procedencias y disciplinas de las Ciencias Sociales establecer un fructífero intercambio,
          plasmando así un lugar de discusión abierto y plural. Partiendo de la convicción de que los esfuerzos teóricos no
          deben estar lejos de la realidad, favorece la presentación de ideas y propuestas que expresen el esfuerzo por indagar
          acerca de la realidad y la vida humana, poniendo en relieve la relación de la humanidad con lo trascendente, con las
          demás personas y con el contexto.
        </p>

        <p className="text-lg text-gray-700 mt-10 text-pretty">
          En este propósito, <span className="font-bold">Teoria y práxis</span> abre sus páginas a trabajos elaborados por otros investigadores vinculados al
          ámbito de las Ciencias Sociales, buscando establecer con ellos un espacio fecundo capaz de generar encuentros,
          diálogos y creaciones intelectuales.
        </p>

        <div className="flex border w-full my-8 mx-auto border-blue-700 max-w-100 md:max-w-120 lg:max-w-150 items-center justify-center"></div>

        <p className="text-lg text-gray-700 mt-5 text-pretty">
          <span className="font-bold">Teoria y práxis</span> presenta publicaciones inéditas y revisadas por pares evaluadores externos, y estará indexada en las
          bases de datos que sustenten su calidad académica. El proceso de revisión por pares está determinado y escrito, y se
          revisa anualmente. Los Criterios para la evaluación de artículos, accesibles en su página web, determinan este proceso.
          Un  <span className="font-bold">Comité Internacional de Pares Evaluadores</span> da sustento a la calidad académica de las publicaciones.

        </p>

        <p className="text-lg text-gray-700 mt-5 text-pretty">
          <span className="font-bold">Teoria y práxis</span> mantiene una política de acceso abierta y libre, por medio del Repositorio de la Universidad Don
          Bosco, en el cual se la puede encontrar sin restricciones desde su primer número.
        </p>

        <p className="text-lg text-gray-700 mt-5 text-pretty">
          Si bien <span className="font-bold">Teoria y práxis</span> asume la responsabilidad de la publicación de artículos académicos, la responsabilidad acerca
          de sus afirmaciones queda en los autores de los mismos. El idioma oficial de  <span className="font-bold">Teoria y práxis</span> es el castellano; sin
          embargo, el Comité de Redacción podrá autorizar la publicación de artículos en otro idioma.
        </p>

        <div className="flex border w-full my-8 mx-auto border-blue-700 max-w-100 md:max-w-120 lg:max-w-150 items-center justify-center"></div>

        <p className="text-lg text-gray-700 mt-5 text-pretty">
          Las Normas de Presentación, publicadas en cada número y de libre acceso en el Repositorio de la Universidad Don
          Bosco, determinan las condiciones y los tiempos en que deben presentarse los artículos propuestos para su
          publicación.
        </p>

        <p className="text-lg text-gray-700 mt-5 text-pretty">
          <span className="font-bold">Teoria y práxis</span> lleva una política de respeto a los derechos de autor, y reconoce las autorías en forma explícita. Al
          respecto, se acoge a las condiciones de publicación de Creative Commons <span className="font-bold">Reconocimiento CompartirI gual (by sa).</span>
        </p>

      </div>

      {/* Seccion de pildoras  */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mx-20 justify-center items-center mt-20">
        <Pill>Acerca de</Pill>
        <Pill>Política editorial</Pill>
        <Pill>Archivo</Pill>

        <Pill>Proceso de aceptación</Pill>
        <Pill>Normas de publicación</Pill>
        <Pill>Contacto</Pill>
        
      </div>

    </DefaultLayout>
  )
}
