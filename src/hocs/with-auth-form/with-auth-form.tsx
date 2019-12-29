import {FormEvent} from 'react';

interface Props {
  onAuth: (authData) => Promise<any>
}

interface State {
  isLocked: boolean
  message: null | string
}

const withAuthForm = (Component) => {
  return class WithAuthForm extends React.PureComponent<Props, State> {
    private emailValidationPattern: RegExp;

    constructor(props) {
      super(props);

      this.state = {
        isLocked: false,
        message: null
      };

      this._handleFormSubmit = this._handleFormSubmit.bind(this);
      this.emailValidationPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }

    _validateFields(data) {
      const emailIsValid = this.emailValidationPattern.test(String(data.email).toLowerCase());
      if (!emailIsValid) {
        return this.setState({message: `Check your email`});
      }

      const passIsValid = !!data.password;
      if (!passIsValid) {
        return this.setState({message: `Enter any password`});
      }

      return emailIsValid && passIsValid;
    }

    _getInputsValues(form) {
      const formInputsArray = [...form.elements];
      const authData = {
        email: ``,
        password: ``
      };

      formInputsArray.forEach((it) => {
        if (it.name === `email`) {
          authData.email = it.value;
        } else if (it.name === `password`) {
          authData.password = it.value;
        }
      });
      return authData;
    }

    _handleFormSubmit(evt: FormEvent<HTMLFormElement>) {
      const {onAuth} = this.props;
      evt.preventDefault();

      const fields = this._getInputsValues(evt.target);
      const isValid = this._validateFields(fields);

      if (isValid) {
        this.setState(() => ({
          isLocked: true,
          message: null
        }));

        onAuth(fields)
          .catch((err) => {
            this.setState(() => ({
              isLocked: false,
              message: err.message
            }));
          });
      }
    }

    render() {
      const {message, isLocked} = this.state;

      return <Component
        {...this.props}
        message={message}
        isLocked={isLocked}
        onFormSubmit={this._handleFormSubmit}
      />;
    }
  }
};

export default withAuthForm;
