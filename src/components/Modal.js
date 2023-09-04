import React from 'react'
import  ReactDOM  from 'react-dom'
import '../assets/css/Modal.css'
function Modal({children}) {
  return ReactDOM.createPortal (
   <div className='Modal'>
    {children}
   </div>,
   document.getElementById('modal')
  )
}

export default Modal