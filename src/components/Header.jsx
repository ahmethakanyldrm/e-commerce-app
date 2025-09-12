import React from "react";
import "../css/Header.css";
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import Badge from "@mui/material/Badge";
import { useNavigate } from "react-router-dom";

function Header() {
  const { isDark, toggleTheme } = useTheme();

  const navigateToHome = useNavigate();

  return (
    <div className="header-container">
      <div className="header-content">
        <div className="flex-row" onClick={()=> navigateToHome("/")} >
          <img className="logo" src="/src/assets/logo.png" alt="Logo" />
          <p className="logo-text">AHY</p>
        </div>

        <div className="flex-row">
          <input
            className="search-input"
            type="text"
            placeholder="Search..."
          />
          <div>
            {isDark ? (
              <FaMoon className="icon" onClick={toggleTheme} />
            ) : (
              <CiLight className="icon" onClick={toggleTheme} />
            )}
            <CiShoppingBasket style={{ marginRight: "6px" }} className="icon" />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
