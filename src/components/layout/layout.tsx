import PageHeader from '../page-header';
import PageFooter from '../page-footer/page-footer';
import {Offer} from '../../types/interfaces';

const getPageType = () => {
  let path = location.pathname;

  if (path.includes(`/offer/`)) {
    path = `/offer`;
  }

  switch (path) {
    case `/`:
      return `main`;
    case `/login`:
      return `login`;
    case `/favorites`:
      return `favorites`;
    case `/offer`:
      return `property`;
    default:
      return ``;
  }
};

interface Props {
  children: JSX.Element,
  favoriteOffers: Offer[]
}

const Layout = (props: Props) => {
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
    <div className={`page ${getPageType() === `main` ? `page--gray` : ``} page--${getPageType()}`}>
      <PageHeader/>
      {children}
    </div>
  </>;
};

export default Layout;
