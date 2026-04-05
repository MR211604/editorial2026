import { useState } from "react";
import Button from "../components/ui/Button";
import { getImagePath } from "../helpers/imagePath";
import { useCreateEmail } from "../api/hooks/useContact";

export default function ContactPage() {
  const { createUserEmail, createUserEmailSuccess, createError, isCreating } =
    useCreateEmail();

  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log("Submitting contact form with data:", formData);
    e.preventDefault();
    createUserEmail(formData);
  };

  return (
    <main className="grid grid-cols-2 gap-4 p-4 mt-16">
      {/* Contact form */}
      <section className="flex flex-col col-span-1 items-center justify-center">
        <form
          className="bg-white px-8 pt-6 pb-8 mb-4 w-full max-w-md"
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl text-sky-700 font-bold mb-4">Contáctanos</h2>

          {createUserEmailSuccess && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
              Mensaje enviado exitosamente. Nos pondremos en contacto contigo
              pronto.
            </div>
          )}
          {createError && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
              {createError.message ||
                "Un error ha ocurrido. No se pudo enviar el mensaje, intente de nuevo más tarde."}
            </div>
          )}

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-bold text-gray-700 "
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-sm font-bold text-gray-700"
            >
              Asunto
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-bold text-gray-700"
            >
              Correo
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-bold text-gray-700"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            ></textarea>
          </div>
          <Button
            type="submit"
            disabled={isCreating}
            className={`py-2 px-5 rounded-full transition text-md text-blue-900 font-semibold ${
              isCreating ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isCreating ? "Enviando..." : "Enviar"}
          </Button>
        </form>
      </section>

      {/* image section */}
      <section className="flex flex-row items-center align-center justify-center">
        <img
          src={getImagePath("img/contact_photo.webp")}
          alt="Contáctanos"
          className="w-auto h-auto lg:h-150 object-fit"
        />
      </section>
    </main>
  );
}
