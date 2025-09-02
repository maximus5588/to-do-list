import { useState } from 'react'

export const TodoForms = ({ addTodo }) => {
  const [value, setValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    
    if (!value.trim()) {
      alert("Please enter a task!") 
      return
    }

    addTodo(value)
    setValue("")
  }

  return (


    <form className="TodoForm" onSubmit={handleSubmit}>
  
      <input className='todo-input'
        type="text" 
        value={value} 
        placeholder="Enter Your Task" 
        onChange={(e) => setValue(e.target.value)} 
      />
      <button 
        type="submit" 
        className="todo-btn"
        disabled={!value.trim()} 
      >
        Add Task
      </button>
    </form>
      
  )
}
