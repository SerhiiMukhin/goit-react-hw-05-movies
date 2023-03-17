// import css from './Reviews.module.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getResponse from 'utils/API';

const Reviews = () => {
  const { movieId } = useParams();
  console.log(movieId);

  const endpoint = `/movie/${movieId}/reviews`;

  const [result, setResult] = useState([]);

  useEffect(() => {
    getResponse(endpoint)
      .then(response => {
        console.log(response);
        setResult(response.data.results);
      })
      .catch(error => console.log(error));
  }, [endpoint]);

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
