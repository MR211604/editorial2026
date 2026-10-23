import { getPublishingImagePath } from "../../helpers/imagePath";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

export default function CustomBookSlider({ books = [], isLoading = false }) {
  if (isLoading) {
    return (
      <div
        className="flex-1 w-full max-w-lg min-h-56 flex items-center justify-center"
        aria-label="Cargando libros recientes"
      >
        <div className="w-10 h-10 border-4 border-blue-100 border-t-blue-700 rounded-full animate-spin" />
      </div>
    );
  }

  if (books.length === 0) return null;

  const loopEnabled = books.length >= 4;
  const loopAdditionalSlides = Math.min(2, Math.max(0, books.length - 4));

  return (
    <div className="flex-1 w-full max-w-lg relative">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        slidesPerGroup={1}
        loop={loopEnabled}
        loopAdditionalSlides={loopAdditionalSlides}
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
        {books.map((book) => (
          <SwiperSlide key={book.idPublishing}>
            {book.cover ? (
              <img
                src={getPublishingImagePath(book)}
                alt={`Portada de ${book.title}`}
                className="rounded-lg shadow-lg object-cover w-42 h-56 sm:w-44 sm:h-60 transition-all duration-300"
              />
            ) : (
              <div
                role="img"
                aria-label={`Portada no disponible para ${book.title}`}
                className="rounded-lg shadow-lg bg-gradient-to-br from-blue-400 to-blue-700 w-42 h-56 sm:w-44 sm:h-60"
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
