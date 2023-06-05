import React, { useContext, useEffect, useMemo, useRef } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, SwiperOptions } from "swiper";

import Container from "../globals/Container";
import { Movie } from "../../interfaces/Home";
import { MainMovieBanner } from "../molecules";
import "../../styles/home/MainBanner.css";
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
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 44,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1700: {
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
    }, 300);
  };

  return (
    <div className="MainBanner">
      <Container>
        <h1 className="text-[3rem] text-white font-bold mb-24 max-w-[50ch] text-center mx-auto">
          ¡Movie App, donde puedes ver las reviews de películas y series de
          nuestros usuarios SIN SPOILERS!
        </h1>
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
