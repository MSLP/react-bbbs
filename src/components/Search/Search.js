import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './search.css';

const Search = ({ handleClickLogin, toggleSearch }) => (
  <div className="header__wrapper header__wrapper_search">
    <Link className="header__logo header__logo_search" href="/" />
    <Button className="header__button-search header__button-search_search" onClick={toggleSearch} />
    <div className="header__search">
      <input
        className="header__input"
        name="question"
        id="search"
        type="text"
        placeholder="Введите вопрос"
      />
      <div className="search">
        <ul className="search__list">
          <li className="search__item">
            <h3 className="search__heading">Причины подростковой агрессии</h3>
            <a className="search__link" href="/">
              статьи
            </a>
          </li>
        </ul>
      </div>
    </div>
    <Button
      href="#"
      className="header__button-login header__button-login_unauthorized"
      onClick={handleClickLogin}
    />
    <Button type="button" className="header__burger-btn header__burger-btn_search" />
  </div>
);
Search.propTypes = {
  handleClickLogin: PropTypes.func,
  toggleSearch: PropTypes.func,
};
Search.defaultProps = {
  handleClickLogin: () => {},
  toggleSearch: () => {},
};
export default Search;
