import {createContext, useState} from 'react';

const FavoritesContext = createContext({
    favorites : [],
    toatalFavorites : 0,
    addFavorite : (favoriteMeetup)=>{},
    removeFavorite : (meetupId)=>{},
    ItemIsFavorite : (meetupId)=>{},

}); //context생성(초기값)

export function FavoritesContextProvider(props){ //값을 받으려 하는 모든 컴포넌트에 context전달, context값 업데이트할 수 있음.
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favortieMeetup){
        // setUserFavorites(userFavorites.concat(favoriteMeetup)) //concat : 추가해서 새 배열 변환
        // 리액트가 스테이트 업데이트 즉시 하지않고 예약을 걸어둔다.
        // 그래서 이렇게 하면 state를 업데이트 할 때 최신 상태 업데이트를 반영하지 못할 수 있어서, 상태 업데이트 함수를 대신 호출하는게 낫다.

        setUserFavorites((prevUserFavorites)=>{ //함수를 바로 실행, 이전 상태 스냅샷을자동으로 받아옴 (prevUser...)
            return prevUserFavorites.concat(favortieMeetup) //최신상태 바로 받아올수있음. 정확한 순서대로 실행되기 때문에!
        })

    }

    function removeFavoriteHandler(meetupId) {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !==meetupId)
        })
    }

    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id=== meetupId);
    }

    const context = {
        favorites : userFavorites,
        toatalFavorites : userFavorites.length,
        addFavorite : addFavoriteHandler,
        removeFavorite : removeFavoriteHandler,
        itemIsFavorite : itemIsFavoriteHandler
    };

    
    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider> //provider:해당 context와 상호작용하는 모든 컴포넌트 포함해야함

}

export default FavoritesContext;