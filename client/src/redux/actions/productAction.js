import axios from 'axios'
import * as actionTypes from '../constants/productConstant'
const URL = 'http://localhost:8000';

export const getProducts = () => async (dispatch) =>{
    try{
        const res = await axios.get(`${URL}/products`);
        // console.log(res.data);
        dispatch({type: actionTypes.GET_PRODUCT_SUCCESS, payload: res.data})
    }
    catch(error) {
        dispatch( {type: actionTypes.GET_PRODUCTS_FAIL, payload:  error.message })
    }
}

export const getProductsDetails = (id) => async (dispatch) =>{
    try{
        dispatch({type : actionTypes.GET_PRODUCT_DETAILS_REQUEST});
        const {data} = await axios.get(`${URL}/products/${id}`);
        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data})
    }
    catch(error) {
        dispatch( {type: actionTypes.GET_PRODUCT_DETAILS_FAIL ,payload:  error.message })
    }
}