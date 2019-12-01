import {userPropTypes} from '../../prop-types/prop-types';
import PageHeader from '../page-header/page-header';

const getPageType = () => {
  let path = location.pathname;

  if (path.includes(`offer-`)) {
    path = `/offer`;
  }

  switch (path) {
    case `/`:
      return `main`;
    case `/sign-in`:
      return `login`;
    case `/offer`:
      return `property`;
    default:
      return ``;
  }
};

const Layout = (props) => {
  return <>
    <div className={`page page--gray page--${getPageType()}`}>
      <PageHeader user={props.user}/>
      {props.children}
    </div>
  </>;
};

Layout.propTypes = {
  user: userPropTypes,
  children: PropTypes.object.isRequired
};

export default Layout;
