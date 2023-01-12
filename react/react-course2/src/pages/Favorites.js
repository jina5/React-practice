import {useContext} from 'react';
import FavoitesContext from '../store/favorite-context'
import MeetupList from '../components/meetups/MeetupList'

function FavoritePage(){ 
    const favoritesCtx = useContext(FavoitesContext);

    let content ; 

    if (favoritesCtx.toatalFavorites===0){
        content = <p>You got no favorites yet. Start adding some?</p>
    }else{
        content = <MeetupList meetups ={favoritesCtx.favorites}/>

    }
    return <section>
        <h1>My Favorites</h1>
        {content}
    </section>
    }
    export default FavoritePage;