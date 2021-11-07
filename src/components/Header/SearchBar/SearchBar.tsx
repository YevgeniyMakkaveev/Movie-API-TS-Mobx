import React from "react";
import './SearchBar.scss'

interface ISearchBar {
  onInput: (value: React.SetStateAction<string>) => void;
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
  search: string;
}

const SearchBar: React.FC<ISearchBar> = ({ search, onSearch, onInput }) => (
  <form onSubmit={(e) => onSearch(e)}>
    <input
      placeholder="Start search and press enter"
      className="search"
      type="search"
      onChange={(e) => onInput(e.target.value)}
      value={search}
    />
  </form>
);

export default SearchBar;
