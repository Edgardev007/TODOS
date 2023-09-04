import '../assets/css/TodoList.css'
export function TodoList (props){

    return(
     <ul className="TodoList">
        {props.children}
     </ul>
    );
  }