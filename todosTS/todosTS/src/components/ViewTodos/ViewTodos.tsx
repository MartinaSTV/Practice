import { useSelector } from 'react-redux';
import TodoList from '../Todos/Todos';
import { State } from '../../Reducer/Reducer';
import './viewtodos.scss'

function ViewTodoLists(){

    let list = useSelector((state:State) => { return state.TodoList})

    let todoElem = list.map((todoList)=>{
        console.log(todoList.id)
        return <TodoList todoList ={ todoList } key= { todoList.id} />
    })
    
    return(
        <section className='viewtodos'>
            <section className='viewtodos__elem'>{ todoElem.length >0? todoElem: <p>Du har inga Todo Listor</p> }</section>
        </section>
    )
}
export default ViewTodoLists