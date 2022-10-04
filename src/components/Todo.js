import React from 'react'
import Form from 'react-bootstrap/Form';
const Todo = ({todo, onDelete,onComplete}) => {
  

  return (
    <div className='col todo'>
      
        <Form.Check className='btn-sm' onClick={(e)=> onComplete(todo.id)}
         type="checkbox"
         id="custom-switch"/>               
       <span className={todo.status ? 'done' : '' }>
       <span className="todoText"><b> {todo.text} at {todo.time}, Date: {todo.date}</b></span></span>
    <div>
   
    <button className='btn-ss' onClick={()=> onDelete(todo.id)}>x</button>        
    </div>
    </div>
  )

  
}

export default Todo