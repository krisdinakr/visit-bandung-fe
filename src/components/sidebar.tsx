import { Link, useLocation } from 'react-router-dom';
import { ADMIN_ROUTES } from 'routes';

export const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link
              to={ADMIN_ROUTES.ROOT}
              className={
                pathname === ADMIN_ROUTES.ROOT ? 'nav-link active' : 'nav-link'
              }
            >
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={ADMIN_ROUTES.ATTRACTION_LIST}
              className={
                pathname === ADMIN_ROUTES.ATTRACTION_LIST
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              <span>Attractions</span>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="nav-item">
          <Link
            to={ADMIN_ROUTES.ATTRACTION_CREATE}
            className={
              pathname === ADMIN_ROUTES.ATTRACTION_CREATE
                ? 'nav-link active'
                : 'nav-link'
            }
          >
            <span>Create Attraction</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
