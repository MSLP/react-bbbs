import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';

export default function ProtectedRoute({
  component: Component,
  path,
  onLogout,
  handleCalendarCardClick,
  handlerRegisterSubmit,
}) {
  const currentUser = useContext(CurrentUserContext);

  let className = 'content root__section';
  if (path !== '/calendar' || path !== '/personal-account') {
    className = '';
  }

  return (
    <Route>
      {currentUser ? (
        <main className={className}>
          <Component
            exact
            path={path}
            onLogout={onLogout}
            handleCalendarCardClick={handleCalendarCardClick}
            handlerRegisterSubmit={handlerRegisterSubmit}
          />
        </main>
      ) : (
        <Redirect to={{ pathname: '/', state: { isAuthModalOpened: true } }} />
      )}
    </Route>
  );
}

ProtectedRoute.propTypes = {
  // PropTypes.element.isRequired, линтер ругаетсяна елеменрт
  component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  onLogout: PropTypes.func,
  handleCalendarCardClick: PropTypes.func,
  handlerRegisterSubmit: PropTypes.func,
};

ProtectedRoute.defaultProps = {
  handleCalendarCardClick: () => {},
  handlerRegisterSubmit: () => {},
  onLogout: () => {},
};
