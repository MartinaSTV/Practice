import { ToDo } from "../AddTodo/AddTodo"
import {  useState } from "react";
import './todoitem.scss'

interface ToDoItemProps{
    todoitem : ToDo
}

function ToDoItem(props: ToDoItemProps){
    console.log(props.todoitem.text)
    let [text, setText] = useState(props.todoitem.text)

    console.log(text)
   
    return(
        <section className="todoitem">
            <p>{ text }</p>
            <input type="checkbox" className="todoitem__checkbox" />
        </section>
    )
}
export default ToDoItem