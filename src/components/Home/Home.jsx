// import css from './Home.module.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getResponse from 'utils/API';

const endpoint = 'trending/all/day';

const Home = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    getResponse(endpoint)
      .then(response => {
        setResults(response.data.results);
      })
      .catch(error => console.log(error));
  }, []);


  return (
    <div>
    <h1>Trending Today</h1>
      <ul>
        {results.map(item => {
          return (
            <Link to={`movies/${item.id}`} key={item.id}>
              <li>{item.original_title || item.name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
