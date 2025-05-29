import MagazinePartners from "../../components/ui/magazines/MagazinePartners";

export default function MagazineAcceptanceProcess() {
  return (
    <div className="max-w-3xl mx-auto pt-8 pb-4 flex flex-col items-center">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-8">Proceso de aceptación</h1>

      <p className="font-bold mb-2">
        Proceso para la aceptación de artículos 
      </p>

      <p className="text-sm md:text-base text-gray-900 mb-4 text-justify">
        Este proceso sirve como instrumento de medición para procurar la máxima objetividad y transparencia en la evaluación de los artículos que son presentados para ser publicados en Teoría y Praxis.
      </p>

      <ul className="list-disc text-sm md:text-base text-gray-900 mb-4 text-justify">
        <li className="mb-2">La recepción de los artículos está a cargo del Editor del Consejo Editorial, quien evalúa sus aspectos formales, su pertinencia al ámbito de las Ciencias Sociales y su apego a las Normas para la presentación de artículos, y lo presenta al Consejo Editorial. Éste podrá devolverlo a su autor con indicaciones que considere necesarias.</li>
        <li className="mb-2">Una vez aceptado, el artículo es enviado a dos pares evaluadores miembros del Comité de Pares Evaluadores, los que emitirán juico acerca de la relevancia de la problemática, la claridad del encuadre teórico, la consistencia lógica y el sustento de los argumentos.</li>
        <li className="mb-2">Finalmente, el Comité Editorial decide acerca de su publicación, y basará su decisión en los informes de los Pares Evaluadores y en las prioridades de publicación.</li>
      </ul>

      <MagazinePartners />
    </div>
  );
}
