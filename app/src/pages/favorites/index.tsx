import React from "react";
import { useAuthStore } from "../../stores/auth/authStore";
import { FavoriteMovieList } from "../../components/organisms/FavoriteMovieList";
import Container from "../../components/globals/Container";

export function Favorites() {
  const { favorite_movies } = useAuthStore((state) => state.profile);

  return (
    <main className="min-h-[83.5vh] bg-primary py-20">
      <Container>
        {favorite_movies.length === 0 ? (
          <div className="uppercase text-center text-3xl font-medium py-12">
            Aun no tienes ninguna pelicula marcada como favorita
          </div>
        ) : (
          <FavoriteMovieList />
        )}
      </Container>
    </main>
  );
}
