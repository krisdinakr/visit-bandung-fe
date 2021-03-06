import { Template } from 'components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  HomePage,
  CategoryPage,
  LoginAdminPage,
  DashboardPage,
  AttractionListPage,
  AttractionDetailsPage,
  CreateAttractionPage,
  UpdateAttractionPage,
} from './pages';
import { ADMIN_ROUTES, USER_ROUTES } from './routes';

const App = () => (
  <Router>
    <Switch>
      <Route exact path={USER_ROUTES.ROOT}>
        <HomePage />
      </Route>
      <Route exact path={ADMIN_ROUTES.ROOT}>
        <Template title="Dashboard">
          <DashboardPage />
        </Template>
      </Route>
      <Route exact path={ADMIN_ROUTES.PLACE_LIST}>
        <Template title="Attractions Table">
          <AttractionListPage />
        </Template>
      </Route>
      <Route exact path={ADMIN_ROUTES.PLACE_CREATE}>
        <Template title="Create Attraction">
          <CreateAttractionPage />
        </Template>
      </Route>
      <Route exact path={ADMIN_ROUTES.PLACE_UPDATE}>
        <Template title="Update Attraction">
          <UpdateAttractionPage />
        </Template>
      </Route>
      <Route exact path={ADMIN_ROUTES.PLACE_DETAILS}>
        <Template title="Attraction Details">
          <AttractionDetailsPage />
        </Template>
      </Route>
      <Route path={ADMIN_ROUTES.LOGIN}>
        <LoginAdminPage />
      </Route>
      <Route exact path={USER_ROUTES.CATEGORY}>
        <CategoryPage />
      </Route>
    </Switch>
  </Router>
);

export default App;
