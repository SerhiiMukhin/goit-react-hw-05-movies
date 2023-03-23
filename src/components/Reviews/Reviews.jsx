import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from 'utils/API';
import css from './Reviews.module.css';

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
    <div className={css.wrapper}>
      {result.length > 0 ? (
        <ul>
          {result.map(item => {
            return (
              <li key={item.id} className={
                css.item
              }>
                <h2>{item.author}</h2>
                <p>{item.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No reviews found</p>
      )}
    </div>
  );
};

export default Reviews;
