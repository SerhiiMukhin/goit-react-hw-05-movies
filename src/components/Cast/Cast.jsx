
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from 'utils/API';

const Cast = () => {
  const { movieId } = useParams();

  const [result, setResult] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId)
      .then(response => {
        setResult(response.cast);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <div>
      THIS IS CAST PAGE
      <ul>
        {result.map(item => {
          return <li key={item.id}>{item.original_title || item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Cast;
