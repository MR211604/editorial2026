import { getImagePath } from "../../../helpers/imagePath";

export default function MagazineHeader({ headerTitle }) {
  return (
    <div className="w-screen relative left-1/2 right-1/2 ml-[calc(-50vw+0px)] mr-[calc(-50vw+0px)]">
      <img
        className="w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] object-cover block"
        src={getImagePath("img/book-banner.jpg")}
        alt="Revista teoría y práxis"
      />
      {/* Texto  */}
      <div
        className="absolute left-1/2 -translate-x-1/2 text-center w-full text-white  z-10 top-10 sm:top-[clamp(50px,12.7vh,110px)] [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]  -bottom-12 sm:-translate-y-0.5 sm:bottom-1/5 md:bottom-1/3 lg:-translate-y-1/12 xl:translate-y-1/6 
      "
      >
        <span className="text-2xl md:text-4xl lg:text-5xl font-medium block leading-1.5">
          Revista
        </span>
        <span className="text-4xl md:text-6xl lg:text-8xl font-bold block leading-[1.3]">
          {headerTitle}
        </span>
      </div>
    </div>
  );
}
