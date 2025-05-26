import Button from "../../components/ui/Button";

export default function MagazineArchive() {
  // Simulación de libros/archivos
  const books = Array(9).fill({
    title: "Titular",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  });

  return (
    <div className="max-w-7xl mx-auto pt-8 pb-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-12">
        Archivo
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 w-full mb-16 px-4">
        {books.map((book, idx) => (
          <div
            key={idx}
            className="flex items-start bg-white rounded-lg shadow-md p-4"
          >
            <div className="bg-blue-300 w-32 h-48 rounded-md shadow mr-4 flex-shrink-0" />            
            <div className="flex flex-col justify-between h-full">
              <div>
                <h2 className="font-bold text-blue-900 mb-2 text-lg">{book.title}</h2>
                <p className="text-sm text-gray-700 mb-6">{book.description}</p>
              </div>
              <Button className="text-blue-900 font-semibold py-2 px-5 rounded-full text-sm w-max">
                Ver detalle
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
