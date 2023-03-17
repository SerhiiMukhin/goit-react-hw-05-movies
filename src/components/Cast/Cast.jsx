// import css from './Cast.module.css'

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getResponse from 'utils/API';

const Cast = () => {
  const { movieId } = useParams();
  console.log(movieId);

  const endpoint = `movie/${movieId}/credits`;

  const [result, setResult] = useState([]);

  useEffect(() => {
    getResponse(endpoint)
      .then(response => {
        console.log(response);
        setResult(response.data.cast);
      })
      .catch(error => console.log(error));
  }, [endpoint]);

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
