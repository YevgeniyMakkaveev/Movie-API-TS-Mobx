import React, { useState } from "react";
import { observer } from "mobx-react";
import { useHistory } from "react-router-dom";

import movieStore from "../../store/movieStore";
import NavButtons from "./NavButtons";
import SearchBar from "./SearchBar";
import "./Header.scss";


const Header: React.FC = observer(() => {
  const { fetchSearch, resetSearch } = movieStore;
  const [search, setSearch] = useState("");
  const history = useHistory();

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    if (!search) return;
    e.preventDefault();
    resetSearch();
    fetchSearch(search);
    history.push(`/search`);
    setSearch("");
  };

  return (
    <div className='head-app'>
      <header>
        <h1 className="title">MOVIE-API</h1>
        <div><a
        rel="noreferrer"
        className="head_link"
        target="_blank"
        href="https://github.com/YevgeniyMakkaveev"
      >
        made by Yevgeny Makkaveev
      </a></div>
      </header>
     <SearchBar search={search} onInput={setSearch} onSearch={onSearch} />
      <NavButtons />
    </div>
  );
});
export default Header;
