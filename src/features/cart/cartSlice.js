import {createSlice} from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

const initialState={
    cartItems:cartItems,
    amount:3,
    total:0,
    isLoading:true,
}
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:
    {
       cartClear:(state)=>{
        state.cartItems=[];
       },
       removeItem:(state,action)=>{
        const itemId=action.payload
        state.cartItems=state.cartItems.filter((item)=>
        item.id!==itemId)
       },
       increase:(state,action)=>{
        
        const cartItem=state.cartItems.find((item)=>action.payload.id===item.id)
        cartItem.amount=cartItem.amount+1;
       },
       decrease:(state,action)=>{
        const cartItem=state.cartItems.find((item)=>action.payload.id===item.id)
         cartItem.amount-=1;
       },
       cartTotal:(state)=>
       {
         let amount=0;
         let total=0;
         state.cartItems.forEach((item)=>
         {
           amount+=item.amount;
           total+=item.amount*item.price;
         });
          state.amount=amount;
          state.total=total;

       }

    }
});
export const {cartTotal,decrease,increase,removeItem,cartClear} =cartSlice.actions;
export default cartSlice.reducer;
