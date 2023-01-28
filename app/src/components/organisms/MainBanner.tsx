import React, { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../globals/Container";
import "../../styles/home/MainBanner.css";
import { SwiperOptions } from "swiper";
import { Movie } from "../../interfaces/Home";
import { useFavoriteStore } from "../../stores/favoriteStore";
import { useCurrentMovie } from "../../stores/currentMovieStore";
import MainMovieBanner from "../molecules/MainMovieBanner";

interface MainBannerProps {
  movies: Movie[];
}

const swiperOptions: SwiperOptions = {
  slidesPerView: "auto",
  spaceBetween: 35,
  speed: 1200,
  loop: true,
  autoplay: {
    delay: 7000,
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
};

const MainBanner = ({ movies }: MainBannerProps) => {
  const { currentMovie, setCurrentMovie } = useCurrentMovie();
  const { favoritesMovies } = useFavoriteStore();
  const handleClickMovie = (index: Movie) => {
    setCurrentMovie(index);
  };

  return (
    <div className="MainBanner">
      <Container>
        <MainMovieBanner movie={movies[0]} />
      </Container>
      <div className="MainBanner-movie-swiper">
        <Swiper {...swiperOptions}>
          {movies.map((item, index) => (
            <SwiperSlide key={index} onClick={() => handleClickMovie(item)}>
              <div>
                <picture>
                  <img src={item.image_secondary.secure_url} alt="" />
                  <span>⭐</span>
                </picture>
                <h2>{item.title}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MainBanner;
