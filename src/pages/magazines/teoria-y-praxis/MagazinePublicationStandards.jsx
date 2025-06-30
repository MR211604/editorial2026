import MagazinePartners from "../../../components/ui/magazines/MagazinePartners";

export default function MagazinePublicationStandards() {
  return (
    <div className="max-w-3xl mx-auto pt-8 pb-4 flex flex-col items-center text-justify">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-8">Normas de publicación</h1>

      <p className="font-bold mb-2">
        Normas para la presentación de artículos
      </p>

      <p className="text-sm md:text-base text-gray-900 mb-4">
        La publicación de cualquier material estará supeditada a la aprobación del editor o el Consejo Editorial de la revista atendiendo los requisitos de presentación que a continuación se detallan. El incumplimiento de las normas siguientes puede derivar en la devolución del artículo para ser corregido o en su rechazo definitivo:
      </p>

      <ul className="list-disc pl-6 text-sm md:text-base text-gray-900 mb-4">
        <li className="mb-2">Los artículos deben presentarse en el idioma oficial de la publicación que es el castellano. Serán enviados a través de la plataforma OJS de la revista. La revista publicará tres tipos de escritos:
          <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
            <li><span className="font-bold">Artículos</span>: Reporte de investigaciones empíricas, con base en el formato IMRyD (Introducción, Método, Resultados y Discusión). También se incluyen en esta sección textos caracterizados por su complejidad, fundamentación o extensión cuya construcción descansa en una argumentación sustentada, amplia y sólida. La extensión de estos manuscritos deberá oscilar entre las 7000 y 9000 palabras incluyendo todas sus partes (título, resumen, tablas, referencias, etc.).</li>
            <li><span className="font-bold">Ensayos</span>: Trabajos de reflexión crítica de naturaleza teórica, filosófica, metodológica o a propósito de un fenómeno o coyuntura particular. A manera de orientación, su estructura debería contemplar al menos las siguientes secciones: introducción, desarrollo de la argumentación, conclusiones y referencias. No se aceptarán ensayos sin apartado de referencias. Su extensión oscilará entre 5000 y 7000 palabras.</li>
            <li><span className="font-bold">Reseña de libros, películas o documentales</span>: Recensiones de libros u obras fílmicas de interés para el campo de las Ciencias Sociales o las Humanidades. Las obras reseñadas deberán haber sido producidas en los tres años previos a la elaboración del escrito. La extensión de este tipo de escritos oscilará entre las 2000 y 3000 palabras.</li>
          </ul>
        </li>
        <li className="mb-2">Los distintos tipos de escritos deberán ser elaborados en formato de archivo Word, página tamaño carta a espacio simple con fuente Trebuchet MS, márgenes de 3 cm en todos sus costados. El título del trabajo debe usar un tamaño de fuente de 16, los subtítulos 14 y el texto del artículo tamaño 12.</li>

        <li className="mb-2">En la primera página, luego del título en castellano (tamaño 16) deberá añadir el título en inglés (tamaño de fuente 14). Luego alineado a la derecha se debe colocar el nombre del o los (las) autores (as) en líneas separadas. En pie de página se deberá indicar para cada autor sus datos de identificación académica, usualmente estos incluyen aspectos como los siguientes: nacionalidad, título o cargo principal, adscripción institucional, número ORCID y dirección de correo electrónico.</li>

        <li className="mb-2">Después del nombre de los autores, en tamaño de fuente 10, se colocará un resumen en castellano y en inglés (abstract) seguidos, respectivamente, en castellano e inglés, de cinco palabras o conceptos clave (keywords) de identificación de contenido. El resumen deberá tener una extensión de entre 200 y 250 palabras.</li>

        <li className="mb-2">Las tablas, cuadros gráficos y figuras deberán titularse debidamente y contar con llamados en el texto. Se colocarán en el texto en el lugar en el que corresponden. Estos recursos visuales deben ser estéticos y sobrios (la revista se imprime en blanco y negro) y las tablas y cuadros deben prescindir de líneas internas innecesarias. Es responsabilidad de los autores contar con los permisos necesarios en caso de utilizar material protegido con algún tipo de propiedad intelectual.</li>

        <li className="mb-2">La gestión de fuentes al interior del texto y en el apartado de referencias responderá al formato APA 7a. edición. Se solicita evitar o reducir al máximo posible el uso de notas al pie de página.</li>
      </ul>

      <p className="text-sm md:text-base text-gray-900 mb-4 text-justify">
        Las colaboraciones deberán ser enviadas en un archivo de cualquier versión de Word a:
      </p>

      <div className="flex text-center flex-col font-bold mb-2">
        <p>Carlos Iván Orellana.</p>
        <p>Universidad Don Bosco, El Salvador.</p>
        <p>ivan.orellana@udb.edu.sv</p>
      </div>
      
      <MagazinePartners />
    </div>
  );
}
