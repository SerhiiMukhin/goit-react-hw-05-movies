import { NavLink, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
          <Outlet />
        </nav>
      </header>
    </div>
  );
};

export default SharedLayout;
