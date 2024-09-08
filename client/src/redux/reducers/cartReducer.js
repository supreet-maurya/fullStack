import * as actionType from '../constants/cartConstants';

export const cartReducer = ( state = { cartItems: [] } , action ) => {
    // console.log("inside reducer");
    // console.log(action);
    // console.log(state);

    switch(action.type) {
        case actionType.ADD_TO_CART:
            const item = action.payload;
            const exist = state.cartItems.find(product => product.id === item.id ) ;
            // console.log("exist = ");
            // console.log(item);
            // console.log(exist);
            if( exist ) {
                return { ...state , cartItems: state.cartItems.map(data => data.product === exist.product ? item : data )}
            }
            else {
                // console.log(state.cartItems);
                // console.log("else");
                let ret =  { ...state , cartItems: [...state.cartItems , item ] }
                // console.log("ret = ");
                // console.log(ret);
                return ret;
            }
        
        case actionType.REMOVE_FROM_CART:
                // console.log("Removing item with id:", action.payload.id);
                // console.log("Current cartItems:", state.cartItems);
                const updatedCartItems = state.cartItems.filter(product => product.id !== action.payload);
                // console.log("Filtered cartItems:", updatedCartItems);
                return {
                    ...state,
                    cartItems: updatedCartItems,
                };
        default :
            return state;
    }
}