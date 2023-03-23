import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'utils/API';
import { useState, useEffect } from 'react';
import css from './Movies.module.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [result, setResult] = useState([]);
  const location = useLocation();

  const query = searchParams.get('query') ?? '';

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    setSearchParams({ query: event.target.query.value.trim() });
    form.reset();
  };

  useEffect(() => {
    getMoviesByQuery(query)
      .then(response => {
        setResult(response.results);
      })
      .catch(error => console.log(error));
  }, [query]);

  console.log(result);

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <input type="text" name="query" className={css.input} />
        <button type="submit" className={css.button}>Search</button>
      </form>
      {query !== '' && (
        <ul className={css.list}>
          {result.map(item => {
            return (
              <Link to={`${item.id}`} state={{ from: location }} key={item.id}>
                <li className={css.card}>
                  {item.backdrop_path !== null ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w300${item.backdrop_path}`}
                      alt={item.title}
                      title={item.title}
                      className={css.homeImg}
                    />
                  ) : (
                    <div className={css.placeholder}>Sorry, no image found :(</div>
                  )}
                </li>
              </Link>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Movies;
