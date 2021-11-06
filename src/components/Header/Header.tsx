import { observer } from "mobx-react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import movieStore from "../../store/movieStore";
import NavButtons from "./NavButtons";
import "./Header.scss";

const Header: React.FC = observer(() => {
  const { fetchSearch, resetSearchPages } = movieStore;
  const [search, setSearch] = useState("");
  const history = useHistory();

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    if (!search) return;
    e.preventDefault();
    resetSearchPages();
    fetchSearch(search);
    history.push(`/search`);
    setSearch("");
  };

  return (
    <div>
      <header>
        {" "}
        <h1 className="title">MOVIE-API</h1>{" "}
      </header>
      <form onSubmit={(e) => onSearch(e)}>
        <input
          placeholder="Start search and press enter"
          className="search"
          type="search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </form>
      <NavButtons />
    </div>
  );
});
export default Header;
