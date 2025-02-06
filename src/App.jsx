import  {useReducer} from 'react'
const initialState = {count: 0}
const reducer = (state, action)=>{

        switch(action.type){
            case "INCREMENT" :
                return({count: state.count + 1});
            case "DECREMENT" :
                return ({count: state.count -1 });
            case "RESET" :
                return ({count:0});
            default :
                throw new Error("Uknown action type")
        }

}

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1> Count :{state.count}</h1>
            <button onClick={()=> dispatch({type: "INCREMENT"})}>Increment</button>
            <button  onClick={()=> dispatch({type : "DECREMENT"})}>Decrement</button>
            <button onClick={()=>dispatch({type: "RESET"})}>Reset</button>
        </div>
    )
}
export default App

