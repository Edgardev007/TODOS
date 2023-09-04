import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}){
    
  const [state , setState ] = React.useState('');
  const [openModal , setOpenModal ] = React.useState(false);
  const {items:todos , saveItems:saveTodos,loading , error } = useLocalStorage({itenName:'TODO_V1',initialValue:[]});

  const completedTodos = todos.filter((elements)=> !!elements.completed).length
  const totaltodos = todos.length;
  const serachTodos = todos.filter((el) => el.text.toLowerCase().includes(state.toLowerCase()) )
  
  
  const completedTodo = (text) => {
    console.log({text})
    const newTodos = [...todos];
    const todoIndex =  newTodos.findIndex((todo) => todo.text === text)
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed ;
    saveTodos(newTodos);
  }
  const addTodo = (newText) => {
    todos.push({
        text:newText,
        completed:false
    })
    saveTodos(todos)
  }
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    console.log({text})
    // const todoIndex =  newTodos.findIndex((todo) => todo.text === text)
    const ne = newTodos.filter(e=> e.text !== text);
    // newTodos[todoIndex].completed = !newTodos[todoIndex].completed ;
    saveTodos(ne);
  }
    return(

    <TodoContext.Provider value={{
        loading,
        error,
        completedTodos,
        totaltodos,
        serachTodos,
        setState,
        deleteTodo,
        state,
        openModal,
        setOpenModal,
        completedTodo,
        addTodo
    }}>
        {children}
    </TodoContext.Provider>
    );
}
export {TodoContext , TodoProvider}