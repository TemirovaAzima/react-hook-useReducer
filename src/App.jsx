import {useState, useReducer}  from 'react'
import {counterReducer, initialState} from "./components/CounterReducer.jsx";

const App = ()=> {

    const [state, dispatch] = useReducer(counterReducer, initialState)
    const [inputValue, setInputValue] = useState(0)

    const handleIncrement = ()=> dispatch({type: 'INCREMENT'});
    const handleDecrement = () => dispatch({type: 'DECREMENT'});
    const handleIncrementByAmount = ()=> {
        dispatch({type: "incrementByAmount", payload:Number(inputValue)}) ;
        setInputValue(0) ;}
    const handleDecrementByAmount = () => {
        dispatch({type: "decrementByAmount", payload: Number(inputValue)});
        setInputValue(0)
    }


    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <div>
            <input value={inputValue}
                   type="number"
                   placeholder='enter number'
                   onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={handleIncrementByAmount}>Add</button>
            <button onClick={handleDecrementByAmount}>Subtract</button>
        </div>
        </div>
    )
}
export default App
