import { NavLink } from "react-router-dom";
import {
  FaCartArrowDown,
  FaHeart,
  FaUserAlt,
  FaSignInAlt,
} from "react-icons/fa";
import logo from "../../../assets/images/logo192.png";
import { useSelector } from "react-redux";

function Header() {
  const favs = useSelector((state) => state.fav.value);
  console.log(favs);

  return (
    <div className="page-header">
      <div className="container">
        <nav className="nav-links flex justify-content-between align-items-center">
          <ul className="nav-links-list flex align-items-center">
            <li className="nav-links-item">
              <NavLink exact to="/" activeClassName="active">
                <img src={logo} alt="logo" />
              </NavLink>
            </li>
            <li className="nav-links-item">
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-links-item">
              <NavLink to="/products" activeClassName="active">
                Products
              </NavLink>
            </li>
            <li className="nav-links-item">
              <NavLink to="/about-us" activeClassName="active">
                About us
              </NavLink>
            </li>
          </ul>
          <ul className="nav-links-list flex">
            <li className="nav-links-item">
              <NavLink to="/account" activeClassName="active">
                <FaHeart />
                {!!favs.length && (
                  <span className="fav-number">{favs.length}</span>
                )}
              </NavLink>
            </li>
            <li className="nav-links-item">
              <NavLink to="/auth/login" activeClassName="active">
                <FaSignInAlt />
              </NavLink>
            </li>
            <li className="nav-links-item">
              <NavLink to="/account" activeClassName="active">
                <FaUserAlt />
              </NavLink>
            </li>
            <li className="nav-links-item">
              <NavLink to="/account" activeClassName="active">
                <FaCartArrowDown />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
