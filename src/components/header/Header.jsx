import React from "react";
import "./Header.css";
import Logo from "../../stock/robinhood.svg";
import SearchIcon from "@mui/icons-material/Search";
const Header = () => {
  return (
    <div className="header__wrapper">
      <div className="logoAndSearch">
        <div className="header__logo">
          <img src={Logo} alt="logo" width={25} />
        </div>
        {/* search */}
        <div className="header__search">
          <div className="header__searchContainer">
            <SearchIcon className="searchIcon" />
            <input className="searchInput" type="text" placeholder="Search" />
          </div>
        </div>
      </div>
      {/* menuItems */}
      <div className="header__menuItems">
        <a className="navlink" href="#">
          Free Stocks
        </a>
        <a className="navlink" href="#">
          Portfolio
        </a>
        <a className="navlink" href="#">
          Cash
        </a>
        <a className="navlink" href="#">
          Messages
        </a>
        <a className="navlink" href="#">
          Account
        </a>
      </div>
    </div>
  );
};

export default Header;
//
