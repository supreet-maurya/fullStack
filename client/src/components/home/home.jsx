import { useEffect } from 'react'
import Navbar from "./Navbar"
import Banner from "./Banner" 
// import { Fragment } from "react"
import Slide from './Slide'
import MidSlide from './MidSlide'
import Midsection from './Midsection'

import { getProducts } from '../../redux/actions/productAction'
import { useDispatch , useSelector } from 'react-redux'
const Home = () =>{

    let  { products }  = useSelector(state => state.getProducts);
    // console.log(products);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
    } , [dispatch] )

    return (
        <div className="bg-[#e3e6e6]">
            <Navbar />
            
            <div className="p-3">
                <Banner/>
                <MidSlide products = {products} title = {"Deal of the Day" } timer = {true} />
                <Midsection/>
                <Slide products = {products} title = {"Discounts for You" } />
                <Slide products = {products} title = {"Top Picks" } />

            </div>
        </div>
    )
}

export default Home