import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, AttractionsPage } from './pages';
import { USER_ROUTES } from './routes';

const App = () => (
  <Router>
    <Switch>
      <Route exact path={USER_ROUTES.ROOT}>
        <HomePage />
      </Route>
      <AttractionsPage />
    </Switch>
  </Router>
);

export default App;
