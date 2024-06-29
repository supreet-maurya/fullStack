import express from 'express'
import { userSignUp , userLogin } from '../controller/user-controller.js';
import { getProducts } from '../controller/product-controller.js';
const Router = express.Router();
import { getProductById } from '../controller/product-controller.js';
import { addPaymentGateway } from '../controller/paymentController.js';

Router.post('/signup' , userSignUp );
Router.post('/login' , userLogin);
Router.get('/products' , getProducts);

Router.get('/products/:id' , getProductById);
Router.post('/payment/' , addPaymentGateway);

export default Router;