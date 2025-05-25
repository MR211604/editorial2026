import React from 'react'

export default function MagazinePartners() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 my-8">
      <div className="flex flex-col items-center">
        <span className="font-semibold text-xs md:text-sm mb-2">
          Publicado en:
        </span>
        <img
          src="https://www.udb.edu.sv/editorial/imagescontent/ebsco.jpg"
          alt="EBSCOhost"
          className="mb-2 object-contain size-20 w-full"
        />
      </div>
      <div className="flex flex-col items-center">
        <span className="font-semibold text-xs md:text-sm mb-2">
          Revistas Concesionadas:
        </span>
        <img
          src="https://www.udb.edu.sv/editorial/imagescontent/retos.jpg"
          alt="Retos"
          className="mb-2 object-contain size-20 w-full"
        />
      </div>
      <div className="flex flex-col items-center">
        <span className="font-semibold text-xs md:text-sm mb-2">
          Indexada en:
        </span>
        <div className="flex flex-row items-center gap-2">
          <img
            src="https://www.udb.edu.sv/editorial/imagescontent/latindex.jpg"
            alt="Latindex"
            className="mb-2 object-contain size-20 w-full"
          />
          <img
            src="https://www.udb.edu.sv/editorial/imagescontent/camjol.jpg"
            alt="CAMJOL"
            className="mb-2 object-contain size-20 w-full"
          />
        </div>
      </div>
    </div>
  )
}
