import {useReducer, useState} from 'react'
import {todoReducer, initialStateFunction} from './components/TodoReducer.jsx'
const App = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], initialStateFunction)
    const [newTodo, setNewTodo] = useState("")
    return (
        <div>
            <h1>Todo list</h1>
            <input
              value={newTodo}
              type="text"
              placeholder='enter a new todo'
              onChange={(e)=>setNewTodo(e.target.value)}/>
            <button onClick={()=> {
               if(newTodo.trim()){
                   dispatch({type:"ADD_TODO", payload: newTodo});
                   setNewTodo("")
                  }
               }}
           >
                Add todo
               </button>
             <ul>
                {todos.map((todo)=>
                    <li key={todo.id} style={{textDecoration: todo.completed ? "line-through" : "none"}}>
                        {todo.text}
                    <button onClick={()=>dispatch( {type:"TOGGLE_TODO", payload:todo.id})}>
                         Toggle
                    </button>
                        <button onClick={()=> dispatch({type:"DELETE_TODO", payload:todo.id })}>
                             Delete
                        </button>
                    </li>
                )}
             </ul>
        </div>
    )
}
export default App

