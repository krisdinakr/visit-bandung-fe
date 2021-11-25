import { Link } from 'react-router-dom';
import { USER_ROUTES } from 'routes';

export const Footer = () => (
  <footer className="bg-dark">
    <div className="container">
      <div className="row pt-5">
        <div className="col-lg-4 d-flex justify-content-center justify-content-md-start">
          <Link to="/" className="text-decoration-none fw-bold fs-3 text-white">
            Visit Bandung
          </Link>
        </div>

        <div className="col-lg-4">
          <h5 className="text-white ps-3 py-2">Tourist Attractions</h5>
          <div className="nav flex-column align-items-center align-items-md-start">
            <Link to="/" className="nav-link text-white text-decoration-none">
              Culture &amp; Art
            </Link>
            <Link to="/" className="nav-link text-white text-decoration-none">
              Shopping
            </Link>
            <Link to="/" className="nav-link text-white text-decoration-none">
              Nature
            </Link>
            <Link to="/" className="nav-link text-white text-decoration-none">
              Culinary
            </Link>
            <Link to="/" className="nav-link text-white text-decoration-none">
              History &amp; Heritage
            </Link>
          </div>
        </div>

        <div className="col-lg-4">
          <h5 className="text-white ps-3 py-2">Travel Information</h5>
          <div className="nav flex-column">
            <Link to="/" className="nav-link text-white text-decoration-none">
              About Bandung
            </Link>
            <Link to="/" className="nav-link text-white text-decoration-none">
              History of Bandung
            </Link>
            <Link to="/" className="nav-link text-white text-decoration-none">
              Getting to Bandung
            </Link>
          </div>
        </div>

        <div className="d-flex justify-content-between py-4 mb-4 mt-5 border-top">
          <p className="text-muted">
            Copyright © {new Date().getFullYear()} Visit Bandung. All Rights
            Reserved{' '}
          </p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <Link to={USER_ROUTES.ROOT} className="text-white fs-5">
                <i className="fab fa-facebook"></i>
              </Link>
            </li>
            <li className="ms-3">
              <Link to={USER_ROUTES.ROOT} className="text-white fs-5">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li className="ms-3">
              <Link to={USER_ROUTES.ROOT} className="text-white fs-5">
                <i className="fab fa-youtube"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);
