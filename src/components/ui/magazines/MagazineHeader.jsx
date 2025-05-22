
export default function MagazineHeader() {
  return (
    <div className="w-screen min-h-[80vh] sm:min-h-[50vh] relative m-0 p-0 left-1/2 right-1/2 ml-[calc(-50vw+0px)] mr-[calc(-50vw+0px)]">
      <img className="w-full h-full object-cover object-center block" src="/src/assets/img/book-banner.jpg" alt="Revista teoría y práxis" />
      <div className="absolute left-1/2 -translate-x-1/2 text-center w-full text-white z-10 top-[clamp(50px,12.7vh,136px)] [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)] bottom-1/2 -translate-y-2/7 md:bottom-1/3 md:-translate-y-1/4 lg:-translate-y-1/12 xl:translate-y-1/6">
        <span className="text-2xl md:text-4xl lg:text-5xl font-medium block leading-1.5">Revista</span>
        <span className="text-4xl md:text-6xl lg:text-8xl font-bold block leading-[1.3]">Teoría y praxis</span>
      </div>
    </div>

  )
}
