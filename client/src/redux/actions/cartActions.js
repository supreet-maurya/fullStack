import axios from "axios";
import * as actionTypes from '../constants/cartConstants'
const URL = 'http://localhost:8000'

export const addToCart = (id , quantity) => async (dispatch) => {
    try {
        const {data} = await axios.get(`${URL}/products/${id}`);
        // console.log("data");
        // console.log(data);
        dispatch( {type: actionTypes.ADD_TO_CART , payload: {...data , quantity}} )
        // console.log("dispatched");
    }
    catch (error) {
        dispatch({type: actionTypes.ADD_TO_CART_ERROR , payload: error.message });
    }
}

export const removeFromCart = (id) => (dispatch) => {
    dispatch( {type: actionTypes.REMOVE_FROM_CART , payload: id } );
}