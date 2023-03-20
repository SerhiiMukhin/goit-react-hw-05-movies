import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'utils/API';

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

  return (
    <div>
      <h1>Trending Today</h1>
      <ul>
        {results.map(item => {
          return (
            <Link
              to={`movies/${item.id}`}
              state={{ from: location }}
              key={item.id}
            >
              <li>{item.original_title || item.name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
