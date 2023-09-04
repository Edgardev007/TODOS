
import React from 'react';
import '../assets/css/TodoCounter.css'
import { TodoContext } from '../context/useContext';
export function TodoCounter (){

  const {completedTodos:completed=0  , totaltodos: total=0} = React.useContext(TodoContext);
    return(
      <h1 >
        {
          completed === total && completed > 0 ?
          `Felicidades crack 👌👍`:
          `Has completado ${completed} de ${total} TODOS`
          
          }
      </h1>
    );
  }