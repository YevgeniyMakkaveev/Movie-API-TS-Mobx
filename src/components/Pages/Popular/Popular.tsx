import React, {useEffect} from "react";
import { observer } from 'mobx-react';

import movieStore from '../../../store/movieStore';
import MoviePreview from "../../MoviePreview";
import './Popular.scss'

const Popular:React.FC=observer(()=>{
   const {fetchPopular, moviesPopular,getMorePopular}= movieStore
  useEffect(() => {
    fetchPopular();
  }, []);

 return( 
 <div>
 <div className="card-nest">
{moviesPopular&&moviesPopular.map((movie)=> <MoviePreview key={movie.id} {...movie} /> )}
 </div>
 <button onClick={()=>getMorePopular()}>ЕЩЕ!</button>
 </div>
 )})
export default Popular