import { ToDo, ToDoList } from "../components/AddTodo/AddTodo"
import { ActionToDoList, ActionToD, ActionRemove , ActionUpdate} from "../Actions/Action"

interface State{
    TodoList: ToDoList[],
    Todo: ToDo[]
}

const initialState: State  = {
    TodoList: [],
    Todo: []
}

type Actions =  ActionToDoList | ActionToD | ActionRemove | ActionUpdate

const reducer = (state = initialState, action: Actions) => {
    switch( action.type ) {

        case 'ADD_TODO':

            return{
                ...state,
                Todo: [...state.Todo, action.payload]
            }

        case 'REMOVE_TODOLIST':
            
            const NewTodoList= [...state.TodoList]
       

            return{
                ...state,
                TodoList: NewTodoList
            }
        
        case 'ADD_TODOLIST':

            return{
                ...state,
                TodoList: [...state.TodoList, action.payload]
            }
            default:
                return state

    }
}
export { reducer }
export type { State }