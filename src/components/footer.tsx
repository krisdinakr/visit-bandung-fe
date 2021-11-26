import { Link } from 'react-router-dom';
import { USER_ROUTES } from 'routes';

export const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row pt-5">
        <div className="col-lg-4 pb-3 pt-1">
          <Link to="/" className="footer__brand">
            Visit Bandung
          </Link>
        </div>

        <div className="col-6 col-lg-4">
          <h5 className="footer__section">Tourist Attractions</h5>
          <div className="nav flex-column">
            <Link to="/" className="footer__link">
              Culture &amp; Art
            </Link>
            <Link to="/" className="footer__link">
              Shopping
            </Link>
            <Link to="/" className="footer__link">
              Nature
            </Link>
            <Link to="/" className="footer__link">
              Culinary
            </Link>
            <Link to="/" className="footer__link">
              History &amp; Heritage
            </Link>
          </div>
        </div>

        <div className="col-6 col-lg-4">
          <h5 className="footer__section">Travel Information</h5>
          <div className="nav flex-column">
            <Link to="/" className="footer__link">
              About Bandung
            </Link>
            <Link to="/" className="footer__link">
              History of Bandung
            </Link>
            <Link to="/" className="footer__link">
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
