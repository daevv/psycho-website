import { Link } from "react-router-dom";
import "./styles.css";
import Navigation from "../navigation/Navigation";
import { useState } from "react";
import classNames from "classnames";

const Header = () => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <div className="header">
      <div className="container header-container">
        <div className="nav-container">
          <Link to="/" onClick={scrollTop}>
            <div className="logo"></div>
          </Link>
          <Navigation isOpen={isMenuOpen} closeMenu={closeMenu} />
          {/* <div className="contacts-block"></div> */}
          <button className={classNames({"show-menu-button": true, active: isMenuOpen})} onClick={handleClick}></button>
        </div>
      </div>
    </div>
  );
};

export default Header;
