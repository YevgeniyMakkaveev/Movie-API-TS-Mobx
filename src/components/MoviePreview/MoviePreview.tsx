import React from "react";
import { useHistory } from "react-router";

import IMoviePreview from "../../types/moviePreview";
import "./MoviePreview.scss";
import getColor from "../../unit/getColor";
import { _imgPatch } from "../../_const";

interface IMoviePreviewCard extends IMoviePreview{
  toggleFavorite: (e:React.MouseEvent<HTMLSpanElement, MouseEvent>,id: number, favorite:boolean) => void;
}

const MoviePreview: React.FC<IMoviePreviewCard> = ({
  overview,
  poster_path,
  title,
  vote_average,
  id,
  isFavorite,
  toggleFavorite
}) => {
  const history = useHistory();
  const getMovie = () => {
    history.push(`/movie/${id}`);
  };

  return (
    <div className="movie" onClick={getMovie}>
      <div> 
        <span onClick={(e)=>toggleFavorite(e,id,!isFavorite)} className={isFavorite?'star-marked':'star'}>☆</span>
      </div>
      <img src={`${_imgPatch}${poster_path}`} alt={`${title}`} />
      
      <div className="movie-info">
        <h3>{title}</h3>
        <span className={getColor(+vote_average)}>{vote_average}</span>
      </div>
      <div className="overview">
        <h3>Overview</h3>
        {overview}
      </div>
    </div>
  );
};
export default MoviePreview;
