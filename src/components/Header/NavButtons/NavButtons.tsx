import React from "react";
import {useHistory} from "react-router-dom";
import './NavButtons.scss'

const NavButtons:React.FC=()=>{

   const {push}=useHistory()
     const goToPopular=()=>{
    push('/')
  }
  const goToSearch=()=>{
    push('/search')
  }

 return(
  <div className='btns'>
     <button onClick={goToPopular} >Популярное </button>
      <button onClick={goToSearch}>Поиск </button>
  </div>
 )
}
export default NavButtons