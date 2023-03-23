import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { getMovieById } from 'utils/API';
import FilmCard from 'components/FilmCard/FilmCard';

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

  console.log(result);

  return (
    <div>
      <Link to={backLinkHref.current}>Go back</Link>
      <div>
        {!result ? (
          <h2>Loading...</h2>
        ) : (
          <div>
            <FilmCard info={result} />
          </div>
        )}
      </div>
      <h2>Additional information</h2>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet></Outlet>
    </div>
  );
};

export default MovieDetails;
