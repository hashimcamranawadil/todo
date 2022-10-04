import Todo from './Todo'

const Todos = ({todos, onDelete,onEdit, onComplete}) => {
   
  return (
    <div>
        {todos.map((todo) =>
        (
           <Todo key={todo.id} todo={todo} onEdit={onEdit}  onComplete={onComplete}  onDelete={onDelete} />  
        ))
        }
        <p></p>
    </div>
  )
}

export default Todos