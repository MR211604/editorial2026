import MagazinePartners from "../../../components/ui/magazines/MagazinePartners";

export default function MagazineAbout() {
  return (
    <div className="max-w-3xl mx-auto pt-8 pb-4 flex flex-col items-center">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-6">
        Acerca de
      </h1>

      <p className="text-sm md:text-base text-gray-900 mb-4 text-justify font-semibold">
        <span className="font-bold">La revista Teoría y Praxis</span> es una
        publicación semestral de la Facultad de Ciencias y Humanidades de la
        Universidad Don Bosco de El Salvador. El objetivo de la revista es
        promover y difundir la publicación de textos científicos ricos e
        inéditos en el campo de los conocimientos sociales y humanos sobre
        problemáticas nacionales e internacionales. El contenido de la revista
        está dirigido a especialistas, investigadores y estudiantes de posgrado
        y posgrado.
      </p>
      <p className="text-sm md:text-base text-gray-900 mb-4 text-justify">
        <span className="font-bold">Teoría y Praxis</span> recoge los empeños
        intelectuales de catedráticos y colaboradores de la Universidad Don
        Bosco. Esta entrega quiere ser la simbiosis entre la razón y la
        realidad, entre lo intelectual y lo integral, y en última teoría entre
        la teoría y la praxis. Así se entiende que nuestros cuatro esfuerzos no
        deben subyugarse en los cánones de la realidad, y viceversa, que
        nuestros cuatro esfuerzos no deben subyugarse en los cánones de la
        realidad y viceversa. Así se entiende, en toda su extensión, la teoría
        en un momento de práctica, y la práctica en un momento de la teoría.
      </p>
      <p className="text-sm md:text-base text-gray-900 mb-4 text-justify">
        En conclusión, Teoría y Praxis es el desafío permanente a nuestra razón
        y el desafío auténtico de nuestra realidad, con los que hacer crecer un
        más elevado sentido de comunidad científica y práctica a la sociedad,
        con, tan pronto, con demanda respuestas consistentes a sus problemas más
        actuales.
      </p>

      <MagazinePartners />
    </div>
  );
}
