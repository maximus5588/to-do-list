import { useState } from 'react'

export const TodoForms = ({addTodo}) => {

   const [value,setValue] = useState("")
   const handleSubmit = e =>{

    e.preventDefault();

    addTodo(value);

    setValue("")
   }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
    <input type="text" value={value} placeholder="Enter Your Task" onChange={(e)=>setValue(e.target.value)}/>
    <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
