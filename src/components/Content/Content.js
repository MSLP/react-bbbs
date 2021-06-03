import { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import MainPage from '../Pages/MainPage/MainPage';
import Calendar from '../Pages/Calendar/Calendar';
import WhereToGo from '../Pages/WhereToGo/WhereToGo';
import QuestionsPage from '../Pages/QuestionsPage/QuestionsPage';
import PersonalAccount from '../Pages/PersonalAccount/PersonalAccount';
import ProtectedRoute from '../UI/ProtectedRoute/ProtectedRoute';
import About from '../Pages/About/About';
import StoryPage from '../Pages/StoryPage/StoryPage';
import PageNotFound from '../Pages/PageNotFound/PageNotFound';
import ReadAndWatch from '../Pages/ReadAndWatch/ReadAndWatch';
import BooksPage from '../Pages/BooksPage/BooksPage';
import MoviesPage from '../Pages/MoviesPage/MoviesPage';
import VideosPage from '../Pages/VideosPage/VideosPage';
import ArticlesPage from '../Pages/ArticlesPage/ArticlesPage';
import GuidePage from '../Pages/GuidePage/GuidePage';
import RightsPage from '../Pages/RightsPage/RightsPage';
import './content.css';

export default function Content({
  mainData,
  openAuthModal,
  onLogout,
  handleCalendarCardClick,
  handleRegisterSubmit,
  handleDeleteEvent,
  onRecommendPlace,
  events,
  cities,
  updateCity,
  openPopupCities,
  unauthСity,
  isPlacePopupOpened,
  handlerVideoClick,
}) {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.isAuthModalOpened) {
      openAuthModal();
    }
  }, [location]);

  return (
    <main className="main">
      <Switch>
        <Route exact path="/">
          <MainPage
            mainData={mainData}
            handleCalendarCardClick={handleCalendarCardClick}
            handleRegisterSubmit={handleRegisterSubmit}
            handleDeleteEvent={handleDeleteEvent}
            events={events}
          />
        </Route>

        <ProtectedRoute
          path="/calendar"
          component={Calendar}
          handleCalendarCardClick={handleCalendarCardClick}
          handleRegisterSubmit={handleRegisterSubmit}
          handleDeleteEvent={handleDeleteEvent}
          events={events}
        />

        <Route exact path="/stories">
          <StoryPage />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/where-to-go">
          <WhereToGo
            onRecommendPlace={onRecommendPlace}
            openPopupCities={openPopupCities}
            unauthСity={unauthСity}
            isPlacePopupOpened={isPlacePopupOpened}
          />
        </Route>

        <Route exact path="/questions">
          <QuestionsPage />
        </Route>

        <Route exact path="/read-watch">
          <ReadAndWatch />
        </Route>

        <Route exact path="/rights">
          <RightsPage />
        </Route>

        <Route exact path="/read-watch/guide">
          <GuidePage />
        </Route>

        <Route exact path="/read-watch/videos">
          <VideosPage handlerVideoClick={handlerVideoClick} />
        </Route>

        <Route exact path="/read-watch/articles">
          <ArticlesPage />
        </Route>

        <Route exact path="/read-watch/movies">
          <MoviesPage handlerVideoClick={handlerVideoClick} />
        </Route>

        <Route exact path="/read-watch/books">
          <BooksPage />
        </Route>

        <ProtectedRoute
          path="/personal-account"
          component={PersonalAccount}
          onLogout={onLogout}
          handleCalendarCardClick={handleCalendarCardClick}
          events={events}
          cities={cities}
          updateCity={updateCity}
          openPopupCities={openPopupCities}
        />

        <Route exact path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </main>
  );
}

Content.propTypes = {
  mainData: PropTypes.objectOf(PropTypes.any),
  onLogout: PropTypes.func.isRequired,
  openAuthModal: PropTypes.func.isRequired,
  handleCalendarCardClick: PropTypes.func.isRequired,
  handleRegisterSubmit: PropTypes.func.isRequired,
  handleDeleteEvent: PropTypes.func.isRequired,
  onRecommendPlace: PropTypes.func.isRequired,
  events: PropTypes.arrayOf(PropTypes.any),
  cities: PropTypes.arrayOf(PropTypes.any),
  updateCity: PropTypes.func,
  openPopupCities: PropTypes.func,
  unauthСity: PropTypes.string,
  isPlacePopupOpened: PropTypes.bool.isRequired,
  handlerVideoClick: PropTypes.bool.isRequired,
};

Content.defaultProps = {
  mainData: {},
  events: [],
  cities: [],
  updateCity: () => {},
  openPopupCities: () => {},
  unauthСity: '',
};
