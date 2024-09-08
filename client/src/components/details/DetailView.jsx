import { useEffect } from "react"
import { useDispatch , useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { getProductsDetails } from "../../redux/actions/productAction";
import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetail";

const DetailView = () =>{

    const dispatch = useDispatch();
    const {id} = useParams();

    const { product } = useSelector(state => state.getProductDetails);
    const loading = useSelector(state => state.getProductDetails.loading);

    // console.log(product);
    // {
    //     let a = 0;
    //     if( product && ++a && Object.keys(product).length > 0 && ++a ) {
    //         console.log("outside");
    //         console.log(product);
    //     }
    //     console.log(a);
    // }
    // console.log(typeof(product));
    // if( product){
    //     console.log("urt");
    // }
    // if( product && ++a && Object.keys(product).length > 0) {
    //     console.log("outside");
    //     console.log(product);
    // }
    // console.log(a);

    useEffect(()=>{
        // console.log(product);
        // if( product ) {
        //     console.log("Not empty");
        //     console.log(product.id);
        // }
        if( product && id !== product.id) {
            dispatch(getProductsDetails(id));
        }
    } , [dispatch, id, loading, product])

    return (
        <div>
            {
                !loading && product && Object.keys(product).length && 
                
                <div className=" sm:flex justify-center gap-5  p-2 mt-[85px] ">

                    <div className="">
                        <ActionItem product = {product}></ActionItem>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <ProductDetail product = {product} ></ProductDetail>
                    </div>
                </div>
            }
        </div>
    )
}

export default DetailView