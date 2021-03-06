import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header"> 
      <Link to="/">
        <img
          className="header__logo"
          src="https://img.freepik.com/free-vector/shopping-cart-icon-shopping-basket-design-vector-illustration_460848-5388.jpg"
          // src="https://pkart.in/wp-content/uploads/2021/07/FINAL-1-1.png"
          width="100"
          height="200"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <Link to="/"><SearchIcon className="header__searchIcon" /></Link>
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">
              {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
<Link to='/orders'>
        <div className="header__option">
          <span className="header__optionLineOne">Order</span>
          <span className="header__optionLineTwo">history</span>
        </div>
</Link>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__basketcount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Header;
