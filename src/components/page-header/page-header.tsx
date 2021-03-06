import {Link} from 'react-router-dom';
import {User} from '../../types/interfaces';

interface Props {
  user: User
}

const PageHeader = (props: Props) => {
  return <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Link to="/" className="header__logo-link header__logo-link--active">
            <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"></img>
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              {props.user.email ?
                <Link to="/favorites" className="header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__user-name user__name">{props.user.email}</span>
                </Link>
                :
                <Link to="/login" className="header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__user-name user__name">Sign in</span>
                </Link>
              }
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>;
};

export default PageHeader;
