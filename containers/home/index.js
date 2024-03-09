import React from "react";
import Movies from "@/mocks/movies.json";
import Genres from "@/mocks/genres.json";
import { FeaturedMovie } from "@/components/featured-movie";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section";

function HomeContainer() {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[1]} />
      <Categories categories={Genres.genres.slice(0, 5)} />
      <MoviesSection
        title="Populer Films"
        movies={Movies.results.slice(1, 5)}
      />
      <MoviesSection
        title="Populer Dizi"
        movies={Movies.results.slice(6, 10)}
      />
    </div>
  );
}

export default HomeContainer;
