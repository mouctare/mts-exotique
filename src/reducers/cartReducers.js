import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) =>{
    switch(action.type){
         case CART_ADD_ITEM:
             const item = action.payload;
             const existItem = state.cartItems.find((x) => x.product === item.product);
             // On verifie si un prduit exist
             if(existItem){
                 return {
                     ...state,
                     cartItems: state.cartItems.map((x) => x.product === existItem.product ? item: x)
                 };
             } else {
                 return {...state, cartItems: [...state.cartItems, item] };
             }
             case CART_REMOVE_ITEM:
                 // Suppression
                 // On récupère tout ce qu'il ya dans le state et on met à jour le panier en supprimant le produit réçu en argument
                 return {...state, cartItems: state.cartItems.filter( x => x.product !== action.payload) }
             default:
                 return state;
    }

}


