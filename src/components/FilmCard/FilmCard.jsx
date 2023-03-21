const FilmCard = ({ info }) => {
  const { title, name, poster_path, release_date, overview } = info;
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
      <h1>{title || name}</h1>
      <p>{release_date}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
    </div>
  );
};

export default FilmCard;
