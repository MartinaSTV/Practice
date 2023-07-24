import {  ToDoList  } from "../AddTodo/AddTodo"
import ToDoItem from '../ToDoItem/ToDoItem'
import { useState } from "react";
import { addTodo , removeTodoList } from "../../Actions/Action";
import { useDispatch } from "react-redux";
import './todos.scss'
import uuid from 'uuid-random';

interface ToDo{
    text: string, 
    id: string,
    done: boolean
}
interface TodoProps{
    todoList: ToDoList,
}

function TodoList(props: TodoProps){
    console.log(props.todoList)
    let ID = uuid() 
    let dispatch = useDispatch()
    let IDS = ID+ '1'
  
   let [inputValueText, setText] = useState('');
   let [todoo , settodoo]= useState <ToDo>()
 
   let todo:ToDo = {
       text: inputValueText,
       id: ID,
       done: false
   }

   function addToDos(){
      settodoo(todo)
      props.todoList.todos.push(todo)
      //dispatch(addTodo(todo))// Test
   }

   function removelist(){
     dispatch(removeTodoList(props.todoList.id))
     console.log(props.todoList.id)
   }

    let items = props.todoList.todos.map((item)=>{
        return <ToDoItem todoitem = { item }  key = {item.id}/>
    })  

    return(
        <section className="todos">
            <button className="todos__removebutton" onClick={ removelist }>x</button>
            <h1 className="todos__title">{props.todoList.title}</h1> 
            <label htmlFor={ IDS } className="todos__label">Lägg till ToDo</label>
            <input type="text" className="todos__input" id={ IDS } placeholder=" Lägg till Todo" onChange={ (e)=>{ setText(e.target.value)} }/> 
            <button className="todos__button" onClick={ addToDos }>Add ToDo</button>
            <article className="todos__items">{ items.length > 0? items: <p className="todo__items">Du har inga Todos att göra</p> }</article>
        </section>
    )
}
export default TodoList