import React from 'react'
import '../assets/css/TodoForm.css'
import { TodoContext } from '../context/useContext';
function TodoForm() {

const {setOpenModal , addTodo} = React.useContext(TodoContext);
const [newTodoValue,setNewTodoValue] = React.useState('');
    const handleSubmit = (event) =>{
        event.preventDefault();
        setOpenModal(false);
        addTodo(newTodoValue)

    }
    const onCancel = () =>{
        setOpenModal(false);
    }
    const onChange = (e) =>{
        setNewTodoValue(e.target.value)
    }
  return (
    <form onSubmit={handleSubmit}>
        <label>Escribe Tu nuevo TODO</label>
        <textarea
            placeholder='cortasr'
            onChange={onChange}
            value={newTodoValue}
        />
        <div className='TodoForm-buttonContainer'>

        <button className='TodoForm-button TodoForm-button--cancel' onClick={onCancel}>Cancelar</button>
        <button className='TodoForm-button TodoForm-button--add'>Añadir</button>
        </div>
    </form>
  )
}

export default TodoForm