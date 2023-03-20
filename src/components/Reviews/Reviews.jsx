
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from 'utils/API';

const Reviews = () => {
  const { movieId } = useParams();

  const [result, setResult] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId)
      .then(response => {
        setResult(response.results);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <div>
      THIS IS REVIEWS PAGE
      <ul>
        {result.map(item => {
          return (
            <li key={item.id}>
              <h2>{item.author}</h2>
              <p>{item.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
