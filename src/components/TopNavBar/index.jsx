import React from "react";
import StyledTopNavbar from "./style";
import Pegotec from "../../assets/pegotec-logo.png";

const TopNavBar = ({ currentPage, handleChangePage }) => {
  return (
    <StyledTopNavbar>
      <div className="row">
        <img className="logo-icon" src={Pegotec} alt="pegotec" />
      </div>
      <div className="row">
        <button
          onClick={() => handleChangePage()}
          type="button"
          className="btn btn-primary btn-lg"
        >
          {currentPage === "Login" ? "Registration" : "Login"}
        </button>
      </div>
    </StyledTopNavbar>
  );
};

export default TopNavBar;
