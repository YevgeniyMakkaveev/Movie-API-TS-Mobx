import React, { useEffect } from "react";
import { observer } from "mobx-react";

import movieStore from "../../../store/movieStore";
import MoviePreview from "../../MoviePreview";
import "./Popular.scss";

const Popular: React.FC = observer(() => {
  const { fetchPopular, moviesPopular, getMorePopular, popularToggleFavorite } =
    movieStore;
  useEffect(() => {
    fetchPopular();
  }, [fetchPopular]);

  const toggleFavorite = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    id: number,
    favorite: boolean
  ) => {
    e.stopPropagation();
    popularToggleFavorite(id, favorite);
  };
  return (
    <div>
      <div className="card-nest">
        {moviesPopular &&
          moviesPopular.map((movie) => (
            <MoviePreview
              key={movie.id}
              toggleFavorite={toggleFavorite}
              {...movie}
            />
          ))}
      </div>
      <button className="more-btn" onClick={() => getMorePopular()}>
        More
      </button>
    </div>
  );
});
export default Popular;
