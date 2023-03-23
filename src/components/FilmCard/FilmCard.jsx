import css from './FilmCard.module.css';

const FilmCard = ({ info }) => {
  const { title, name, poster_path, release_date, overview, genres } = info;

  return (
    <div className={css.wrapper}>
      <img
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        alt={title}
        title={title}
        className={css.poster}
      />
      <div className={css.info_wrapper}>
        <h1 className={css.title}>{title || name}</h1>
        <p className={css.content}>{release_date.slice(0, 4)}</p>
        <h2 className={css.title}>Overview</h2>
        <p className={css.content}>{overview}</p>
        <h2 className={css.title}>Genres</h2>
        <ul className={css.content}>
          {genres.length === 0 ? (
            <li>No genres</li>
          ) : (
            <li>{genres.map(({ name }) => name).join(', ')}</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default FilmCard;
