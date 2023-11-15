import { Outlet, Link } from "react-router-dom";
import './Layout.css';

const Layout = () => {
  return (
    <header className="top-navbar">
      <nav>
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="navbar-item dropdown">
            Links
            <ul className="dropdown-content">
              <li><a href="www.here.com">Link 1</a></li>
              <li><a href="www.here.com">Link 2</a></li>
              <li><a href="www.here.com">Link 3</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      <Outlet />
    </header>
  );
};

export default Layout;
