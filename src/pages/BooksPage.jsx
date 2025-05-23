import React from 'react'
import DefaultLayout from '../components/layouts/DefaultLayout'
import Button from '../components/ui/Button'

export default function BooksPage() {
  return (
    <DefaultLayout>
      <main className='p-4 mt-16'>
        <section className='flex flex-col items-center justify-center'>
          <h1 className='text-3xl text-sky-700 font-bold mb-8'>LÍNEA DE TIEMPO "LIBROS"</h1>
          
          {/* Espacio reservado para la línea de tiempo */}
          <div className='w-full max-w-4xl bg-gray-100 rounded-lg p-8 text-center'>
            <p className='text-gray-600 text-lg'>El contenido de la línea de tiempo aparecerá aquí</p>
          </div>
          
        </section>
      </main>
    </DefaultLayout>
  )
}