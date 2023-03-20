import { Link, useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'utils/API';
import { useState, useEffect } from 'react';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [result, setResult] = useState([]);

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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Submit</button>
      </form>
      {query !== '' && (
        <ul>
          {result.map(item => {
            return (
              <Link to={`${item.id}`} key={item.id}>
                <li>{item.title || item.name}</li>
              </Link>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Movies;
