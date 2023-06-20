import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, SwiperOptions } from "swiper";

import Container from "../globals/Container";
import { Movie } from "../../interfaces/Home";
import { MainMovieBanner } from "../molecules";
import "../../styles/home/MainBanner.css";
import { scrollToTop } from "../../utilities/utils";
interface MainBannerProps {
  movies: Movie[];
}

const swiperOptions: SwiperOptions = {
  slidesPerView: "auto",
  spaceBetween: 35,
  speed: 1500,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    prevEl: ".Gallery-prev",
    nextEl: ".Gallery-next",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.5,
    },
    568: {
      slidesPerView: 2.5,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 44,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 61,
    },
  },
  modules: [Autoplay],
};

export const MainBanner = ({ movies }: MainBannerProps) => {
  const [indexCurrentMovie, setIndexCurrentMovie] = useState<number>(0);
  const handleClickMovie = (index: number) => {
    document.querySelector(".MainBanner-movie")?.classList.remove("fadeIn");
    setTimeout(() => {
      setIndexCurrentMovie(index);
      document.querySelector(".MainBanner-movie")?.classList.add("fadeIn");
      scrollToTop();
    }, 350);
  };

  return (
    <div className="MainBanner">
      <Container>
        <h1 className="text-[2.3rem] xl:-tracking-tighter xl:text-[3rem] text-white font-bold mb-4 xl:mb-20  xl:text-center mx-auto">
          Descubre reseñas sin spoilers y disfruta del mundo del cine y las
          series
        </h1>
        <p className="hidden xl:block text-[1.8rem] xl:text-[2rem] text-white font-medium xl:text-center">
          Movie App es una innovadora plataforma que permite a los usuarios leer
          reseñas y opiniones de películas y series sin spoilers. Proporciona
          recomendaciones detalladas y confiables, garantizando que los usuarios
          puedan sumergirse en el mundo del cine y las series sin temor a
          revelaciones no deseadas.
        </p>
        <MainMovieBanner movie={movies[indexCurrentMovie]} />
      </Container>
      <div className="MainBanner-movie-swiper">
        <Swiper {...swiperOptions}>
          {movies.map(({ title, image_secondary }, index) => (
            <SwiperSlide key={index} onClick={() => handleClickMovie(index)}>
              <div>
                <picture>
                  <img src={image_secondary.secure_url} alt={title} />
                </picture>
                <h2>{title}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
