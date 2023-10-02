import {CompleteIcon} from '../TodoIcon/CompleteIcon.js';
import {DeleteIcon} from '../TodoIcon/DeleteIcon.js';
import './TodoItem.css'

function TodoItem(props){
    return(
        <li className="item">
            <CompleteIcon 
                completed={props.completed}
                onCompleted = {props.onCompleted}
            />
      
            <p className={`item__text  ${props.completed && "item__text--actived"}`}>{props.text}</p>
    
            <DeleteIcon 
                onDelete = {props.onDelete}
                // onClick={onDelete}
            />
        </li>
    )
}
 
export {TodoItem}