import DefaultLayout from "../components/layouts/DefaultLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const rows = [
  [
    { title: "Manual 1", desc: "Descripción del manual 1", img: "./src/assets/img/Algebra-lineal.png", },
    { title: "Manual 2", desc: "Descripción del manual 2", img: "./src/assets/img/Algebra-vectorial.jpg", },
    { title: "Manual 3", desc: "Descripción del manual 3", img: "./src/assets/img/Calculo-diferencial-2024.jpg", },
    { title: "Manual 4", desc: "Descripción del manual 4", img: "./src/assets/img/Algebra-vectorial.jpg", },
    { title: "Manual 5", desc: "Descripción del manual 5", img: "./src/assets/img/Algebra-lineal.png", },
  ],
   [
    { title: "Manual 6", desc: "Descripción del manual 6", img: "./src/assets/img/Algebra-lineal.png", },
    { title: "Manual 7", desc: "Descripción del manual 7", img: "./src/assets/img/Algebra-vectorial.jpg", },
    { title: "Manual 8", desc: "Descripción del manual 8", img: "./src/assets/img/Calculo-diferencial-2024.jpg", },
    { title: "Manual 9", desc: "Descripción del manual 9", img: "./src/assets/img/Algebra-vectorial.jpg", },
    { title: "Manual 10", desc: "Descripción del manual 10", img: "./src/assets/img/Algebra-lineal.png", },
  ],
];

const realImages = [
  "./src/assets/img/Algebra-lineal.png",
  "./src/assets/img/Algebra-vectorial.jpg",
  "./src/assets/img/Calculo-diferencial-2024.jpg",
  "./src/assets/img/Algebra-vectorial.jpg",
  "./src/assets/img/Algebra-lineal.png",
];

const carouselImages =
  realImages.length < 6 ? [...realImages, ...realImages] : realImages;

export default function ManualsPage() {
  return (
    <DefaultLayout>
      {/* HERO: Texto + Carrusel */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-18 mb-18 max-w-5xl mx-auto">
        {/* Texto principal */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold text-blue-800 leading-tight">
            Encuentra tus
            <br />
            manuales de
            <br />
            laboratorio
          </h2>
        </div>
        {/* Carrusel Coverflow */}
        <div className="flex-1 max-w-lg relative">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 30, // Profundidad suave
              modifier: 10.05, // Menos superposición
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Autoplay]} // <-- ¡Incluye Autoplay aquí!
            autoplay={{
              delay: 2500, // 2.5 segundos entre slides (ajusta si quieres)
              disableOnInteraction: false, // el carrusel sigue después de interactuar
            }}
            className="superpuestoSwiper"
          >
            {carouselImages.map((src, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={src}
                  alt={`Libro ${idx + 1}`}
                  className="rounded-lg shadow-lg object-cover w-42 h-56 transition-all duration-300"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

         <h1 className="text-3xl font-bold text-center text-blue-800 mb-10 mt-8">
        Manuales
      </h1>

      <div className="flex flex-col items-center gap-12">
        {rows.map((manuals, rowIdx) => (
          <div key={rowIdx} className="w-full max-w-5xl">
            <Swiper
              slidesPerView={3}
              spaceBetween={40}
              navigation={true}
              modules={[Navigation]}
              className="manualesSwiper"
            >
              {manuals.map((manual, idx) => (
                <SwiperSlide key={idx}>
                  <div className="flex flex-col items-center bg-white rounded-lg p-4 shadow-md">
                    <img
                      src={manual.img}
                      alt={manual.title}
                      className="w-48 h-64 object-cover mb-4 rounded-md shadow"
                    />
                    <div className="w-full px-2">
                      <h2 className="font-bold text-blue-900 mb-2 text-lg">{manual.title}</h2>
                      <p className="text-sm text-gray-700 mb-4">{manual.desc}</p>
                      <button className="bg-yellow-300 hover:bg-yellow-400 text-blue-900 font-semibold py-2 px-5 rounded-full transition">
                        Ver detalle
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </DefaultLayout>
  );
}
