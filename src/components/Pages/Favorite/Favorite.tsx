import React from "react";
import { observer } from "mobx-react";

import MoviePreview from "../../MoviePreview";
import movieStore from "../../../store/movieStore";
import "./Favorite.scss";

const Favorite: React.FC = observer(() => {
  const { favorite, toggleAllFavorite } = movieStore;
const toggleFavorite = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    id: number,
    favorite: boolean
  ) => {
    e.stopPropagation();
     toggleAllFavorite(id,favorite);
  };

  return (
    <div>
      <div className="card-nest">
        {favorite &&
          favorite.map((movie) => (
            <MoviePreview key={movie.id} toggleFavorite={toggleFavorite} {...movie} />
          ))}
      </div>
    </div>
  );
});
export default Favorite;
