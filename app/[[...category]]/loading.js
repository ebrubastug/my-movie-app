import React from "react";

import { FeatureMovieLoading } from "@/components/featured-movie";
import { MoviesSectionLoading } from "@/components/movies-section";
import { CategoriesLoading } from "@/components/categories";

function HomeLoading() {
  return (
    <>
      <FeatureMovieLoading />
      <CategoriesLoading />
      <MoviesSectionLoading />
    </>
  );
}

export default HomeLoading;
