//bem nsming convenvention
//rfce for writing the entire function
//cc for component class
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
function Header() {
  return (
    <nav className="header">
      {/* logo */}
      <Link to="/">
        {/*TO make logo be clickable and point to a page*/}
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        ></img>
      </Link>

      {/*search box*/}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/*Container for links*/}
      <div className="header__nav">
        <Link to="/login" className="header__link">
          {/*href-refreshes the page,link is spup */}

          <div className="header__option">
            <span className="header__optionlink1">hey</span>
            <span className="header__optionlink2">hey</span>
          </div>
        </Link>
        {/*2 link */}
        <Link to="/login" className="header__link">
          {/*href-refreshes the page,link is spup */}

          <div className="header__option">
            <span className="header__optionlink1">return</span>
            <span className="header__optionlink2">orders</span>
          </div>
        </Link>
        {/*3 link*/}
        <Link to="/login" className="header__link">
          {/*href-refreshes the page,link is spup */}

          <div className="header__option">
            <span className="header__optionlink1">your</span>
            <span className="header__optionlink2">prime</span>
          </div>
        </Link>
      </div>
      {/*basket */}
      <Link to="/checkout" className="header__link">
        <div className="header__optionBasket">
          {/*Shopping basket icon */}
          <ShoppingBasketIcon />
          {/*Number of items in basket */}
          <span className="header__optionlink2 header__Basketcount">0</span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
