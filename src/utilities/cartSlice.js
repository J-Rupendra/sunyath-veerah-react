import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem: (state, action)=>{
            state.items.push(action.payload)
        },
        clearCart: (state) => {
            // redux internally mutates the state
            // state.items.length=0 // we can empty using this or we can return the data whatever we wanted to updated into store
            state.items=[]
        }
    }
})

export  const {addItem, clearCart} = cartSlice.actions
export default cartSlice.reducer