import './Card.css'
const Card = (props) =>{
    //ExpenseItem.js
    //<div className="expense-item"> 
    //div 같은 html 태그는 className으로 클래스를 바로 지정해주지만

    // <Card className="expense-item"> 
    // Card는 내가 만든 컴포넌트 태그이다. 
    // className으로 바로 클래스 지정이 안되고, className은 그냥 props의 이름이 될 뿐이다.
    // 이것을 props.className으로 받아와서 div에 지정해준다.
    
    // composition
    // ExpenseItem.css 의 expense-item 클래스 스타일 쓸 수 있게 된다.
    // 중복되는 코드 추출!

    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
}
export default Card