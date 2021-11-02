import React from "react";
import { useHistory } from "react-router";

import IMoviePreview from "../../types/moviePreview";
import './MoviePreview.scss';
import getColor from '../../unit/getColor'
import {_imgPatch} from "../../_const"

const MoviePreview:React.FC<IMoviePreview>=({overview,poster_path,title,vote_average,id})=>{
  const history=useHistory()
const getMovie=()=>{
  history.push(`/movie/${id}`);
}

 return (<div className="movie" onClick={getMovie} >
        <img src={`${_imgPatch}${poster_path}`} alt={`${title}`}/>
      <div className="movie-info">
      <h3>{title}</h3>
      <span className={getColor(+vote_average)}>{vote_average}</span>
       </div>
       <div className="overview">
      <h3>Overview</h3>
     {overview}
    </div>
   </div>)
}
export default MoviePreview