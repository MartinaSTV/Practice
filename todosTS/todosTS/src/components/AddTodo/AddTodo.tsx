import './addtodo.scss';
import {  useState } from "react";
import uuid from 'uuid-random';
import { useDispatch, useSelector} from 'react-redux';
import { addTodoList, updateTodo } from '../../Actions/Action';
import { State } from '../../Reducer/Reducer';

interface ToDo{
    text: string, 
    id: string,
    done: boolean
} 
interface ToDoList{
    title: string,
    id: string,
    todos: ToDo[],
}

function AddTodo (){ 

    //let getTodos = useSelector( (state:State) => { return state.Todo})
    //console.log(getTodos)
 
    let id = uuid()
    let idInput = id + '3'
    let dispatch = useDispatch()

    let [inputValueTitle , setInput] = useState('');
    let [todos, settodos] = useState <ToDo[]>([]);
    //console.log(todos)
  
 
    let todoList: ToDoList = {
        title: inputValueTitle,
        id: id,
        todos: todos
    }
    console.log(todoList)

    function saveLists(){
     
        dispatch(addTodoList(todoList))
        //dispatch(updateTodo(getTodos))
        settodos([])
    }
    return(
        <section className='addtodo'>
            <article className='addtodo__titleInput'>
                <label htmlFor={ idInput } className='addtodo__title'>Lägg till titel på lista</label >
                <input type="text" className='addtodo__input' id={ idInput } placeholder="Titel" onChange={ (e)=>{ setInput(e.target.value)} }/>
            </article>
            <button className='addtodo__button' onClick={ saveLists }>Spara Lista</button>
        </section>
    )
}
export default AddTodo
export type {ToDo, ToDoList}