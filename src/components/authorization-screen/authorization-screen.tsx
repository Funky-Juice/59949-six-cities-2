import {Link} from 'react-router-dom';
import AuthorizationScreenForm from '../authorization-screen-form/authorization-screen-form';
import withAuthForm from '../../hocs/with-auth-form';

const AuthorizationScreenFormWrapped = withAuthForm(AuthorizationScreenForm);

const AuthorizationScreen = () => {
  return <>
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <AuthorizationScreenFormWrapped/>

        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to="#">
              <span>Amsterdam</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  </>;
};

export default AuthorizationScreen;
