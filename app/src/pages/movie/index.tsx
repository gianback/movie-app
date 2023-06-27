import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Toaster, toast } from "sonner";

import { Container } from "../../components/globals";
import { Button } from "../../components/atoms";
import { CommentList, FormComment } from "../../components/molecules";

import { useFavoriteMovie } from "../../hooks/useFavoriteMovie";

import { Comment, Movie } from "../../interfaces/Home";

import { fetchMovieById } from "../../services/fetch.movies.service";
import { useAuthStore } from "../../stores/auth/authStore";

interface MovieDetailsLoader {
  movie: Movie;
}

export default function MovieDetails() {
  const { movie } = useLoaderData() as MovieDetailsLoader;
  const { verifyFavoriteMovie, isLoading, updateFavoriteMovieList } =
    useFavoriteMovie();
  const [isFavoriteMovie, setisFavoriteMovie] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  //store
  const { uid } = useAuthStore((state) => state.profile);
  const {
    description,
    image_primary,
    title,
    _id,
    comments: commentList,
  } = movie;

  //socket
  const handleAddFavoriteMovie = async () => {
    const { action } = await updateFavoriteMovieList(_id);
    if (action === "added") {
      setisFavoriteMovie("Eliminar de mis favoritos");
      toast.success("Película agregada a mis favoritos");
    } else {
      setisFavoriteMovie("Agregar a mis favoritos");
      toast.error("Película eliminada de mis favoritos");
    }
  };

  useEffect(() => {
    setComments(commentList);
    verifyFavoriteMovie(uid, setisFavoriteMovie, _id);
  }, []);

  return (
    <main className="min-h-screen bg-primary py-[4rem] xlpy-[10rem]">
      <Container>
        <section className="flex flex-col xl:flex-row gap-12 xl:gap-32">
          <div className="relative z-[1]">
            <figure className="flex relative z-[1] justify-center w-[20rem] max-w-100% xl:w-[40rem] mx-auto">
              <img src={image_primary.secure_url} className="w-full" />
            </figure>
          </div>
          <div className="text-white flex-col gap-8 flex justify-center">
            <h2 className="text-4xl xl:text-5xl font-medium">{title}</h2>
            <p className="text-[1.4rem] xl:text-3xl leading-[1.8rem] xl:leading-[2.8rem] font-medium">
              {description}
            </p>
            <div className="flex gap-4 xl:gap-16 mt-[3rem]">
              <Button url="/" type="secondary">
                Ver mas peliculas
              </Button>
              {isLoading ? (
                <div className="animate-pulse space-x-4 max-w-[70%] w-80  inline-block">
                  <div className="py-1">
                    <div className=" h-20 bg-slate-200 rounded"></div>
                  </div>
                </div>
              ) : (
                <Button type="secondary" onClick={handleAddFavoriteMovie}>
                  {isFavoriteMovie}
                </Button>
              )}
            </div>
          </div>
        </section>
        <section className="mt-20">
          <h2 className="text-4xl xl:text-6xl text-white font-bold">
            Comentarios:
          </h2>
          <CommentList comments={comments} />
          <FormComment _id={_id} setComments={setComments} />
        </section>
      </Container>
      <Toaster position="bottom-right" richColors />
    </main>
  );
}

export const loaderDetailsMovies = async ({ params }) => {
  const movie = await fetchMovieById(params.id);
  return { movie };
};
