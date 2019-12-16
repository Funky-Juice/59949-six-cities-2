import {Redirect} from 'react-router-dom';

const withAuth = (Component) => {
  class WithAuth extends React.PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      const {isAuthorizationRequired} = this.props;

      if (isAuthorizationRequired) {
        return <Redirect to='/login'/>;
      }
      return <Component {...this.props}/>;
    }
  }

  WithAuth.propTypes = {
    isAuthorizationRequired: PropTypes.bool.isRequired
  };

  return WithAuth;
};

export default withAuth;
