import React from "react";
import { NavLink } from "react-router-dom";
import "./NavButtons.scss";

const NavButtons: React.FC = () => (
  <div className="btn_wrap">
    <div className="btns">
      <div className="text_btn">
        <NavLink
          style={{
            display: "block",
            color: "#264653",
            textDecoration: "none",
            height: "auto",
            width: "auto",
            paddingTop: "0.4em",
          }}
          activeStyle={{
            fontWeight: "bold",
            color: "#F4F5FF",
          }}
          to="/popular"
        >
          Popular
        </NavLink>
      </div>
      <div className="text_btn">
        <NavLink
          style={{
            display: "block",
            color: "#264653",
            textDecoration: "none",
            height: "auto",
            width: "auto",
            paddingTop: "0.4em",
          }}
          activeStyle={{
            fontWeight: "bold",
            color: "#F4F5FF",
          }}
          to="/search"
        >
          Search
        </NavLink>
      </div>
      <div className="text_btn">
        <NavLink
          style={{
            display: "block",
            color: "#264653",
            textDecoration: "none",
            height: "auto",
            width: "auto",
            paddingTop: "0.4em",
          }}
          activeStyle={{
            fontWeight: "bold",
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

export default NavButtons;
