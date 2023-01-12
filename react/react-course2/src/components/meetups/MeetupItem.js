import classes from './MeetupItem.module.css';
import Card from '../ui/Card'
//Card안에 jsx 코드 넣기
//오프닝 클로징 태그 사이에 넣기 위해서 사용하는 특수한 props : children


import {useContext} from 'react';
import FavoritesContext from '../../store/favorite-context' //default import 


function MeetupItem(props){
    const favoriteCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler(){
        if(itemIsFavorite){
            favoriteCtx.removeFavorite(props.id)
        }else{
            favoriteCtx.addFavorite({
                id:props.id,
                title:props.title,
                description : props.description,
                image : props.image,
                address : props.address,
            })
        }
    }

    return <li className={classes.item}>
        <Card> 
        <div className={classes.image}>
            <img src={props.image} alt={props.title}/>
        </div>
        <div className = {classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
            <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'To Favorite'}</button>
        </div>
        </Card>
    </li>
}

export default MeetupItem;