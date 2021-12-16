import { Link } from 'react-router-dom';
import { ADMIN_ROUTES } from 'routes';

export const Sidebar = () => (
  <nav
    id="sidebarMenu"
    className="col-md-3 col-lg-2 d-md-block bg-light siderbar collapse"
  >
    <div className="position-sticky pt-3">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to={ADMIN_ROUTES.ROOT} className="nav-link active">
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={ADMIN_ROUTES.ATTRACTION_LIST} className="nav-link">
            <span>Attractions</span>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);
