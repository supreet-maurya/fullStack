import {createStore , combineReducers , applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { getProductsReducer} from './reducers/ProductReducer'
import { getProductDetailsReducer } from './reducers/ProductReducer'
import {cartReducer} from './reducers/cartReducer'
const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails : getProductDetailsReducer,
    cart: cartReducer
})

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware)),
)

export default store;