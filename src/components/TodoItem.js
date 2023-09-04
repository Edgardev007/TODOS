import {CompleteIcon} from './CompleteIcon';
import DeleteIcon from './DeleteIcon';
import '../assets/css/TodoItem.css'
export function TodoItem (props) {

  return (
    <li className="TodoItem">
      
      <CompleteIcon
        completed={props.completed}
        onComplete={(e)=> props.onCompleted(props.text)}

      /> 
      {/* <span 
      className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      onClick={(e)=> props.onCompleted(props.text)}
      >
        v
      </span> */}
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <DeleteIcon
        onDelete={props.onDelete}
      /> 
      {/* <span 
      className="Icon Icon-delete"
      onClick={(e)=> props.onDelete(props.text)}
      >
        X
      </span> */}
    </li>
  );
  }