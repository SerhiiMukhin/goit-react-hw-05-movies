import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import { Outlet, Link } from 'react-router-dom';
import { getMovieById } from 'utils/API';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [result, setResult] = useState([]);
  const [backLink, setBackLink] = useState('/');

  useEffect(() => {
    getMovieById(movieId)
      .then(response => {
        setResult(response);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  useEffect(() => {
    setBackLink(location.state.from || '/');
  }, []);

  return (
    <div>
      <Link to={backLink}>Go back</Link>
      {<h1>{result.title || result.name}</h1>}
      <Link to="cast" element={<Cast></Cast>}>
        Cast
      </Link>
      <Link to="reviews" element={<Reviews></Reviews>}>
        Reviews
      </Link>
      <Outlet></Outlet>
    </div>
  );
};

export default MovieDetails;
