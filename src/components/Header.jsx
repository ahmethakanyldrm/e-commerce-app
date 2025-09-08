import React from 'react'
import '../css/Header.css'
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";


function Header() {
const [theme, setTheme] = React.useState(false)

  const changeTheme = () => {
    const root = document.getElementById("root");
    setTheme(!theme)
    if(theme){
      root.style.backgroundColor = "black"
      root.style.color = "white"
    } else {
      root.style.backgroundColor = "white"
      root.style.color = "black"
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="flex-row">
        <img src="./src/assets/logo.png" className="logo" />
        <p className="logo-text">AHY Shop</p>
      </div>

      <div>
        <input type="text" className="input-search" placeholder="Search..." />
        <div className='flex-row'>
        {
          theme ? <FaMoon className='icon' onClick={changeTheme}/> : <CiLight className='icon' onClick={changeTheme}/>
        }
         
          <CiShoppingBasket className='icon'/>
          {/* <FaMoon className='icon'/> */}
        </div>
      </div>
    </div>
  );
}

export default Header