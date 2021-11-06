import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import movieStore from "../../../store/movieStore";
import MovieCard from "../../MovieCard";

const SingleMovie: React.FC = observer(() => {
  const { id } = useParams<{ id: string }>();
  const { singleMovie, fetchSingleMovie,isInFavorite,toggleAllFavorite } = movieStore;
  useEffect(() => {
    fetchSingleMovie(id);
  }, [fetchSingleMovie, id]);

  const toggleFavorite=()=>{
    toggleAllFavorite(+id, isInFavorite(+id))
  }



  return (
    <div>
      {singleMovie && <MovieCard key={singleMovie.id} isFavorite={isInFavorite(+id)} toggleFavorite={toggleFavorite} {...singleMovie} />}
    </div>
  );
});
export default SingleMovie;
