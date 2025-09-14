import React from "react";
import "../css/Header.css";
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import Badge from "@mui/material/Badge";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Drawer from "@mui/material/Drawer";
import { setDrawer } from "../redux/slices/basketSlice";
import { useDispatch } from "react-redux";

function Header() {

  const dispatch = useDispatch();
  
  const { isDark, toggleTheme } = useTheme();

  const navigateToHome = useNavigate();

  const {products} = useSelector((store) => store.basket)

  return (
    <div className="header-container">
      <div className="header-content">
        <div className="flex-row" onClick={() => navigateToHome("/")}>
          <img className="logo" src="/src/assets/logo.png" alt="Logo" />
          <p className="logo-text">AHY</p>
        </div>

        <div className="flex-row">
          <input className="search-input" type="text" placeholder="Search..." />
          <div>
            {isDark ? (
              <FaMoon className="icon" onClick={toggleTheme} />
            ) : (
              <CiLight className="icon" onClick={toggleTheme} />
            )}
            <Badge onClick={() => dispatch(setDrawer())} badgeContent={products.length} color="error">
              <CiShoppingBasket
                style={{ marginRight: "6px" }}
                className="icon"
              />
            </Badge>
          </div>



        </div>
      </div>
    </div>
  );
}

export default Header;
