import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tag from '../Tag/Tag';
import './Movie.css';

const Movie = ({ tags, title, info, imageUrl, link }) => {
  const tagsText = tags.map((tag) => tag.name);
  return (
    <li className="movie">
      <Link to="/*" className="mainlink" />
      <div className="movie__img">
        <img className="movie__poster" src={imageUrl} alt="" />
        <div className="movie__tags">
          {tagsText.map((tagText) => (
            <Tag tagText={tagText} key={`${tagText}_${Math.random()}`} />
          ))}
        </div>
      </div>
      <div className="movie__descriprion">
        <div className="movie__name">
          <h3 className="movie__title">{title}</h3>
          <p className="movie__caption">{info}</p>
        </div>
        <a className="movie__link" href={link} target="_blank" rel="noopener noreferrer">
          смотреть трейлер
        </a>
      </div>
    </li>
  );
};

// TO DO:
// * главная, видео и фильмы

Movie.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.any).isRequired,
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Movie;
