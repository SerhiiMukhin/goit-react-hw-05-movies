import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { getMovieById } from 'utils/API';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [result, setResult] = useState([]);
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    getMovieById(movieId)
      .then(response => {
        setResult(response);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkHref.current}>Go back</Link>
      {<h1>{result.title || result.name}</h1>}
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet></Outlet>
    </div>
  );
};

export default MovieDetails;
