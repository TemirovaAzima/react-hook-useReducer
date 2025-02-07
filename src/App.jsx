import {useReducer, useState} from 'react'
import {cartReducer, initialStateFunction} from './components/CartReducer.jsx'
const App = ()=>{
    const [cart, dispatch] = useReducer(cartReducer, [], initialStateFunction);
    const [newItem , setNewItem] = useState("");
    return (
        <div>
           <h1>Shopping Cart</h1>
            <input
                value={newItem}
                type='text'
                placeholder="Enter a new item"
                onChange={(e)=> setNewItem(e.target.value)}/>
            <button onClick={()=>{
                if(newItem.trim()){
                    dispatch({type: "ADD_ITEM",payload:newItem});
                    setNewItem('');
                 }
              }}
            >
                Add Item</button>
            <div>
                <ul>
                    {cart.map((item)=>(
                    <li key={item.id}>
                        {item.name} - {item.quantity}
                        <button onClick={()=>dispatch({type:"INCREASE_QUANTITY", payload:item.id})}>
                            +
                        </button>
                        <button onClick={()=>dispatch({type:"DECREASE_QUANTITY", payload:item.id})}>
                            -
                        </button>
                        <button onClick={()=>dispatch({type:"DELETE_ITEM", payload:item.id})}>
                            delete
                        </button>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default App

