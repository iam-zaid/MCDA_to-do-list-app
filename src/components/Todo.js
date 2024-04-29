import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, deleteTodo, toggleComplete}) => {
  return (
    <div className="Todo">
        <div className='d-flex justify-content-center align-items-center'>
      
          <input type="checkbox" onChange={()=>toggleComplete(task.id)}/>
          <p className={`${task.completed ? "completed" : "incompleted"} mb-0 ps-2`}> {task.task}</p>
        </div>
        <div>
        <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  )
}
