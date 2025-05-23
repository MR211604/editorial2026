import DefaultLayout from "../components/layouts/DefaultLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import Button from "../components/ui/Button";


const rows = [
  [
    { title: "Escolar 1", desc: "Descripción del Escolar 1", img: "./src/assets/img/Teologia en Abya Yala.png", },
    { title: "Escolar 2", desc: "Descripción del Escolar 2", img: "./src/assets/img/Testigos de la fe.png", },
    { title: "Escolar 3", desc: "Descripción del Escolar 3", img: "./src/assets/img/Sendas-feministas.jpg", },
    { title: "Escolar 4", desc: "Descripción del Escolar 4", img: "./src/assets/img/Poemas.png", },
    { title: "Escolar 5", desc: "Descripción del Escolar 5", img: "./src/assets/img/Remembranzas-de-mi-tierra.jpg", },
  ],
   [
    { title: "Escolar 6", desc: "Descripción del Escolar 6", img: "./src/assets/img/Teologia en Abya Yala.png", },
    { title: "Escolar 7", desc: "Descripción del Escolar 7", img: "./src/assets/img/Testigos de la fe.png", },
    { title: "Escolar 8", desc: "Descripción del Escolar 8", img: "./src/assets/img/Sendas-feministas.jpg", },
    { title: "Escolar 9", desc: "Descripción del Escolar 9", img: "./src/assets/img/Poemas.png", },
    { title: "Escolar 10", desc: "Descripción del Escolar 10", img: "./src/assets/img/Remembranzas-de-mi-tierra.jpg", },
  ],
];

const realImages = [
  "./src/assets/img/Teologia en Abya Yala.png",
  "./src/assets/img/Testigos de la fe.png",
  "./src/assets/img/Sendas-feministas.jpg",
  "./src/assets/img/Poemas.png",
  "./src/assets/img/Remembranzas-de-mi-tierra.jpg",
];

const carouselImages =
  realImages.length < 6 ? [...realImages, ...realImages] : realImages;

function SchoolTextsPage() {
  return (
    <DefaultLayout>
      
      {/* HERO: Texto + Carrusel */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-18 mb-18 max-w-5xl mx-auto">
        {/* Texto principal */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold text-blue-800 leading-tight">
            Lo mejor para
            <br />
            tu formación
            <br />
            académica
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
              depth: 30, 
              modifier: 10.05, 
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Autoplay]} 
            autoplay={{
              delay: 2500, 
              disableOnInteraction: false, 
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
        Textos Escolares
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
                      <Button className={"py-2 px-5 rounded-full transition text-md text-blue-900 font-semibold"}>
                        Ver detalle
                      </Button>
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

export default SchoolTextsPage;
