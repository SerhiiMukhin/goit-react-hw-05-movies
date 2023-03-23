import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'utils/API';
import css from './Home.module.css'

const Home = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies()
      .then(response => {
        setResults(response.results);
      })
      .catch(error => console.log(error));
  }, []);

  console.log(results);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Trending Today</h1>
      <ul className={css.list}>
        {results.map(item => {
          return (
            <Link
              to={`movies/${item.id}`}
              state={{ from: location }}
              key={item.id}
            >
              <li className={css.card}>
                  <img src={`https://image.tmdb.org/t/p/w300${item.backdrop_path}`} alt={item.title} title={item.title} className={css.homeImg} />
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
