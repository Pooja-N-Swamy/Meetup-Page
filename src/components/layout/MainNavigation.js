import { Link } from "react-router-dom";
import nav_styles from "./MainNavigation.module.css";
import { useContext } from "react";
import FavrotiesContext from "../../store/favorites-context";

export default function MainNavigation() {
  const favoritesCtx = useContext(FavrotiesContext);
  return (
    <header className={nav_styles.header}>
      <h1 className={nav_styles.logo}>React Meetups</h1>
      <nav>
        <ul>
          <li>
            <Link to="/Meetup-Page">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={nav_styles.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
