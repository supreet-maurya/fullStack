import { products } from "./constants/data.js"
import Product from "./model/product-schema.js";

const DefaultData = async () =>{
    try {
        await Product.insertMany(products);
        console.log("inserted");
    }catch(error) {
        console.log("Error while inserting default data" ,error.message);
    }
}

export default DefaultData ;