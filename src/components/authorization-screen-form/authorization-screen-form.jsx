
const AuthorizationScreenForm = (props) => {
  const {message, isLocked, onFormSubmit} = props;

  return <>
    <section className="login">
      <h1 className="login__title">Sign in</h1>

      <form
        className="login__form form"
        onSubmit={onFormSubmit}
      >
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input
            className="login__input form__input"
            type="email"
            name="email"
            placeholder="Email"
            required=""
          ></input>
        </div>

        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input
            className="login__input form__input"
            type="password"
            name="password"
            placeholder="Password"
            required=""
          ></input>
        </div>

        <button
          className="login__submit form__submit button"
          type="submit"
          disabled={isLocked}
        >
          Sign in
        </button>

        {message && <div style={{position: `relative`, fontSize: `14px`, color: `red`}}>
          <p className="login__error-message" style={{position: `absolute`}}>
            {message}
          </p>
        </div>}
      </form>
    </section>
  </>;
};

AuthorizationScreenForm.propTypes = {
  message: PropTypes.string,
  isLocked: PropTypes.bool.isRequired,
  onFormSubmit: PropTypes.func.isRequired
};

export default AuthorizationScreenForm;
