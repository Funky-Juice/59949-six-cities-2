import PageHeader from '../page-header';
import PageFooter from '../page-footer/page-footer';

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

const Layout = ({children}) => {
  if (getPageType() === `favorites`) {
    return <>
      <div className="page">
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
  children: PropTypes.object.isRequired
};

export default Layout;
