import Card from "../ui/Card";
import classes from "./MeetupItem.module.css"
import FavouritesContext from "../../store/favourites-context";
import { useContext } from "react/cjs/react.development";

function MeetupItem(props) {

  const favoritesCtx=useContext(FavouritesContext)
  const itemIsFavorite=favoritesCtx.itemIsFavorite(props.id)
  function toggleFavoriteStatusHandler(){
    console.log("clicked"+itemIsFavorite)
    if(itemIsFavorite){
      favoritesCtx.removeFavorite(props.id)
      
      
    }
    else{
      favoritesCtx.addFavorite({
        id:props.id,
        title:props.title,
        description:props.description,
        image:props.image,
        address:props.address
      });
    }

  }
  return (
    <li className={classes.item}>
        <Card>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite?'Remove From Favorite':'To Favorites'}</button>
      </div>
      </Card>
    </li>
  );
}
export default MeetupItem;
