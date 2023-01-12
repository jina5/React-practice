import NewMeetupForm from "../components/meetups/NewMeetupForm";

import { useHistory } from 'react-router-dom'; //내장 훅

function NewMeetupPage() {
    const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch(
      /* 자바스크립트 함수, request 보낸다. */
      "https://react-getting-started-2c59b-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData) /*json으로 변환 */,
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(()=> {
        history.replace('/'); /* 뒤로가기 비활성화 */
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
export default NewMeetupPage;
