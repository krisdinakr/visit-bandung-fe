import { Link } from 'react-router-dom';
import { ADMIN_ROUTES } from 'routes';

const DashboardPage = () => (
  <div className="dashboard-page">
    <div className="row gap-3">
      <div className="dashboard-page__info">
        <div className="dashboard-page__header-info">
          <div className="dashboard-page__body-info">40</div>
          <div className="dashboard-page__title-info">Places</div>
        </div>
        <Link
          to={ADMIN_ROUTES.ATTRACTION_LIST}
          className="dashboard-page__button-info"
        >
          more info
        </Link>
      </div>
      <div className="dashboard-page__info">
        <div className="dashboard-page__header-info">
          <div className="dashboard-page__body-info">19</div>
          <div className="dashboard-page__title-info">Categories</div>
        </div>
        <Link
          to={ADMIN_ROUTES.ATTRACTION_LIST}
          className="dashboard-page__button-info"
        >
          more info
        </Link>
      </div>
    </div>
  </div>
);

export default DashboardPage;
