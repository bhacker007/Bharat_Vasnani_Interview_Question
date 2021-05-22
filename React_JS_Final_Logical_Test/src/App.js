
import React,{useState,useEffect}from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'reactstrap';
import Todos from './Components/Todos'
import TodoForm from "./Components/TodoForm"

function App() {
  const [todos,setTodos]=useState([]); 

  useEffect(()=>{
    const localTodos=localStorage.getItem("todos") 
    if (localTodos){
      setTodos(JSON.parse(localTodos))
     
    }
  },[]);

  const addTodos= async todo => {
    setTodos([...todos,todo])
  }


  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos]) 

  const markComplete=id=> {
    setTodos(todos.filter(todo =>todo.id !== id))
   
  }
  
  return (
    <Container>
      <h1 style={{color:"#242B2E"}}>Todo with local storage</h1>
      <Todos todos={ todos}  markComplete={markComplete}/> 
      <TodoForm addTodos={addTodos}/>
    </Container>
    )
}

export default App;
