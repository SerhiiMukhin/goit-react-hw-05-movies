// import css from './Movies.module.css'

import { Outlet} from 'react-router-dom';

const Movies = () => {
  return (
    <div>
      THIS IS MOVIES PAGE
      <Outlet />
    </div>
  );
};

export default Movies;
