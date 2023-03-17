// import css from './MovieDetails.module.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import { Outlet, Link } from 'react-router-dom';

import getResponse from 'utils/API';

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);

  const endpoint = `movie/${movieId}`;

  const [result, setResult] = useState([]);

  useEffect(() => {
    getResponse(endpoint)
      .then(response => {
        console.log(response);
        setResult(response.data);
      })
      .catch(error => console.log(error));
  }, [endpoint]);

  return (
    <div>
      {<h1>{result.original_title || result.name}</h1>}
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
