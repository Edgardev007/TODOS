import React from 'react';
import '../assets/css/TodoSearch.css'
import { TodoContext } from '../context/useContext';

export function TodoSearch (){
  const {setState , state} = React.useContext(TodoContext);

  const handleChange = (e) => {
    setState(e.target.value)
  }
    return(
      <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={state}
      onChange={handleChange}
    />
    );
  }