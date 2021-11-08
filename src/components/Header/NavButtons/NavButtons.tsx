import React from "react";
import { NavLink } from "react-router-dom";
import "./NavButtons.scss";

const NavButtons: React.FC = () => {
  const navStyle = {
    display: "flex",
    color: "#264653",
    textDecoration: "none",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div className="btn_wrap">
      <div className="btns">
        <div className="text_btn">
          <NavLink
            style={navStyle}
            activeStyle={{
              fontWeight: "bold",
              backgroundColor: "#2a9d8f",
              borderRadius: " 0.5em",
              color: "#F4F5FF",
            }}
            to="/popular"
          >
            Popular
          </NavLink>
        </div>
        <div className="text_btn">
          <NavLink
            style={navStyle}
            activeStyle={{
              fontWeight: "bold",
              backgroundColor: "#2a9d8f",
              borderRadius: " 0.5em",
              color: "#F4F5FF",
            }}
            to="/search"
          >
            Search
          </NavLink>
        </div>
        <div className="text_btn">
          <NavLink
            style={navStyle}
            activeStyle={{
              fontWeight: "bold",
              backgroundColor: "#2a9d8f",
              borderRadius: " 0.5em",
              color: "#F4F5FF",
            }}
            to="/favorite"
          >
            Favorite
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavButtons;
