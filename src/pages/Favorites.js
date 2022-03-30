import { useContext } from "react/cjs/react.development";
import MeetupList from "../components/meetups/MeetupList";
import FavouritesContext from "../store/favourites-context";

function Favorites(){
    const favoritesCtx=useContext(FavouritesContext)
    let content;
    if(favoritesCtx.totalFavorites===0){
       
        content=<p>You got no Favorites yet. Start adding some?</p>
    }
    else{
        content=<MeetupList meetups={favoritesCtx.favorites}/>
    }
    
    return(
        <section>
            <h1>My Favorite</h1>
            {content}
            
        </section>
    )

}
export default Favorites;