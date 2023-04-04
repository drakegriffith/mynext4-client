import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth/AuthContext";
import { UserContext } from "../../Pages/App"; // Make sure to import these contexts from the correct location
import { ChevronDown } from "tabler-icons-react";
import SearchBar from "./SearchBar";
import Next4Logo from "./icon.png"
import "./NavBar.css"

function Next4Nav() {
  const { isAuthenticated } = useContext(AuthContext);
  const { userID, username } = useContext(UserContext);

  return (
    <nav className="navbar">
      <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
        <Link className="brand" to="/">
          MyNext4
        </Link>
        <img src={Next4Logo} style={{width: '34px', height: '36px'}} />
        </div>
        <div className="nav-links">
          <Link className="nav-link" to="/more">
            More with MyNext4
          </Link>
          <Link className="nav-link" to="/store">
            MyNext4 Store
          </Link>
          <SearchBar />
          {isAuthenticated ? (
            <div className="user-dropdown">
              <button className="nav-bar-button">
                <span>{username}</span>
                <ChevronDown size={16} />
              </button>
              {/* Dropdown menu */}
              <div className="dropdown-menu">
                {/* Add dropdown items here */}
                <Link className="dropdown-item" to="/profile">
                  Profile
                </Link>
                <Link className="dropdown-item" to="/settings">
                  Settings
                </Link>
                <Link className="dropdown-item" to="/logout">
                  Sign Out
                </Link>
              </div>
            </div>
          ) : (
            <Link className="nav-link" to="/web/auth/account">
              Sign In
            </Link>
          )}
        </div>

    </nav>
  );
}

export default Next4Nav;
