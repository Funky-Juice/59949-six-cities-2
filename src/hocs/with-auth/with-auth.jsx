import {Redirect} from 'react-router-dom';

const withAuth = (Component) => {
  const WithAuth = (props) => {
    const {isAuthorizationRequired} = props;

    if (isAuthorizationRequired) {
      return <Redirect to='/login'/>;
    }
    return <Component {...props}/>;
  };

  WithAuth.propTypes = {
    isAuthorizationRequired: PropTypes.bool.isRequired
  };

  return WithAuth;
};

export default withAuth;
