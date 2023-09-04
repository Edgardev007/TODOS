import React from 'react'
import '../assets/css/CreateTodoButton.css'
import { TodoContext } from '../context/useContext'
export function CreateTodoButton () {
  const {setOpenModal} = React.useContext(TodoContext)
  const handleOnClick = (event) => {
    console.log('me diste Click',event)
    setOpenModal(state => !state)
  }
    return(
      <button 
      className="CreateTodoButton"
      onClick={handleOnClick}
      >
      +
      </button>
    )
  }