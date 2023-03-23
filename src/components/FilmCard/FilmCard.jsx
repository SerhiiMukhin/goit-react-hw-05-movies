const FilmCard = ({ info }) => {
  const { title, name, poster_path, release_date, overview, genres } = info;

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} title={title} />
      <h1>{title || name}</h1>
      <p>{release_date.slice(0, 4)}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      <ul>
        {genres.length === 0 ? (
          <li>No genres</li>
        ) : (
          <li>{genres.map(({ name }) => name).join(', ')}</li>
        )}
      </ul>
    </div>
  );
};

export default FilmCard;
