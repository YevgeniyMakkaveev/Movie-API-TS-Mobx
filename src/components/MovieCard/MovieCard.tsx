import React from "react";

import IMovieCard from "../../types/movieCard";
import getColor from "../../unit/getColor";
import { _imgPatch } from "../../_const";
import "./MovieCard.scss";

interface IRenderMovieCard extends IMovieCard {
  toggleFavorite: (favorite: boolean) => void;
  isFavorite: boolean;
}

const MovieCard: React.FC<IRenderMovieCard> = ({
  id,
  overview,
  poster_path,
  release_date,
  title,
  vote_average,
  tagline,
  genres,
  isFavorite,
  toggleFavorite,
}) => {
  return (
    <div className="wrapper">
      <div className="preview">
        <div className="head">
          <img src={`${_imgPatch}${poster_path}`} alt={title} />
          <div className="main-info">
            <div>
              <h2 className="movie-title">{title}</h2>
            </div>
            <div className="tagline">{tagline} </div>
            <div className="date">Release date: {release_date}</div>
            <div className="genres">
              Genres:
              {genres && genres.map((genre) => <span>{genre.name} </span>)}
            </div>
            <div className={getColor(+vote_average)}> Score {vote_average}</div>
          </div>
        </div>
        <div className="body">{overview}</div>
        <button className="btn-fav" onClick={() => toggleFavorite(!isFavorite)}>
          {isFavorite ? "Remove from ☆" : "Add to ☆ "}
        </button>
      </div>
    </div>
  );
};
export default MovieCard;
