import { ToDo } from "../components/AddTodo/AddTodo"
import { ToDoList } from "../components/AddTodo/AddTodo"

 interface ActionToDoList {
    type : 'ADD_TODOLIST',
    payload: ToDoList
} 
interface ActionToD{
    type : 'ADD_TODO',
    payload: ToDo
}
interface ActionRemove{
    type : 'REMOVE_TODOLIST',
    payload: ToDoList
}
interface ActionUpdate{
    type : 'UPDATE_TODO',
    payload: string
}

function addTodoList(list: ToDoList) {
    return {
        type: 'ADD_TODOLIST',
        payload: list
    }
}
function addTodo(todo: ToDo ){
    return{
        type: 'ADD_TODO',
        payload: todo
    }
}
function removeTodoList(todo: string){
    return{
        type: 'REMOVE_TODO',
        payload: todo
    }
}
function updateTodo(todo: ToDo){
    return{
        type: 'UPDATE_TODO',
        payload: todo
    }

}
export { addTodoList, addTodo, removeTodoList, updateTodo }
export type {ActionToDoList, ActionToD, ActionRemove, ActionUpdate }