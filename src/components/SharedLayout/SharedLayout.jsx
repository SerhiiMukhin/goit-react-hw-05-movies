import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </nav>
      </header>
    </div>
  );
};

export default SharedLayout;
