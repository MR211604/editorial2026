import React from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";
import Button from "../components/ui/Button";
import { getImagePath } from "../helpers/imagePath";

export default function ContactPage() {
  return (
    <main className="grid grid-cols-2 gap-4 p-4 mt-16">
      {/* Contact form */}
      <section className="flex flex-col col-span-1 items-center justify-center">
        <form className="bg-white px-8 pt-6 pb-8 mb-4 w-full max-w-md">
          <h2 className="text-3xl text-sky-700 font-bold mb-4">Contáctanos</h2>
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
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-bold text-gray-700"
            >
              Asunto
            </label>
            <input
              type="email"
              id="email"
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
              rows="4"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            ></textarea>
          </div>
          <Button
            type="submit"
            className="py-2 px-5 rounded-full transition text-md text-blue-900 font-semibold"
          >
            Enviar
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
