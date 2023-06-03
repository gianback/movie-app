import React, { FormEvent, useEffect, useState } from "react";
import { fetchMovieById } from "../../services/fetch.movies.service";
import { useLoaderData } from "react-router-dom";
import { Comment, Movie } from "../../interfaces/Home";
import { Container } from "../../components/globals";
import { Button } from "../../components/atoms";
import { loadComments, saveComment } from "../../sockets/movie.socket";
import { useAuthStore } from "../../stores/auth/authStore";
import { verifyFavoriteMovie } from "../../utilities/utils";
import { useAddFavoriteMovie } from "../../hooks/useAddFavoriteMovie";

interface MovieDetailsLoader {
  movie: Movie;
}

export function MovieDetails() {
  const { movie } = useLoaderData() as MovieDetailsLoader;
  const [qualification, setQualification] = useState("");
  const [isFavoriteMovie, setisFavoriteMovie] = useState(false);
  const { updateFavoriteMovieList } = useAddFavoriteMovie();
  const [comments, setComments] = useState<Comment[]>([]);
  //store
  const { uid } = useAuthStore((state) => state.profile);
  const token = useAuthStore((state) => state.token);
  const {
    description,
    image_primary,
    image_secondary,
    title,
    _id,
    comments: commentList,
  } = movie;
  //socket
  const handleAddFavoriteMovie = async () => {
    const { action } = await updateFavoriteMovieList(_id);
    if (action === "added") {
      setisFavoriteMovie(true);
    } else {
      setisFavoriteMovie(false);
    }
  };
  const handleSubmitComment = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const payload = {
      content: formData.get("comment"),
      qualification,
      movieId: _id,
    };
    saveComment({ payload, token });

    loadComments(setComments);
  };

  useEffect(() => {
    verifyFavoriteMovie(uid, setisFavoriteMovie, _id);
  }, []);

  useEffect(() => {
    setComments(commentList);
  }, []);

  return (
    <main className="min-h-screen bg-primary py-[10rem]">
      <Container>
        <div className="grid grid-cols-2">
          <div className="relative z-[1]">
            <figure className="flex relative z-[1] justify-center  w-[40rem] mx-auto">
              <img src={image_primary.secure_url} className="w-full" />
            </figure>
            <figure className="absolute z-[2] left-0 top-2/4 translate-y-[-50%]">
              <img
                src={image_secondary.secure_url}
                alt={`${movie.title} Image`}
              />
            </figure>
          </div>
          <div className="text-white flex-col gap-8 flex justify-center">
            <h2 className="text-5xl font-medium">{title}</h2>
            <p className="text-3xl leading-[2.8rem] font-medium">
              {description}
            </p>
            <div className="flex gap-16">
              <Button url="/" type="secondary">
                Ver mas peliculas
              </Button>
              <Button type="secondary" onClick={handleAddFavoriteMovie}>
                {isFavoriteMovie
                  ? "Eliminar de mis favoritos"
                  : "Agregar a mis favoritos"}
              </Button>
            </div>
          </div>
        </div>
        <section className="mt-20">
          <h2 className="text-6xl text-white font-bold">Comentarios</h2>
          {comments.length > 0 ? (
            comments.map(({ _id, content, date, qualification }) => (
              <div key={_id}>
                <p className="text-white text-3xl ">{content}</p>
                {/* <p className="text-white text-3xl ">{date.toString()}</p> */}
                {/* <p className="text-white text-3xl ">{qualification}</p> */}
              </div>
            ))
          ) : (
            <p className="uppercase text-5xl text-white text-center mt-20">
              Escribe el primer comentario
            </p>
          )}
          <form onSubmit={handleSubmitComment} className="mt-8">
            <textarea
              className="text-2xl py-6 px-4 rounded-md"
              name="comment"
              id="comment"
              placeholder="Tu comentario"
            />
            <button>Publicar</button>

            <label
              htmlFor="minmax-range"
              className="block mb-4  text-3xl font-medium text-white"
            >
              Selecciona tu calificacion del 1 al 5
            </label>
            <input
              id="minmax-range"
              type="range"
              min="0"
              max="5"
              onChange={(e) => setQualification(e.currentTarget.value)}
              value={qualification}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
          </form>
        </section>
      </Container>
    </main>
  );
}

export const loaderDetailsMovies = async ({ params }) => {
  const movie = await fetchMovieById(params.id);
  return { movie };
};
