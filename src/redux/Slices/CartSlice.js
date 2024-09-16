import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add:(state,action) => {
            const item = {
                ...action.payload,
                price: Number(parseFloat(action.payload.price).toFixed(2))
            };
            state.push(item);
        },
        remove:(state,action) => {
            return state
            .filter((item) => item.id !== action.payload)
            .map(item => ({
                ...item,
                price: Number(parseFloat(item.price).toFixed(2)) // Format remaining items' prices to 2 decimal places
            }));
        },
    }
});

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;