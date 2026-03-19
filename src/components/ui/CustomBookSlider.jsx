import { getImagePath } from "../../helpers/imagePath";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const realImages = [
  "img/Teologia en Abya Yala.png",
  "img/Testigos de la fe.png",
  "img/Sendas-feministas.jpg",
  "img/Poemas.png",
  "img/Remembranzas-de-mi-tierra.jpg",
];

const carouselImages =
  realImages.length < 6 ? [...realImages, ...realImages] : realImages;

export default function CustomBookSlider() {
  return (
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
              src={getImagePath(src)}
              alt={`Libro ${idx + 1}`}
              className="rounded-lg shadow-lg object-cover w-42 h-56 transition-all duration-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
