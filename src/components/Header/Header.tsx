import { observer } from "mobx-react";
import React, {useState} from "react";
import { useHistory } from 'react-router-dom';

import movieStore from "../../store/movieStore";

const Header:React.FC=observer(()=>{
 const {fetchSearch}=movieStore
 const [search, setSearch]=useState('');
 const history = useHistory();

 const onSearch =(e:React.FormEvent<HTMLFormElement>)=>{
  if(!search) return
e.preventDefault()
fetchSearch(search)
history.push(`/search`);
setSearch('')
 }

 return <div> <form onSubmit={(e)=>onSearch(e)}> 
<input type="search" onChange={(e)=>setSearch(e.target.value)} value={search}/>
<button type="submit" >Поиск</button>
</form>

 </div>
})
export default Header