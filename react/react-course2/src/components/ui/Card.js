//jsx 콘텐츠를 감싸줄 첫번째 사용자 컴포넌트
import classes from './Card.module.css';
function Card(props){
    return <div className={classes.card}>{props.children}</div>
}
export default Card;
