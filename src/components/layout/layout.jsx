import PageHeader from '../page-header';
import PageFooter from '../page-footer/page-footer';
import {offerPropTypes} from '../../prop-types/prop-types';

const getPageType = () => {
  let path = location.pathname;

  if (path.includes(`/offer/`)) {
    path = `/offer`;
  }

  switch (path) {
    case `/`:
      return `main`;
    case `/sign-in`:
      return `login`;
    case `/favorites`:
      return `favorites`;
    case `/offer`:
      return `property`;
    default:
      return ``;
  }
};

const Layout = (props) => {
  const {children} = props;

  if (getPageType() === `favorites`) {
    return <>
      <div
        className="page page--favorites"
      >
        <PageHeader/>
        {children}
        <PageFooter/>
      </div>
    </>;
  }

  return <>
    <div className={`page page--gray page--${getPageType()}`}>
      <PageHeader/>
      {children}
    </div>
  </>;
};

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  favoriteOffers: PropTypes.arrayOf(offerPropTypes)
};

export default Layout;
