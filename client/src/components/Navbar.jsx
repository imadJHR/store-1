import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import img1 from "../assets/en.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "./Cart";
const Navbar = () => {
  const [open , setOpen ] = useState(false)
  return (
    <div id="navbar" className="h-[80px]">
      <div id="wrapper"className="px-[10px] py-[20px] flex justify-between items-center">
        <div id="left" className="flex items-center gap-[25px] text-xl">
          <div className="flex items-center">
            <img src={img1} alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="flex items-center">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="flex items-center">
            <Link to="/products/1">Women</Link>
          </div>
          <div className="flex items-center ">
            <Link to="/products/2">Men</Link>
          </div>
          <div className="flex items-center">
            <Link to="/products/3">Children</Link>
          </div>
        </div>
        <div id="center" className="text-2xl font-bold tracking-wider">
          <Link to="/">JHR STORE</Link>
        </div>
        <div className="flex items-center gap-[25px] text-xl" id="right">
          <div className="flex items-center">
            <Link to="/">Home</Link>
          </div>
          <div className="flex items-center">
            <Link to="/">About</Link>
          </div>
          <div className="flex items-center">
            <Link to="/">Contact</Link>
          </div>
          <div className="flex items-center">
            <Link to="/">Stores</Link>
          </div>
          <div id="icons" className="flex items-center gap-[15px] cursor-pointer">
            <SearchIcon/>
            <PersonOutlineIcon />
            <FavoriteBorderIcon className=""/>
            <div id="cart" className="relative" onClick={()=>setOpen(!open)}>
              <ShoppingCartIcon/>
              <span className="w-[20px] h-[20px] bg-red-500 rounded-full text-white absolute right-[-10px] top-[-10px] flex items-center justify-center">0</span>
            </div>
          </div>
        </div>
        
      </div>
      {open  &&<Cart/>}
    </div>
  );
};

export default Navbar;
