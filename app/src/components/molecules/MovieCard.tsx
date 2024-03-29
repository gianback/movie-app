import React from "react";
import { Movie } from "../../interfaces/Home";
import { useNavigate } from "react-router-dom";
import { Button } from "../atoms";
import { useFavoriteMovie } from "../../hooks/useFavoriteMovie";
import { Toaster, toast } from "sonner";

interface MovieCardProps {
  movie: Movie;
  updateMovies: () => void;
}

export function MovieCard({ movie, updateMovies }: MovieCardProps) {
  const navigate = useNavigate();
  const { updateFavoriteMovieList } = useFavoriteMovie();
  const { description, image_primary, title, _id } = movie;

  const handleGoToMovieDetail = () => {
    navigate(`/movies/${_id}`);
  };

  const handleRemoveMovie = async (movieId: string) => {
    await updateFavoriteMovieList(movieId);
    toast.error("Película eliminada de mis favoritos");
    updateMovies();
  };

  return (
    <>
      <article className="flex flex-col  text-white ">
        <figure className="h-[20rem] xl:h-[40rem] object-contain object-bottom ">
          <img
            className="w-full h-full"
            src={image_primary.secure_url}
            alt={title}
          />
        </figure>
        <div className="py-4 px-3 xl:py-8 xl:px-7 bg-secondary">
          <h3 className="text-[2rem] xl:text-[2.7rem] font-medium">{title}</h3>
          <p className="text-[1.2rem] xl:text-[1.8rem] font-light Card-p mt-4">
            {description}
          </p>
          <div className="mt-16 flex gap-4">
            <Button type="primary" onClick={() => handleRemoveMovie(_id)}>
              Eliminar de mis favoritos
            </Button>
            <Button type="primary" onClick={handleGoToMovieDetail}>
              Ver mas
            </Button>
          </div>
        </div>
      </article>
    </>
  );
}
