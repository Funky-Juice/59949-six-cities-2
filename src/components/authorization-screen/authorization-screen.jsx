import AuthorizationScreenForm from '../authorization-screen-form/authorization-screen-form';

const AuthorizationScreen = () => {
  return <>
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <AuthorizationScreenForm/>

        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  </>;
};

export default AuthorizationScreen;
