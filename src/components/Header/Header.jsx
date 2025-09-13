import "./Header.css";
import Netflix from "../../assets/images/netflix.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <header className="header_outer_container">
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-dark">
          <a className="navbar-brand" href="#">
            <img src={Netflix} alt="Netflix" width="100" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            ☰
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  TV Shows
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Latest
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  My List
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Browse by Languages
                </a>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto d-flex flex-row align-items-center">
              <li className="nav-item me-3">
                <SearchIcon />
              </li>
              <li className="nav-item me-3">
                <NotificationsNoneIcon />
              </li>
              <li className="nav-item me-3">
                <AccountBoxIcon />
              </li>
              <li className="nav-item">
                <ArrowDropDownIcon />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
