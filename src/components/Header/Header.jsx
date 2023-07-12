import { Link } from 'react-router-dom';

import Search from '../ Search/Search';

import './Header.scss';

export default function Header() {
  return (
    <div className="header container">
      <div className="header__inner container__row">
        <div className="header__logo">
          <Link to="/">
            <div>
              <h1 className="header__title">
                Поиск
                <span className="header__title_gradient">Википедия</span>
              </h1>
            </div>
          </Link>
          <div />
        </div>
        <Search />
      </div>
    </div>
  );
}
