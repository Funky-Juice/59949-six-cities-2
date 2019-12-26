import {Route, Switch, Redirect, Link} from 'react-router-dom';

import AuthorizationScreen from '../authorization-screen/authorization-screen';
import withLayout from '../../hocs/with-layout/with-layout';
import ErrorScreen from '../error-screen/error-screen';
import OfferDetails from '../offer-details-screen';
import FavoritesScreen from '../favorites-screen';
import MainScreen from '../main-screen';
import withAuth from '../../hocs/with-auth';

const MainScreenWrapped = withLayout(MainScreen);
const OfferDetailsWrapped = withLayout(OfferDetails);
const FavoritesScreenWrapped = withLayout(FavoritesScreen);
const AuthorizationScreenWrapped = withLayout(AuthorizationScreen);

interface Props {
  errorMessage: string
  isAuthorizationRequired: boolean
}

const App = (props: Props) => {
  const {errorMessage, isAuthorizationRequired} = props;

  if (errorMessage) {
    return <ErrorScreen errorMessage={errorMessage}/>;
  }

  return (
    <Switch>
      <Route path="/" exact component={MainScreenWrapped}/>
      <Route path="/login" exact render={() =>
        isAuthorizationRequired ? <AuthorizationScreenWrapped/> : <Redirect to="/"/>
      }/>
      <Route path="/favorites" exact component={withAuth(FavoritesScreenWrapped)}/>
      <Route path="/offer/:id" exact render={(rest) => <OfferDetailsWrapped {...rest}/>}/>
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

export default App;
