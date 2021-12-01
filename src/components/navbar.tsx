import { Link } from 'react-router-dom';
import { USER_ROUTES } from '../routes';

export const Navbar = () => (
  <nav className="navbar navbar-expand-xl navbar-light sticky-top shadow">
    <div className="container">
      <Link to={USER_ROUTES.ROOT} className="navbar-brand fw-bold fs-3 pb-xl-3">
        Visit Bandung
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to=""
              className="navbar__link"
              id="dropdownMenuOffset"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-bs-offset="30,10"
            >
              Tourist Attractions
            </Link>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
              <span className="navbar__dropdown-text">Tourist Attractions</span>
              <li>
                <Link to={USER_ROUTES.CULTURE_ART} className="dropdown-item">
                  Culture &amp; Art
                </Link>
              </li>
              <li>
                <Link to={USER_ROUTES.SHOPPING} className="dropdown-item">
                  Shopping
                </Link>
              </li>
              <li>
                <Link to={USER_ROUTES.NATURE} className="dropdown-item">
                  Nature
                </Link>
              </li>
              <li>
                <Link to={USER_ROUTES.CULINARY} className="dropdown-item">
                  Culinary
                </Link>
              </li>
              <li>
                <Link
                  to={USER_ROUTES.HISTORY_HERITAGE}
                  className="dropdown-item"
                >
                  History &amp; Heritage
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link
              to=""
              className="navbar__link"
              id="dropdownMenuOffset"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-bs-offset="30,10"
            >
              Travel Information
            </Link>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
              <span className="navbar__dropdown-text">Travel Information</span>
              <li>
                <Link to={USER_ROUTES.ABOUT_BANDUNG} className="dropdown-item">
                  About Bandung
                </Link>
              </li>
              <li>
                <Link
                  to={USER_ROUTES.HISTORY_BANDUNG}
                  className="dropdown-item"
                >
                  History of Bandung
                </Link>
              </li>
              <li>
                <Link
                  to={USER_ROUTES.GETTING_TO_BANDUNG}
                  className="dropdown-item"
                >
                  Getting to Bandung
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
