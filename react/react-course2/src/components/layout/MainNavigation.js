import {Link} from 'react-router-dom';
// a 태그는 계속 Request요청 보내고 라우트 비교하기 떄문에 대신 Link 사용
//Link를 사용해서 request를 보내지도 않고 새로운 페이지를 로딩하지도 않음.

import classes from './MainNavigation.module.css';
//그냥 import from 하면 안됨..

import {useContext} from 'react';
import FavoritesContext from '../../store/favorite-context';
function MainNavigation(){
    const favoriteCtx = useContext(FavoritesContext);
return <header className={classes.header}>
    <div className={classes.logo}>React Meetups</div>
    <nav>
        <ul>
            <li><Link to="/">All Meetups</Link></li> 
            <li><Link to="/new-meetup">Add New Meetup</Link></li> 
            <li><Link to="/favorites">My Favorites
            <span className={classes.badge}> {favoriteCtx.toatalFavorites}</span></Link></li> 
        </ul>
    </nav>
</header>
}

export default MainNavigation;