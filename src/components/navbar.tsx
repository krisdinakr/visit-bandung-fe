import { Link } from "react-router-dom";
import { USER_ROUTES } from "../routes";

export const Navbar = () => (
<nav className="navbar navbar-expand-lg navbar-light">
  <div className="container">
    <Link to={USER_ROUTES.ROOT} className="navbar-brand fw-bold">Visit Bandung</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <Link to="" className="nav-link" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tourist Attractions</Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link to={USER_ROUTES.CULTURE_ART} className="dropdown-item">Culture &amp; Art</Link></li>
            <li><Link to={USER_ROUTES.SHOPPING} className="dropdown-item">Shopping</Link></li>
            <li><Link to={USER_ROUTES.NATURE} className="dropdown-item">Nature</Link></li>
            <li><Link to={USER_ROUTES.CULINARY} className="dropdown-item">Culinary</Link></li>
            <li><Link to={USER_ROUTES.HISTORY_HERITAGE} className="dropdown-item">History &amp; Heritage</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link to="" className="nav-link" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Travel Information</Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link to={USER_ROUTES.ABOUT_BANDUNG} className="dropdown-item">About Bandung</Link></li>
            <li><Link to={USER_ROUTES.HISTORY_BANDUNG} className="dropdown-item">History of Bandung</Link></li>
            <li><Link to={USER_ROUTES.GETTING_TO_BANDUNG} className="dropdown-item">Getting to Bandung</Link></li>
          </ul>
        </li>
      </ul>
      <button type="button" className="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="50,10">
      Offset
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
      <li><a className="dropdown-item" href="/">Action</a></li>
      <li><a className="dropdown-item" href="/">Another action</a></li>
      <li><a className="dropdown-item" href="/">Something else here</a></li>
    </ul>
    </div>
  </div>
</nav>
)