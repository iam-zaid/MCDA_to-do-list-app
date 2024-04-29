import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      
        e.preventDefault();

        if (value) {

          addTodo(value);

          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm mt-3 pt-3">
      <div class="input-group mb-3">

    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input form-control" placeholder='What is the task today?' />
    <span onClick={(e)=>handleSubmit(e)} class="input-group-text py-0 my-0 bg-white cursor" id="basic-addon2">Add Task</span>
    </div>
  </form>
  )
}
