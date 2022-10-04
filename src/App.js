import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState} from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [showForm, setShowForm] = useState(false)
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Create App",
      date:"09/02/2025",
      time:"02:078",
      status: false

    },
    {
      id: 2,
      text: "Create Mobile",
      date:"07/8/2022",
      time:"02:02",
      status: false
    },
    {
      id: 3,
      text: "Time to sleep",
      date:"01/02/2022",
      time:"02:02",
      status: false
    },
  ]);

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    console.log(newTodos)
    setTodos(newTodos)
  }


  const completeTodo =  (id) => {    
    const newTodos = todos.map(
      todos => todos.id === id 
      ? ({ ...todos, status: !todos.status }) 
      : (todos) )
      console.log(newTodos)
      setTodos(newTodos)
  }
   
  


  const addTodo = (text, date, time) => {
    const id = todos.length + 1;
    const newTodo = { id, text, date, time, status:false};
   setTodos([...todos, newTodo]);
  }



    

  return (
    
    
    <div className="App">
 
      <Header title="Todo App" addTodo = {() => setShowForm(!showForm)} showForm={showForm}/>
    
      {showForm ? <AddTodo onAdd={addTodo}/>:''}
      
     {todos && todos.length ? '':'no tasks...'} <Todos todos={todos} onComplete={completeTodo}  onDelete={deleteTodo} />

  
    
   
   
    </div>
    
  );
}

export default App;
