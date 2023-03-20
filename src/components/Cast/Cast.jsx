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
      <ul>
        {result.map(item => {
          return <li key={item.cast_id}>{item.original_name || item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Cast;
