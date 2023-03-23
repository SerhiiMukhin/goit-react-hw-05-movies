import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { getMovieById } from 'utils/API';
import FilmCard from 'components/FilmCard/FilmCard';
import css from './MovieDetails.module.css'
import {FiArrowLeft} from 'react-icons/fi'

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [result, setResult] = useState(null);
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    getMovieById(movieId)
      .then(setResult)
      .catch(error => console.log(error));
    // eslint-disable-next-line
  }, []);

  return (
    <div className={css.container}>
      <Link to={backLinkHref.current} className={css.goBackLink}>
        <FiArrowLeft className={css.icon}></FiArrowLeft>
        Go back</Link>
      <div>
        {!result ? (
          <h2>Loading...</h2>
        ) : (
          <div>
            <FilmCard info={result} />
          </div>
        )}
      </div>
      <h2 className={css.title}>Additional information</h2>
      <Link to="cast" className={css.link}>Cast</Link>
      <Link to="reviews" className={css.link}>Reviews</Link>
      <Outlet></Outlet>
    </div>
  );
};

export default MovieDetails;
