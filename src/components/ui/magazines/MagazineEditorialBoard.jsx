export default function MagazineEditorialBoard() {
  return (
    <div className="max-w-3xl mx-auto pt-8 pb-4 flex flex-col items-center">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-8">
        Consejo editorial
      </h1>

      {/* Consejo Editorial */}
      <div className="w-full">
        <p className="font-bold mb-2">
          El Consejo Editorial de Teoría y Praxis está integrado por:
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-900">
          <li>José Humberto Flores Muñoz, Director, Doctor en Filosofía.</li>
          <li>
            Héctor Raúl Grenni, Editor, Doctor en Historia de América Latina.
          </li>
          <li>Carlos Iván Orellana, Doctor en Ciencias Sociales.</li>
          <li>Amparo Marroquín, Doctora en Filosofía.</li>
          <li>Guillermo Gutiérrez, Doctor en Ciencias Empresariales.</li>
          <li>Milton Ascencio, Doctor en Educación.</li>
        </ul>
      </div>

      {/* Línea separadora */}
      <div className="border-t-2 border-blue-700 w-1/2 my-8" />

      {/* Comité Internacional de Pares Evaluadores */}
      <div className="w-full">
        <p className="font-bold mb-2">
          El Comité Internacional de Pares Evaluadores está integrado por:
        </p>
        <ul className="list-disc pl-6 text-gray-900">
          <li>
            José de La Fuente. Dr. en literatura, Universidad Católica Silva
            Henríquez, Chile.
          </li>
          <li>
            Ricardo Salas Astraín, Universidad Católica Silva Henríquez,
            Santiago, Chile, Doctor en Filosofía.
          </li>
          <li>
            Osvaldo Barreneche. Doctor en Historia, Universidad Nacional de La
            Plata, Argentina.
          </li>
          <li>
            Marcelino Agís Villaverde. Doctor en Filosofía, Universidad Santiago
            de Compostela, España.
          </li>
        </ul>
      </div>
    </div>
  );
}
