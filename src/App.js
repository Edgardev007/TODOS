//  import logo from './platzi.webp'; 17000
import './assets/css/App.css';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import React from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import TodosLoading from './components/TodosLoading';
import TodosError from './components/TodosError';
import EmptyTodos from './components/EmptyTodos';
import { TodoContext } from './context/useContext';
import Modal from './components/Modal';
import TodoForm from './components/TodoForm';


// const defaultTodos = [
//   {text:'pello',completed:false},
//   {text:'neido',completed:false},
//   {text:'grt',completed:false },
//   {text:'servere',completed:true},
//   {text:'Cali',completed:true},
// ];

// localStorage.setItem(itenName,JSON.stringify(defaultTodos))


function App() {
  const { openModal } = React.useContext(TodoContext);
  return (
    <React.Fragment>|
    <TodoCounter 
    // completed={completedTodos} total={totaltodos}

    />
    <TodoSearch  
    // state={state} 
    // setState={setState}

    />
    <TodoContext.Consumer>

     {
      ({loading, error , serachTodos , completedTodo , deleteTodo})=> (
        <TodoList>
      {loading &&<>
        <TodosLoading/>
        <TodosLoading/>
        <TodosLoading/>
        </>
      }
      {error && <TodosError/>}
      {!loading && serachTodos.length === 0 && <EmptyTodos/>}
        {serachTodos.map((element) => {
          return(
            <TodoItem 
            key={element.text}  
            text={element.text} 
            completed={element.completed}
            onCompleted ={completedTodo}
            onDelete= {()=> deleteTodo(element.text)}
            />)
        })}
      </TodoList>
      )
     }
    </TodoContext.Consumer>
    <CreateTodoButton/>
 
     {openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
     )

     }
     
    </React.Fragment>
  );
}






export default App;
