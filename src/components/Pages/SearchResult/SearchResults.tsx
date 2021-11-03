import React from "react";
import { observer } from 'mobx-react';

import MoviePreview from "../../MoviePreview";
import movieStore from '../../../store/movieStore';
import './SearchResults.scss'

const SearchRes:React.FC=observer(()=>{
const {moviesSearch, getMoreSearch }=movieStore
 return <div>
<div className="card-nest">
{moviesSearch&&moviesSearch.map((movie)=> <MoviePreview key={movie.id} {...movie} /> )}
</div>
 {moviesSearch.length>1&&<button className='more-btn' onClick={()=>getMoreSearch()}>More</button>}
 </div>
})
export default SearchRes