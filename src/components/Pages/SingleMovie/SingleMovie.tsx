import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import movieStore from "../../../store/movieStore";
import MovieCard from "../../MovieCard";

const SingleMovie:React.FC = observer(() => {
  const { id } = useParams<{ id: string }>();
const {singleMovie,fetchSingleMovie}=movieStore
    useEffect(() => {
    fetchSingleMovie(id);
  }, [fetchSingleMovie,id]);
  
  return (
    <div>
      {singleMovie&&<MovieCard key={singleMovie.id} {...singleMovie} />}
    </div>
  );
});
export default SingleMovie;
