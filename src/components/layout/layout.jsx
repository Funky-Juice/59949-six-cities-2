import PageHeader from '../page-header';

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
      <PageHeader/>
      {props.children}
    </div>
  </>;
};

Layout.propTypes = {
  children: PropTypes.object.isRequired
};

export default Layout;
