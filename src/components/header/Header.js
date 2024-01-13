import { Link } from "react-router-dom";
import "./styles.css";
import Navigation from "../navigation/Navigation";

const Header = () => {
  return (
    <div className="header">
      <div className="container header-container">
        <div className="nav-container">
          <Link to="/">
            <div className="logo"></div>
          </Link>
          <Navigation />
          <div className="contacts-block"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
