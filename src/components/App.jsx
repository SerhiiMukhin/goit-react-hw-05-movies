import { Link, Route, Routes } from 'react-router-dom';
// import getResponse from 'utils/API';
import Cast from './Cast/Cast';
import Home from './Home/Home';
import MovieDetails from './MovieDetails/MovieDetails';
import Movies from './Movies/Movies';
import Reviews from './Reviews/Reviews';

import css from './App.module.css';

export const App = () => {

  return (
    <div>
      <nav className={css.nav}>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId/" element={<MovieDetails />}>
          <Route path="cast" element={<Cast></Cast>}></Route>
          <Route path="reviews" element={<Reviews></Reviews>}></Route>
        </Route>

        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
