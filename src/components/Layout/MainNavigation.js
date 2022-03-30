import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css'
import FavouritesContext from "../../store/favourites-context";
import { useContext } from "react/cjs/react.development";
function MainNavigation() {
  const favoritesCtx=useContext(FavouritesContext)
  return (
    <header className={classes.header}>
      <div className={classes.logo} >React Meetup</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetup</Link>
          </li>
          <li>
            <Link to="new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="favourite">My Favorites<span>({favoritesCtx.totalFavorites})</span></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
