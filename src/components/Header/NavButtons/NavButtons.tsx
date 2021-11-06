import React from "react";
import { useHistory } from "react-router-dom";
import "./NavButtons.scss";

const NavButtons: React.FC = () => {
  const { push } = useHistory();
  const goToPopular = () => {
    push("/");
  };
  const goToSearch = () => {
    push("/search");
  };
  const goToFavorite = () => {
    push("/favorite");
  };

  return (
    <div className="btns">
      <button onClick={goToPopular}>Popular </button>
      <button onClick={goToSearch}>Search </button>
      <button onClick={goToFavorite}>Favorite </button>
    </div>
  );
};
export default NavButtons;
