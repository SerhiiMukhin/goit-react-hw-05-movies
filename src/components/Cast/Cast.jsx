import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from 'utils/API';
import css from './Cast.module.css';

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

  console.log(result);

  return (
    <div className={css.wrapper}>
      {result ? (
        <ul className={css.list}>
          {result.map(item => {
            return (
              <li key={item.cast_id} className={css.item}>
                {item.profile_path === null ? (
                  <div className={css.placeholder}>No image found :(</div>
                ) : (
                  <img
                    className={css.image}
                    src={`https://image.tmdb.org/t/p/w200${item.profile_path}`}
                    alt={item.name}
                  />
                )}

                <p>{item.original_name || item.name}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No information found</p>
      )}
    </div>
  );
};

export default Cast;
