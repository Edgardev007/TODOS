import React from 'react'
import { ReactComponent as CheckSvg } from '../assets/svgs/check.svg'
import { ReactComponent as DeleteSvg } from '../assets/svgs/delete.svg'
import '../assets/css/TodoIcon.css'
const iconTypes = {
    "check":(color) => <CheckSvg className='Icon-svg'fill={color}/>,
    "delete":(color) =>  <DeleteSvg className='Icon-svg'fill={color} />
}
function TodoIcon({type , color , onClick}) {
  return (
    <span className={`Icon-container Icon-container-${type}`} onClick={onClick}>
        {iconTypes[type](color)}
    </span>
  )
}
export {TodoIcon}