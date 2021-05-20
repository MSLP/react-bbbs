import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './authPopup.css';

const AuthPopup = ({ modalIsOpen, closeModal }) => {
  console.log(modalIsOpen);
  return (
    <div className={modalIsOpen ? 'popup popup_type_login popup_opened' : 'popup popup_type_login'}>
      <div className="login">
        <Button
          type="button"
          className="popup__button-close popup__button-close_place_login"
          onClick={closeModal}
        />
        <h3 className="login__title">Вход</h3>
        <div className="login__texts">
          <p className="login__text">
            Вход в личный кабинет доступен наставникам программы «Старшие Братья Старшие Сёстры».
          </p>
          <p className="login__text">
            Пожалуйста, введите логин и пароль из&nbsp;письма. Если вам не приходило письмо,
            свяжитесь с&nbsp;вашим куратором.
          </p>
        </div>
        <form className="popup__form popup__form_type_login" name="login" noValidate>
          <input
            type="text"
            name="login"
            placeholder="Логин"
            id="login"
            className="popup__input popup__input_type_login"
            required
            minLength="2"
          />
          <span className="popup__error popup__error_type_login" />
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            id="password"
            className="popup__input popup__input_type_password"
            required
            minLength="2"
          />
          <span className="popup__error popup__error_type_password" />
          <Link className="login__link" to="/">
            Забыли пароль?
          </Link>
          <Button type="submit" className="button popup__submit-btn popup__submit-btn_type_login">
            Войти
          </Button>
        </form>
      </div>
    </div>
  );
};

AuthPopup.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
export default AuthPopup;
