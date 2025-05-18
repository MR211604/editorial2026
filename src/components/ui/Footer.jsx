export default function Footer() {
  return (
    <footer className="w-full bg-blue-600 text-white mt-auto h-auto items-center justify-center p-4">
      <div className="flex justify-around items-center flex-wrap">
        <div className="w-[250px] h-auto mr-3">
          <img src="/src/assets/img/Logo Blanco.png" alt="Logo footer UDB" />
        </div>

        <div className="text-md">
          <p>Calle a Plan del Pino Km 1 1/2. <br />
            Ciudadela Don Bosco, Soyapango, <br />
            El Salvador, CA.</p>
        </div>

        <div className="flex items-left flex-col text-xs">
          <ul className="list-none text-cyan-100 mt-1">
            <li>Revistas</li>
            <li>Colecciones</li>
            <li>Manuales</li>
            <li>Textos escolares</li>
          </ul>
        </div>

        <div className="flex items-left flex-col text-lg">
          <div className="flex items-center text-sm mb-1">
            <span className="text-sm mr-1.5"><img src="/src/assets/img/phone-call.png" alt="Phone Icon" /></span>
            <span>Teléfono: (503) 2251-8200</span>
          </div>
          <div className="flex items-center text-sm mb-1">
            <span className="text-sm mr-1.5"><img src="/src/assets/img/email.png" alt="Email Icon" /></span>
            <span>editorial@udb.edu.sv</span>
          </div>

          <div className="flex items-center text-lg mb-1 gap-2">
            <a href="https://www.facebook.com" target="_blank" class="social-icon">
              <img className="size-6 transform transition duration-500 hover:scale-110" src="/src/assets/img/facebookAmarillo.png" alt="Facebook Icon" />
            </a>
            <a href="https://www.instagram.com" target="_blank" class="social-icon">
              <img className="size-6 transform transition duration-500 hover:scale-110" src="/src/assets/img/instagramAmarillo.png" alt="Instagram Icon" />
            </a>
          </div>

        </div>

      </div>

      <div className="text-center mt-4 text-zinc-200">
        <p className="text-[0.8em]">Editorial Universidad Don Bosco. San Salvador, El Salvador. © Derechos Reservados 2022</p>
      </div>
    </footer>
  )
}
