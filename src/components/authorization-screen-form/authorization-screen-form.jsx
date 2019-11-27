
class AuthorizationScreenForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this._form = React.createRef();
    this._formSubmitHandler = this._formSubmitHandler.bind(this);
  }

  _getInputsValues() {
    const formInputsArray = Array.prototype.slice.call(this._form.current);
    const authData = {};

    formInputsArray.forEach((it) => {
      if (it.name === `email`) {
        authData.email = it.value;
      } else if (it.name === `password`) {
        authData.password = it.value;
      }
    });
    return authData;
  }

  _formSubmitHandler(evt) {
    const {onAuth} = this.props;

    evt.preventDefault();
    onAuth(this._getInputsValues());
  }

  _renderAuthForm() {
    return <>
      <section className="login">
        <h1 className="login__title">Sign in</h1>

        <form
          ref={this._form}
          className="login__form form"
          onSubmit={this._formSubmitHandler}
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
          >
            Sign in
          </button>
        </form>
      </section>
    </>;
  }

  render() {
    return this._renderAuthForm();
  }
}

AuthorizationScreenForm.propTypes = {
  onAuth: PropTypes.func.isRequired
};

export default AuthorizationScreenForm;
