import React from "react";
import { observer } from "mobx-react";

import MoviePreview from "../../MoviePreview";
import movieStore from "../../../store/movieStore";
import "./SearchResults.scss";

const SearchRes: React.FC = observer(() => {
  const { moviesSearch, getMoreSearch, toggleAllFavorite } = movieStore;
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
        {moviesSearch &&
          moviesSearch.map((movie) => (
            <MoviePreview key={movie.id} toggleFavorite={toggleFavorite} {...movie} />
          ))}
      </div>
      {moviesSearch.length > 1 && (
        <button className="more-btn" onClick={() => getMoreSearch()}>
          More
        </button>
      )}
    </div>
  );
});
export default SearchRes;
