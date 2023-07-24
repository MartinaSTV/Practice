import './App.scss'
import AddTodo from './components/AddTodo/AddTodo'
import ViewTodoLists from './components/ViewTodos/ViewTodos';
import {  useState } from "react";

// skapa viewTodos
// skapa addtodo
// starta med add todo där du hämtar infon och sparar i ett object.
// infon skickas/hämtas till reducer


// spara i localstorage?
// spara flera todolistor? 


function App() {


  return (
    <>
    <section className='App'>
    <h1 className='App__title'>Todos</h1>
      <ViewTodoLists />
      <AddTodo/>
    </section>
      
    </>
  )
}

export default App
