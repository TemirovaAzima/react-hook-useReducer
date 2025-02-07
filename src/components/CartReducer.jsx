export const initialStateFunction =()=>{
    return [
        {id:1, name: "Banana", quantity:1},
        {id:2, name: "Apple", quantity:3}
    ];
};
export const cartReducer = (state,action)=>{
   switch(action.type){
       case "ADD_ITEM":
            { const existingItem = state.find((item) => item.name === action.payload);
            if (existingItem) {
               return state.map((item) => {
                   item.name = action.payload
                       ? {...item, quantity: item.quantity + 1}
                       : item
               });
           }
            return [...state ,{id:Date.now(), name:action.payload, quantity: 1}];}
       case "INCREASE_QUANTITY":
           return state.map((item)=>
               item.id === action.payload
                   ? {...item ,quantity: item.quantity +1}
                   : item
           );
       case "DECREASE_QUANTITY":
           return state.map((item)=>
                item.id === action.payload
                   ? {...item, quantity: item.quantity - 1}
                   : item
                )
               .filter((item)=> item.quantity>0);
       case "DELETE_ITEM" :
           return state.filter((item)=> item.id!==action.payload)
       default :
           return state;
   }
};