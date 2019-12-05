import {Route, Switch, Redirect, Link} from 'react-router-dom';

import AuthorizationScreen from '../authorization-screen/authorization-screen';
import withLayout from '../../hocs/with-layout/with-layout';
import OfferDetails from '../offer-details/offer-details';
import FavoritesScreen from '../favorites-screen';
import MainScreen from '../main-screen';

const MainScreenWrapped = withLayout(MainScreen);
const OfferDetailsWrapped = withLayout(OfferDetails);
const FavoritesScreenWrapped = withLayout(FavoritesScreen);
const AuthorizationScreenWrapped = withLayout(AuthorizationScreen);

const App = (props) => {
  const {isAuthorizationRequired} = props;

  return (
    <Switch>
      <Route path="/" exact component={MainScreenWrapped}/>
      <Route path="/sign-in" exact render={() =>
        isAuthorizationRequired ? <AuthorizationScreenWrapped/> : <Redirect to="/"/>
      }/>
      <Route path="/favorites" exact render={() =>
        <FavoritesScreenWrapped {...props}/>
      }/>
      <Route path="/offer/:id" exact render={(rest) =>
        <OfferDetailsWrapped {...props} {...rest}/>
      }/>
      <Route
        render={() => (
          <div style={{textAlign: `center`}}>
            <h1>404</h1>
            <h1>Page not found</h1>
            <Link to="/">Back to Main Page</Link>
          </div>
        )}
      />
    </Switch>
  );
};

App.propTypes = {
  isAuthorizationRequired: PropTypes.bool.isRequired
};

export default App;
