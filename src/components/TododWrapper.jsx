import { TodoForms } from './TodoForms'
import Todo from "./Todo";
import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid'

uuidv4();



export const TododWrapper = () => {
  
  const [todos,setTodos] = useState([])
  const addTodo = todo=>{
    setTodos([...todos,{id:uuidv4(),task:todo,completed:false,isEditing:false}])
    console.log(todos)
  }
  return (
    <div className='TodoWrapper'>
<TodoForms addTodo={addTodo}/>
{todos.map((todo,index)=>(
<Todo task = {todo} key={index}/>
))}



    </div>
  )
}
export default TododWrapper;
