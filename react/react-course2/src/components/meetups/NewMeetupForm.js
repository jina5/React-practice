import classes from './NewMeetupForm.module.css';
import Card from '../ui/Card'

import {useRef} from 'react';


// class와 for를 제외하면 표준 HTML 속성을 모두 사용할 수 있다. 
//for 은 자바스크립트에서 쓰기 때문에 htmlFor으로 사용
function NewMeetupForm(props){
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event){

        event.preventDefault();  /* 자동으로 submit 되는 것 막고 이 함수 실행되도록 해야 함 */
        
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title : enteredTitle,
            image : enteredImage,
            address : enteredAddress,
            description : enteredDescription
        };

        props.onAddMeetup(meetupData);
    }

    return (<Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}> 
            <label htmlFor="title">Meetup Title</label> 
                <input type="text" required id="title" ref={titleInputRef}/>
            </div>
            <div className={classes.control}> 
            <label htmlFor="image">Meetup Image</label> 
                <input type="url" required id="image" ref={imageInputRef}/>
            </div>
            <div className={classes.control}> 
            <label htmlFor="address">Address</label> 
                <input type="text" required id="address" ref={addressInputRef}/>
            </div>
            <div className={classes.control}> 
            <label htmlFor="description">Description</label> 
                <textarea required id="description" rows="5" ref={descriptionInputRef}></textarea>
            </div>
            <div className={classes.actions}>
        <button>Add Meetup</button>
            </div>
        </form>
    </Card>);
}
export default NewMeetupForm;