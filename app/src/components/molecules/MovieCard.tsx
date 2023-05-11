import React from "react";
import { Movie } from "../../interfaces/Home";
import { useNavigate } from "react-router-dom";
import { useAddFavoriteMovie } from "../../hooks/useAddFavoriteMovie";

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const navigate = useNavigate();
  const { updateFavoriteMovieList } = useAddFavoriteMovie(movie);
  const { description, image_primary, title, _id } = movie;

  const handleGoToMovieDetail = () => {
    // navigate(`/movie/${_id}`);
  };

  const handleRemoveMovie = async (movieId: string) => {
    const message = await updateFavoriteMovieList(movieId);
    console.log(message);
  };

  return (
    <article
      className="flex flex-col  text-white "
      onClick={handleGoToMovieDetail}
    >
      <figure className="h-[40rem] object-contain object-bottom ">
        <img
          className="w-full h-full"
          src={image_primary.secure_url}
          alt={title}
        />
      </figure>
      <div className="py-8 px-7 bg-secondary">
        <h3 className="text-[2.7rem] font-medium">{title}</h3>
        <p className="text-[1.8rem] font-light Card-p mt-4">{description}</p>
        <div className="mt-8">
          <button
            onClick={() => handleRemoveMovie(_id)}
            className="mr-5 bg-primary Button hover:bg-white hover:text-primary text-white text-2xl font-medium py-4 px-8 rounded-md"
          >
            Eliminar de mis favoritos
          </button>
        </div>
      </div>
    </article>
  );
}
