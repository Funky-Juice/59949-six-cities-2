import SignInForm from '../sign-in-form/sign-in-form';

const SignIn = () => {
  return <>
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <SignInForm/>

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

export default SignIn;
