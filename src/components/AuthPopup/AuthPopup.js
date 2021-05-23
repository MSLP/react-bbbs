import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './authPopup.css';
import Popup from '../Popup/Popup';

const AuthPopup = ({
  isAuthModalOpened,
  closeAuthModal,
  register,
  handleSubmit,
  errors,
  submitModal,
}) => {
  //  Подключил библиотекук реакт-форм.     register, handleSubmit и errors - это все оттуда
  const onSubmit = ({ login, password }) => {
    submitModal(login, password);
  };
  return (
    <Popup popupType="popup_type_login" isOpen={isAuthModalOpened}>
      <div className="login">
        <Button
          type="button"
          className="popup__button-close popup__button-close_place_login"
          onClick={closeAuthModal}
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

        <form
          className="popup__form popup__form_type_login"
          name="login"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register('login', {
              required: 'Логин*',
            })}
            type="text"
            placeholder={errors.login ? errors.login.message : 'Логин'}
            id="login"
            className={`popup__input popup__input_type_login ${
              errors.login ? 'popup__input-error' : ''
            }`}
          />
          <input
            {...register('password', {
              required: 'Пароль*',
            })}
            type="password"
            placeholder={errors.password ? errors.password.message : 'Пароль'}
            id="password"
            className={`popup__input popup__input_type_password ${
              errors.password ? 'popup__input-error' : ''
            }`}
          />

          <Link className="login__link" to="/">
            Забыли пароль?
          </Link>
          <Button
            type="submit"
            className="button popup__submit-btn popup__submit-btn_type_login"
            disabled={errors.login || errors.password ? 'disabled' : null}
          >
            Войти
          </Button>
        </form>
      </div>
    </Popup>
  );
};

AuthPopup.propTypes = {
  isAuthModalOpened: PropTypes.bool.isRequired,
  closeAuthModal: PropTypes.func.isRequired,
  submitModal: PropTypes.func.isRequired,
  register: PropTypes.func,
  handleSubmit: PropTypes.func,
  errors: PropTypes.objectOf(PropTypes.string),
};
AuthPopup.defaultProps = {
  register: () => {},
  handleSubmit: () => {},
  errors: {
    login: '',
    password: '',
  },
};
export default AuthPopup;
