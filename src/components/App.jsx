import { Route, Routes } from 'react-router-dom';
import Cast from './Cast/Cast';
import Home from '../pages/Home/Home';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import Movies from '../pages/Movies/Movies';
import Reviews from './Reviews/Reviews';
import SharedLayout from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};