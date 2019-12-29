import {Redirect} from 'react-router-dom';

interface Props {
  isAuthorizationRequired: boolean
}

const withAuth = (Component) => {
  return (props: Props) => {
    const {isAuthorizationRequired} = props;

    if (isAuthorizationRequired) {
      return <Redirect to='/login'/>;
    }
    return <Component {...props}/>;
  };
};

export default withAuth;
