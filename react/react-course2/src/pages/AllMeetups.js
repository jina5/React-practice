import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";
//useEffect : 특정 조건을 만족하면 일부 코드를 실행하는 훅

function AllMeetupsPage() {
  /*Fetch -> 프라미스 (비동기처리) 반환 ,
  await async 하면 함수가 프로미스 반환함수가 되어 비동기처리임, 리액트 컴포넌트 아님, 리액트 컴포넌트는 동기식이어야 한다. jsx를 바로 반환해야한다. 
  응답을 받을때까지 값을 반환하는것을 미룰수없다.
  /*임시 jsx를 로딩스피너로 반환해야 한다. 다음에 응답받은 jsx코드를 보낸다. 
  state를 통해 변화 인식! */

  //state 변할때 마다 컴포넌트 함수 다시 실행...
  const [isLoading, setIsLoading] = useState(true); //로딩 상태 : 현재상태, 상태업데이트함수
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  //라우터에 의해 로딩되는 페이지로 사용되는 컴포넌트라고 구분하기 위해 이름을 이렇게 지어줄뿐....

  useEffect(()=>{
    setIsLoading(true);  
    fetch( //(함수, 의존형배열)
  //두번째인자 배열이 [] 상태면 컴포넌트 실행될떄 마다 함수가 실행된다.
  // 두번째 인자 추가되면 리액트는 사용자가 배열에 추가한 값을 확인하고 이펙트 함수를 마지막으로 실행했을 때 값을 비교한다.
  // 배열이 비어있다면 의존성이 없다. 그러면 컴포넌트 함수가 처음으로 렌더링 되고 실행될때만 이 함수를 실행한다.
  //이후 실행부터는 이 이펙트함수가 실행되지 않는다. 의존성이 없기때문에... 의존성 값 항상 같음 (비어있음)
  //의존성 추가하면, 값이 변할때 마다 실행된다.
  //외부에서 정의된 setIsLoading 같은 것을 넣으면, 외부의존성을 가지는데... 얘는 안바뀌기 때문에 외부의존성이 없는것과 동일..[] 빈것... 으로 하면된다.
    //props.url 처럼 프로퍼티에서 데이터를 추출하려고 하면 props가 의존성을 가지기때문에 두번째 인자인 배열에 props를 추가해야 한다.
    
    "https://react-getting-started-2c59b-default-rtdb.firebaseio.com/meetups.json"
  )
    .then((response) => {
      return response.json(); /* json도 프라미스 반환하기때문에 프라미스 해결될때 까지 기다려야 한다. */
    })
    .then((data) => {
        const meetups = [];

        for (const key in data ){
            const meetup = {
                id : key,
                ...data[key]
            };

            meetups.push(meetup);
        }


      setIsLoading(false);
      setLoadedMeetups(meetups);
    });}, []); 
  
  if (isLoading) {
    //임시 jsx
    return (
      <section>
        <p>Loading....</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups </h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}
export default AllMeetupsPage;
