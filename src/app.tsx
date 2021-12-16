import { Template } from 'components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, AttractionsPage, LoginAdminPage, DashboardPage } from './pages';
import { ADMIN_ROUTES, USER_ROUTES } from './routes';

const App = () => (
  <Router>
    <Switch>
      <Route exact path={USER_ROUTES.ROOT}>
        <HomePage />
      </Route>
      <Route path={ADMIN_ROUTES.ROOT}>
        <Template>
          <DashboardPage />
        </Template>
      </Route>
      <Route path={ADMIN_ROUTES.LOGIN}>
        <LoginAdminPage />
      </Route>
      <Route>
        <AttractionsPage />
      </Route>
    </Switch>
  </Router>
);

export default App;
